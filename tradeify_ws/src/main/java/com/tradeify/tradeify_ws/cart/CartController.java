package com.tradeify.tradeify_ws.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.cart.vm.CartVM;
import com.tradeify.tradeify_ws.shared.CurrentUser;
import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.user.Users;

@RestController
@RequestMapping("/api/1.0")
public class CartController {

	@Autowired
	CartService cartService;
	
	@PostMapping("cartItem/{productId}")
	GenericResponse saveCart(@CurrentUser Users user, @PathVariable long productId) {
		cartService.save(user, productId);
		return new GenericResponse("Cart item saved");
	}
	
	@GetMapping("/cartItems")
	Page<CartVM> getCartItems(@CurrentUser Users user,
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return cartService.getCartItems(user, page).map(CartVM::new);
	}
}
