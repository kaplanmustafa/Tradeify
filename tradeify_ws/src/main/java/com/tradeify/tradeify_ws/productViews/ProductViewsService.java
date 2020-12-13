package com.tradeify.tradeify_ws.productViews;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.Product;
import com.tradeify.tradeify_ws.product.ProductService;
import com.tradeify.tradeify_ws.product.vm.ProductCoverVM;
import com.tradeify.tradeify_ws.user.Users;

@Service
public class ProductViewsService {
	
	ProductViewsRepository productViewsRepository;
	ProductService productService;

	public ProductViewsService(ProductViewsRepository productViewsRepository, ProductService productService) {
		super();
		this.productViewsRepository = productViewsRepository;
		this.productService = productService;
	}

	public void save(Users user, long productId) {
		
		ProductViews view = getByProductAndUser(productId, user.getId());
		
		if(view != null) {
			view.setViewCount(view.getViewCount() + 1);
			view.setTimestamp(new Date());
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

	public List<ProductCoverVM> getViewedProductByUser(Users user, Pageable page) {
		
		Page<ProductViews> views = productViewsRepository.findAllByUserId(user.getId(), page);
		List<ProductCoverVM> coverVM = new ArrayList<>();
		
		for(ProductViews view : views) {
			Product product = productService.getProductById(view.getProductId());
			coverVM.add(new ProductCoverVM(product));
		}
		
		return coverVM;
	}
}
