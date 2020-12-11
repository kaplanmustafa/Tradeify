package com.tradeify.tradeify_ws.order;

import java.util.Date;
import java.util.List;

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
		order.setOrderStatus(0);
		order.setAddress(orderSubmitVM.getAddress());
		order.setTimestamp(new Date());
		orderRepository.save(order);
		
		List<Cart> cartsOfUser = cartService.getCartItemsNoOrder(user);
		
		for(Cart cart : cartsOfUser) {
			cart.setOrder(order);
			cartRepository.save(cart);
		}
	}
	
	
}
