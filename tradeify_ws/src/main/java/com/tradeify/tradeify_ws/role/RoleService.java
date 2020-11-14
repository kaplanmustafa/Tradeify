package com.tradeify.tradeify_ws.role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.user.Users;

@Service
public class RoleService {
	
	@Autowired
	RoleRepository roleRepository;
	
	public void saveUserRole(Users user) {
		Role role = new Role();
		
		role.setName("user");
		role.setUser(user);
		
		roleRepository.save(role);
	}
}
