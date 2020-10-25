package com.tradeify.tradeify_ws.auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class EmailVerificationException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7941542736943563963L;
}
