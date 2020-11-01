package com.tradeify.tradeify_ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.tradeify.tradeify_ws.user.vm.UserUpdateVM;

public class UniqueEmailUpdateValidator implements ConstraintValidator<UniqueEmailUpdate, UserUpdateVM>{

	@Autowired
	UserRepository userRepository;

	@Override
	public boolean isValid(UserUpdateVM userUpdateVM, ConstraintValidatorContext context) {
		Users inDB = userRepository.findByEmail(userUpdateVM.getEmail());
		
		if(inDB == null) {
			return true;
		}
		   
		if(inDB.getPhone().equals(userUpdateVM.getPhone())) {
			return true;
		}
		
		return false;
	}
}
