package com.tradeify.tradeify_ws.user.vm;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.tradeify.tradeify_ws.user.UniqueEmailUpdate;
import com.tradeify.tradeify_ws.user.UniquePhoneUpdate;

import lombok.Data;

@Data
@UniqueEmailUpdate
@UniquePhoneUpdate
public class UserUpdateVM {
	
	private long id;
	
	@NotNull(message = "{tradeify.constraints.email.NotNull.message}")
	@Size(min = 1, max= 255)
	@Email(message = "{tradeify.constraint.email.Valid.message}")
	private String email;
	
	@NotNull
	@Pattern(regexp = "^[\\p{L} .'-]+$", message = "{tradeify.constraint.name.Valid.message}")
	@Size(min = 1, max= 255)
	private String name;
	
	@NotNull
	@Pattern(regexp = "^[\\p{L} .'-]+$", message = "{tradeify.constraint.surname.Valid.message}")
	@Size(min = 1, max= 255)
	private String surname;
	
	@NotNull
	@Past(message = "{tradeify.constraint.date.Past.message}")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date birthDate;
	
	@NotNull
	@Size(min = 11, max= 11, message = "{tradeify.constraint.phone.Valid.message}")
	@Pattern(regexp="[0-9\\\\s]{11}", message = "{tradeify.constraint.phone.Pattern.message}")
	private String phone;
	
	@NotNull(message = "{tradeify.constraint.gender.NotNull.message}")
    private String gender;
	
}
