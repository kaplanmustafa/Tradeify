package com.tradeify.tradeify_ws.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.shared.MailService;
import com.tradeify.tradeify_ws.user.vm.PasswordUpdateVM;
import com.tradeify.tradeify_ws.user.vm.UserUpdateVM;
import com.tradeify.tradeify_ws.user.vm.UserVM;

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
	
	@PostMapping("/users/{keyreg}")
	public GenericResponse verifyEmail(@PathVariable String keyreg) {
		userService.verifyEmail(keyreg);
		return new GenericResponse("Email verified");
	}
	
	@GetMapping("/users/{email}") 
	UserVM getUser(@PathVariable String email) {
		Users user = userService.getByEmail(email);
		return new UserVM(user);
	}
	
	@PutMapping("/users/{email}")
	@PreAuthorize("#email == principal.email") 
	UserVM updateUser(@Valid @RequestBody UserUpdateVM updatedUser, @PathVariable String email) {
		Users user = userService.updateUser(email, updatedUser);
		return new UserVM(user);
	}
	
	@PutMapping("/users/password/{email}")
	@PreAuthorize("#email == principal.email") 
	UserVM updatePassword(@Valid @RequestBody PasswordUpdateVM updatedPassword, @PathVariable String email) {
		Users user = userService.updatePassword(email, updatedPassword);
		return new UserVM(user);
	}
}
