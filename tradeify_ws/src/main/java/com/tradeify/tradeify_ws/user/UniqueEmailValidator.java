package com.tradeify.tradeify_ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String>{

	@Autowired
	UserRepository userRepository;
	
	public boolean isValid(String email, ConstraintValidatorContext context) {
		
		Users user = userRepository.findByEmail(email);
		
		if(user != null) {
			return false;
		}
		
		return true;
	}

}
