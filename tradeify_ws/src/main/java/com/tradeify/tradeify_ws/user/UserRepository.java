package com.tradeify.tradeify_ws.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long>{
	
	Users findByEmail(String email);
}
