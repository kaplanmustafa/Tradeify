package com.tradeify.tradeify_ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.tradeify.tradeify_ws.user.vm.UserUpdateVM;

public class UniquePhoneUpdateValidator implements ConstraintValidator<UniquePhoneUpdate, UserUpdateVM>{

	@Autowired
	UserRepository userRepository;

	@Override
	public boolean isValid(UserUpdateVM userUpdateVM, ConstraintValidatorContext context) {
		Users inDB = userRepository.findByPhone(userUpdateVM.getPhone());
		
		if(inDB == null) {
			return true;
		}
		      
		if(inDB.getEmail().equals(userUpdateVM.getEmail())) {
			return true;
		}
		
		return false;
	}
}
