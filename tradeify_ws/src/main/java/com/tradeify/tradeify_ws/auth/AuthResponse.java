package com.tradeify.tradeify_ws.auth;

import com.tradeify.tradeify_ws.user.vm.UserVM;

import lombok.Data;

@Data
public class AuthResponse {

	private String token;
	
	private UserVM user;
}
