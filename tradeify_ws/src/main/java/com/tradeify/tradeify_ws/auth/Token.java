package com.tradeify.tradeify_ws.auth;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.tradeify.tradeify_ws.user.Users;

import lombok.Data;

@Entity
@Data
public class Token {

	@Id
	private String token;
	
	@ManyToOne 
	private Users user;
}
