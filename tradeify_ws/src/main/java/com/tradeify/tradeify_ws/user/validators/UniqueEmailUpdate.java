package com.tradeify.tradeify_ws.user.validators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target( {ElementType.TYPE , ElementType.FIELD} ) 
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailUpdateValidator.class)
public @interface UniqueEmailUpdate {
	String message() default "{tradeify.constraint.email.UniqueEmail.message}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}