package com.tradeify.tradeify_ws.productViews;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductViewsRepository extends MongoRepository<ProductViews, String>{
	
	ProductViews findByProductIdAndUserId(Long productId, long userId);
	
	Page<ProductViews> findAllByUserId(long userId, Pageable page);
}
