package com.tradeify.tradeify_ws.product.validators;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = { FloatValueValidator.class })
public @interface FloatValue {
	String message() default "{tradeify.constraints.price.Control.message}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
