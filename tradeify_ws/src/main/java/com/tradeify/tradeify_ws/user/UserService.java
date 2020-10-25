package com.tradeify.tradeify_ws.user;

import java.util.UUID;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.shared.MailService;

@Service
public class UserService {

	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	MailService mailService;
	
	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, MailService mailService) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.mailService = mailService;
	}
	
	public void save(Users user) {
		String uuid = UUID.randomUUID().toString();	
		user.setKeyreg(uuid);
		user.setActive(false);
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		
		userRepository.save(user);
		
		//mailService.sendMail(user, uuid);
	}
}
