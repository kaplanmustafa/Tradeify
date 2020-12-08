package com.tradeify.tradeify_ws.cart;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.Product;
import com.tradeify.tradeify_ws.product.ProductService;
import com.tradeify.tradeify_ws.user.Users;

@Service
public class CartService {
	
	CartRepository cartRepository;
	ProductService productService;

	public CartService(CartRepository cartRepository, ProductService productService) {
		super();
		this.cartRepository = cartRepository;
		this.productService = productService;
	}

	public void save(Users user, long productId) {
		
		Cart cart = findByUserAndProduct(user.getId(), productId);
		
		if(cart != null) {
			cart.setQuantity(cart.getQuantity() + 1);
		} else {
			cart = new Cart();
			cart.setUser(user);
			cart.setQuantity(1);
			
			Product inDB = productService.getProductById(productId);
			cart.setProduct(inDB);
		}
		
		cartRepository.save(cart);
	}
	
	public Cart findByUserAndProduct(Long userId, Long productId) {
		return cartRepository.findByUserIdAndProductId(userId, productId);
	}

	public Page<Cart> getCartItems(Users user, Pageable page) {

		Specification<Cart> specification = userIs(user);
		return cartRepository.findAll(specification, page);
	}
	
	Specification<Cart> userIs(Users user) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("user"), user); 
		};
	}
}
