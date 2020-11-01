package com.tradeify.tradeify_ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.tradeify.tradeify_ws.user.vm.PasswordUpdateVM;

public class CurrentPasswordControlValidator implements ConstraintValidator<CurrentPasswordControl, PasswordUpdateVM>{

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public boolean isValid(PasswordUpdateVM passwordUpdateVM, ConstraintValidatorContext context) {
		
		Users inDB = userRepository.findByEmail(passwordUpdateVM.getEmail());
		
		boolean matches = passwordEncoder.matches(passwordUpdateVM.getCurrentPassword(), inDB.getPassword());
		
		if(matches) {
			return true;
		}
		
		return false;
	}
}
