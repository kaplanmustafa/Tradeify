package com.tradeify.tradeify_ws.user;

import java.util.UUID;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.error.NotFoundException;
import com.tradeify.tradeify_ws.shared.MailService;
import com.tradeify.tradeify_ws.user.vm.PasswordUpdateVM;
import com.tradeify.tradeify_ws.user.vm.UserUpdateVM;

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
		
		mailService.sendMail(user, uuid);
	}

	public void verifyEmail(String keyreg) {
		Users inDB = getByKeyreg(keyreg);
		inDB.setActive(true);
		userRepository.save(inDB);
	}
	
	public Users getByKeyreg(String keyreg) {
		Users inDB = userRepository.findByKeyreg(keyreg); 
		
		if(inDB == null) {
			throw new NotFoundException();
		}
		
		return inDB;
	}
	
	public Users getByEmail(String email) {
		Users inDB = userRepository.findByEmail(email);
		
		if(inDB == null) {
			throw new NotFoundException();
		}
		
		return inDB;
	}
	
	public Users updateUser(String email, UserUpdateVM updatedUser) {
		
		Users inDB = getByEmail(email);

		inDB.setEmail(updatedUser.getEmail());
		inDB.setName(updatedUser.getName());
		inDB.setSurname(updatedUser.getSurname());
		inDB.setBirthDate(updatedUser.getBirthDate());
		inDB.setGender(updatedUser.getGender());
		inDB.setPhone(updatedUser.getPhone());
				
		return userRepository.save(inDB);
	}
	
	public Users updatePassword(String email, PasswordUpdateVM passwordUpdateVM) {
		
		Users inDB = getByEmail(email);
		inDB.setPassword(this.passwordEncoder.encode(passwordUpdateVM.getNewPassword()));
				
		return userRepository.save(inDB);
	}
	
	public void deleteUser(String email) {
		Users inDB = userRepository.findByEmail(email);
		userRepository.delete(inDB);
	}
}
