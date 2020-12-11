package com.tradeify.tradeify_ws.cart;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface CartRepository extends JpaRepository<Cart, Long>, JpaSpecificationExecutor<Cart>{
	
	Cart findByUserIdAndProductIdAndOrderIsNull(Long userId, Long productId);
	
	List<Cart> findAllByUserId(Long userId);
	
	List<Cart> findAllByUserIdAndOrderIsNull(Long userId);
	
	Long countByUserIdAndOrderIsNull(Long userId);
}
