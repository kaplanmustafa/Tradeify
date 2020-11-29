package com.tradeify.tradeify_ws.product.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class FloatValueValidator implements ConstraintValidator<FloatValue, String>{
	
	public boolean isValid(String currentValue, ConstraintValidatorContext context) {
		
		if(currentValue == null) {
			return true;
		}
		
		try {
			Float.valueOf(currentValue);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
