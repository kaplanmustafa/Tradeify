package com.tradeify.tradeify_ws.user.validators;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = {UniquePhoneValidator.class})
public @interface UniquePhone {
	String message() default "{tradeify.constraint.phone.UniquePhone.message}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
