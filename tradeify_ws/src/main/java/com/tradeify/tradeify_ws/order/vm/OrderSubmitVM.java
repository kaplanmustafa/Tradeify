package com.tradeify.tradeify_ws.order.vm;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class OrderSubmitVM {

	@NotNull
	@Size(min = 16, max = 16, message = "{tradeify.constraint.card.Valid.message}")
	@Pattern(regexp="[0-9\\\\s]{16}", message = "{tradeify.constraint.card.pattern.Valid.message}")
	private String cardNumber;
	
	@NotNull
	@Size(min = 2)
	@Pattern(regexp = "^[\\p{L} .'-]+$", message = "{tradeify.constraint.fullname.Valid.message}")
	private String fullName;
	
	@NotNull
	private String month;
	
	@NotNull
	private String year;
	
	@NotNull
	@Size(min = 3, max = 3, message = "{tradeify.constraint.cvc.Valid.message}")
	@Pattern(regexp="[0-9\\\\s]{3}", message = "{tradeify.constraint.cvc.pattern.Valid.message}")
	private String cvc;
	
	@NotNull
	private String address;
}
