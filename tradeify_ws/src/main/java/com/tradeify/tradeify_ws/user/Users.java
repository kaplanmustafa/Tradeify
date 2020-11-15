package com.tradeify.tradeify_ws.user;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import com.tradeify.tradeify_ws.auth.Token;
import com.tradeify.tradeify_ws.role.Role;
import com.tradeify.tradeify_ws.user.validators.UniqueEmail;
import com.tradeify.tradeify_ws.user.validators.UniquePhone;

import lombok.Data;

@Data 
@Entity
public class Users implements UserDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5165190637252786122L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull(message = "{tradeify.constraints.email.NotNull.message}")
	@Size(min = 1, max= 255)
	@UniqueEmail
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
	@UniquePhone
	private String phone;
	
	@NotNull(message = "{tradeify.constraint.gender.NotNull.message}")
    private String gender;
	
	@NotNull
	@Size(min = 8, max= 255)
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", 
	message = "{tradeify.constraints.password.Pattern.message}")
	private String password;
	
	private String address1;
	private String address2;
	private String address3;
	
	private String keyreg;
	
	private boolean isActive;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Token> tokens;
	
	@OneToOne(mappedBy="user")
	private Role role;

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.createAuthorityList("Role_" + role.getName());
	}

	public boolean isAccountNonExpired() {
		return true;
	}

	public boolean isAccountNonLocked() {
		return true;
	}

	public boolean isCredentialsNonExpired() {
		return true;
	}

	public boolean isEnabled() {
		return isActive;
	}

	@Override
	public String getUsername() {
		return null;
	}
}
