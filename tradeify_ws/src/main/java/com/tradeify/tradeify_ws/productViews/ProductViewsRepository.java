package com.tradeify.tradeify_ws.productViews;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductViewsRepository extends MongoRepository<ProductViews, String>{
	
	ProductViews findByProductIdAndUserId(Long productId, long userId);
}
