package com.tradeify.tradeify_ws.auth;

import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.user.UserRepository;
import com.tradeify.tradeify_ws.user.Users;
import com.tradeify.tradeify_ws.user.vm.UserVM;

@Service
public class AuthService {

	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	TokenRepository tokenRepository;
	
	public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenRepository tokenRepository) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.tokenRepository = tokenRepository;
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
