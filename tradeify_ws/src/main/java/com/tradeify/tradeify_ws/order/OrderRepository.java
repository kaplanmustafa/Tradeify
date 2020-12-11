package com.tradeify.tradeify_ws.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface OrderRepository extends JpaRepository<Orders, Long>, JpaSpecificationExecutor<Orders>{
	
	
}
