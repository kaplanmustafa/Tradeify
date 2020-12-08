package com.tradeify.tradeify_ws.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface CartRepository extends JpaRepository<Cart, Long>, JpaSpecificationExecutor<Cart>{
	
	Cart findByUserIdAndProductId(Long userId, Long productId);
}
