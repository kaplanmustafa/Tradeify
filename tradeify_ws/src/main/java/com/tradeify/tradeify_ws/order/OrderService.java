package com.tradeify.tradeify_ws.order;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.cart.Cart;
import com.tradeify.tradeify_ws.cart.CartRepository;
import com.tradeify.tradeify_ws.cart.CartService;
import com.tradeify.tradeify_ws.order.vm.OrderSubmitVM;
import com.tradeify.tradeify_ws.user.Users;

@Service
public class OrderService {
	
	OrderRepository orderRepository;
	CartService cartService;
	CartRepository cartRepository;

	public OrderService(OrderRepository orderRepository, CartService cartService, CartRepository cartRepository) {
		super();
		this.orderRepository = orderRepository;
		this.cartService = cartService;
		this.cartRepository = cartRepository;
	}

	public void save(Users user, OrderSubmitVM orderSubmitVM) {
		
		Orders order = new Orders();
		order.setUser(user);
		order.setOrderStatus(0);
		order.setAddress(orderSubmitVM.getAddress());
		order.setTimestamp(new Date());
		orderRepository.save(order);
		
		List<Cart> cartsOfUser = cartService.getCartItemsNoOrder(user);
		
		int totalProduct = 0;
		float totalPrice = 0;
		
		for(Cart cart : cartsOfUser) {
			totalProduct += (cart.getQuantity());
			totalPrice += (cart.getQuantity() * cart.getProduct().getPrice());
			
			cart.setOrder(order);
			cartRepository.save(cart);
		}
		
		order.setTotalPrice(totalPrice);
		order.setTotalProduct(totalProduct);
		orderRepository.save(order);
	}
	
	public Page<Orders> getOrders(Users user, Pageable page) {

		Specification<Orders> specification = userIs(user);
		return orderRepository.findAll(specification, page);
	}
	
	Specification<Orders> userIs(Users user) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("user"), user); 
		};
	}
}
