package com.tradeify.tradeify_ws.auth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, String>{

}
