package com.tradeify.tradeify_ws.productViews;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.user.Users;

@Service
public class ProductViewsService {
	
	ProductViewsRepository productViewsRepository;

	public ProductViewsService(ProductViewsRepository productViewsRepository) {
		super();
		this.productViewsRepository = productViewsRepository;
	}

	public void save(Users user, long productId) {
		
		ProductViews view = getByProductAndUser(productId, user.getId());
		
		if(view != null) {
			view.setViewCount(view.getViewCount() + 1);
		} else {
			view = new ProductViews();
		
			view.setUserId(user.getId());
			view.setTimestamp(new Date());
			view.setProductId(productId);
			view.setViewCount(1);
		}
		
		productViewsRepository.save(view);
	}
	
	public ProductViews getByProductAndUser(long productId, long userId) {
		return productViewsRepository.findByProductIdAndUserId(productId, userId);
	}
}
