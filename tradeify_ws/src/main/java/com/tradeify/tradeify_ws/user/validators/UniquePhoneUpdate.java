package com.tradeify.tradeify_ws.user.validators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target( {ElementType.TYPE , ElementType.FIELD}) 
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniquePhoneUpdateValidator.class)
public @interface UniquePhoneUpdate {
	String message() default "{tradeify.constraint.phone.UniquePhone.message}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
