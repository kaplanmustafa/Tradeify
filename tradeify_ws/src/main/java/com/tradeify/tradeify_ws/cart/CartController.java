package com.tradeify.tradeify_ws.cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.cart.vm.CartTotalVM;
import com.tradeify.tradeify_ws.cart.vm.CartVM;
import com.tradeify.tradeify_ws.product.vm.ProductCoverVM;
import com.tradeify.tradeify_ws.shared.CurrentUser;
import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.user.Users;

@RestController
@RequestMapping("/api/1.0")
public class CartController {

	@Autowired
	CartService cartService;
	
	@PostMapping("/cartItem/{productId}")
	GenericResponse saveCart(@CurrentUser Users user, @PathVariable long productId) {
		cartService.save(user, productId);
		return new GenericResponse("Cart item saved");
	}
	
	@GetMapping("/cartItems")
	Page<CartVM> getCartItems(@CurrentUser Users user,
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return cartService.getCartItems(user, page).map(CartVM::new);
	}
	
	@GetMapping("/cartItems/{orderId}")
	Page<CartVM> getCartItemsByOrder(@CurrentUser Users user, @PathVariable long orderId,
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return cartService.getCartItemsByOrder(user, orderId, page).map(CartVM::new);
	}
	
	@DeleteMapping("/cartItems/delete/{cartId}")
	GenericResponse deleteCartItem(@PathVariable long cartId) {
		cartService.deleteCartItem(cartId);
		return new GenericResponse("Cart item removed");
	}
	
	@PostMapping("/cartItems/update/{cartId}")
	GenericResponse updateCartItem(@PathVariable long cartId) {
		cartService.updateCartItem(cartId);
		return new GenericResponse("Cart item updated");
	}
	
	@GetMapping("/cartItems/total")
	CartTotalVM getCartOfUser(@CurrentUser Users user) {
		return cartService.getCartOfUser(user);
	}
	
	@GetMapping("/cartItems/count")
	Long getCartCountOfUser(@CurrentUser Users user) {
		return cartService.getCartCountOfUser(user);
	}
	
	@GetMapping("/cartItems/bestSelling")
	List<ProductCoverVM> getBestSellingProducts(@PageableDefault(sort = "quantity", direction = Direction.DESC) Pageable page) {
		
		return cartService.getBestSellingProducts(page);
	}
}
