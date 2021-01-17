package com.tradeify.tradeify_ws.auth;

import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.shared.MailService;
import com.tradeify.tradeify_ws.shared.RandomPasswordService;
import com.tradeify.tradeify_ws.user.UserRepository;
import com.tradeify.tradeify_ws.user.UserService;
import com.tradeify.tradeify_ws.user.Users;
import com.tradeify.tradeify_ws.user.vm.UserVM;

@Service
public class AuthService {

	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	TokenRepository tokenRepository;
	RandomPasswordService randomPasswordService;
	UserService userService;
	MailService mailService;
	
	public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenRepository tokenRepository,
			RandomPasswordService randomPasswordService, UserService userService, MailService mailService) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.tokenRepository = tokenRepository;
		this.randomPasswordService = randomPasswordService;
		this.userService = userService;
		this.mailService = mailService;
	}

	public AuthResponse authenticate(Credentials credentials) {
		Users inDB = userRepository.findByEmail(credentials.getEmail());
		if(inDB == null) {
			throw new AuthException();
		} else if(!inDB.isActive()) {
			throw new EmailVerificationException();
		}
		
		boolean matches = passwordEncoder.matches(credentials.getPassword(), inDB.getPassword());
		
		if(!matches) {
			throw new AuthException();
		}
		
		UserVM userVM = new UserVM(inDB);
		String token = generateRandomToken();
		
		Token tokenEntity = new Token();
		tokenEntity.setToken(token);
		tokenEntity.setUser(inDB);
		tokenRepository.save(tokenEntity);
		
		AuthResponse response = new AuthResponse();
		response.setToken(token);
		response.setUser(userVM);
		return response;
	}
	
	public void resetPassword(Credentials credentials) {
		Users inDB = userRepository.findByEmail(credentials.getEmail());
		if(inDB == null) {
			throw new AuthException();
		} else if(!inDB.isActive()) {
			throw new EmailVerificationException();
		} else if(inDB.getRole().getName().equals("admin")) {
			throw new AuthException();
		}
		
		Users user = userService.getByEmail(credentials.getEmail());
		String newPassword = randomPasswordService.generatePassword(8);
		user.setPassword(this.passwordEncoder.encode(newPassword));
		userRepository.save(user);
		
		mailService.sendPasswordResetMail(user, newPassword);
	}

	@Transactional
	public UserDetails getUserDetails(String token) {
		Optional<Token> optionalToken = tokenRepository.findById(token);
		if(!optionalToken.isPresent()) {
			return null;
		}
		
		return optionalToken.get().getUser();
	}
	
	public String generateRandomToken() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

	public void clearToken(String token) {
		tokenRepository.deleteById(token);
	}

}
