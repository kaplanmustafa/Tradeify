package com.tradeify.tradeify_ws.auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class AuthException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 205770784138425948L;
}
