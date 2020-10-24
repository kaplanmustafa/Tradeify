package com.tradeify.tradeify_ws.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.shared.MailService;

@RestController
@RequestMapping("/api/1.0")
public class UserController {

	@Autowired
	UserService userService;
	
	@Autowired
	MailService mailService;
	
	@PostMapping("/users")
	public GenericResponse createUser(@Valid @RequestBody Users user) { 
		
		userService.save(user);
		return new GenericResponse("User Created"); 
	}
}
