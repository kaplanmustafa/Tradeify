package com.tradeify.tradeify_ws.user.vm;

import java.util.Date;

import com.tradeify.tradeify_ws.user.Users;

import lombok.Data;

@Data
public class UserVM {
	
	private long id;

	private String email;
	
	private String name;
	
	private String surname;
	
	private String phone;
	
	private String gender;
	
	private Date birthDate;
	
	private String address1;
	
	private String address2;
	
	private String address3;
	
	
		
	public UserVM(Users user) {
		this.setId(user.getId());
		this.setEmail(user.getEmail());
		this.setName(user.getName());
		this.setSurname(user.getSurname());
		this.setPhone(user.getPhone());
		this.setGender(user.getGender());
		this.setBirthDate(user.getBirthDate());
		this.setAddress1(user.getAddress1());
		this.setAddress2(user.getAddress2());
		this.setAddress3(user.getAddress3());
	}
}
