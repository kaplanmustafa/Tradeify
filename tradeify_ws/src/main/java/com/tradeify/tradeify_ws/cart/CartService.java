package com.tradeify.tradeify_ws.cart;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.cart.vm.CartTotalVM;
import com.tradeify.tradeify_ws.order.OrderService;
import com.tradeify.tradeify_ws.order.Orders;
import com.tradeify.tradeify_ws.product.Product;
import com.tradeify.tradeify_ws.product.ProductService;
import com.tradeify.tradeify_ws.product.vm.ProductCoverVM;
import com.tradeify.tradeify_ws.user.Users;

@Service
public class CartService {
	
	CartRepository cartRepository;
	ProductService productService;
	
	@Autowired
	OrderService orderService;

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
		return cartRepository.findByUserIdAndProductIdAndOrderIsNull(userId, productId);
	}

	public Page<Cart> getCartItems(Users user, Pageable page) {

		Specification<Cart> specification = userIs(user);
		specification = specification.and(orderIsNull());
		return cartRepository.findAll(specification, page);
	}
	
	public Page<Cart> getCartItemsByOrder(Users user, long orderId, Pageable page) {

		Specification<Cart> specification = userIs(user);
		Orders orderInDB = orderService.getOrderById(orderId);
		specification = specification.and(orderIs(orderInDB));
		
		return cartRepository.findAll(specification, page);
	}
	
	public List<Cart> getCartItemsNoOrder(Users user) {

		return cartRepository.findAllByUserIdAndOrderIsNull(user.getId());
	}

	public void deleteCartItem(long cartId) {
		Cart inDB = cartRepository.getOne(cartId);
		cartRepository.delete(inDB);		
	}

	public void updateCartItem(long cartId) {
		Cart inDB = cartRepository.getOne(cartId);
		inDB.setQuantity(inDB.getQuantity() - 1);
		cartRepository.save(inDB);
	}

	public CartTotalVM getCartOfUser(Users user) {
		
		List<Cart> carts = cartRepository.findAllByUserIdAndOrderIsNull(user.getId());
		
		int totalProduct = 0;
		float totalPrice = 0;
		
		for(Cart cart : carts) {
			totalProduct += (cart.getQuantity());
			totalPrice += (cart.getQuantity() * cart.getProduct().getPrice());
		}
		
		return new CartTotalVM(totalProduct, totalPrice);
	}
	
	public long getCartCountOfUser(Users user) {
		
		return cartRepository.countByUserIdAndOrderIsNull(user.getId());
	}
	
	public List<ProductCoverVM> getBestSellingProducts(Pageable page) {
		Specification<Cart> specification = orderIsNotNull();
		
		Page<Cart> carts = cartRepository.findAll(specification, page);
		
		List<ProductCoverVM> coverVM = new ArrayList<>();
		ArrayList<Long> productIdList = new ArrayList<>();
		
		while(true) {
			for(Cart cart : carts) {
				if(!productIdList.contains(cart.getProduct().getId())) {
					productIdList.add(cart.getProduct().getId());
					Product product = productService.getProductById(cart.getProduct().getId());
					coverVM.add(new ProductCoverVM(product));
				} else {
					Product product = productService.getProductById(cart.getProduct().getId());
					specification = specification.and(productIsNot(product));
				}
			}
			
			if(productIdList.size() == 6) {
				break;
			}
			
			carts = cartRepository.findAll(specification, page);
		}
		
		return coverVM;
	}
	
	Specification<Cart> userIs(Users user) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("user"), user); 
		};
	}
	
	Specification<Cart> orderIsNull() {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.isNull(root.get("order")); 
		};
	}
	
	Specification<Cart> orderIsNotNull() {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.isNotNull(root.get("order")); 
		};
	}
	
	Specification<Cart> productIsNot(Product product) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.notEqual(root.get("product"), product); 
		};
	}
	
	Specification<Cart> orderIs(Orders order) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("order"), order); 
		};
	}
}
