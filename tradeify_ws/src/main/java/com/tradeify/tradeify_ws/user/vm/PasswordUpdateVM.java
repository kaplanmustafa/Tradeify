package com.tradeify.tradeify_ws.user.vm;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.user.validators.CurrentPasswordControl;

import lombok.Data;

@Data
@CurrentPasswordControl
public class PasswordUpdateVM {
	
	private long id;
	
	private String email;
	
	@NotNull
	private String currentPassword;
	
	@NotNull
	@Size(min = 8, max= 255)
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", 
	message = "{tradeify.constraints.password.Pattern.message}")
	private String newPassword;
}
