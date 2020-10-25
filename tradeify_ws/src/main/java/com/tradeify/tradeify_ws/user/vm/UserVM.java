package com.tradeify.tradeify_ws.user.vm;

import com.tradeify.tradeify_ws.user.Users;

import lombok.Data;

@Data
public class UserVM {

	private String email;
	
	private String name;
	
	private String surname;
	
	private String image;
		
	public UserVM(Users user) {
		this.setEmail(user.getEmail());
		this.setName(user.getName());
		this.setSurname(user.getSurname());
		this.setImage(user.getImage());
	}
}
