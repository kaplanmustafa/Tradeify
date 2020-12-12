package com.tradeify.tradeify_ws.order;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.order.vm.OrderSubmitVM;
import com.tradeify.tradeify_ws.order.vm.OrderVM;
import com.tradeify.tradeify_ws.shared.CurrentUser;
import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.user.Users;

@RestController
@RequestMapping("/api/1.0")
public class OrderController {

	@Autowired
	OrderService orderService;
	
	@PostMapping("/orders")
	GenericResponse saveOrder(@CurrentUser Users user, @Valid @RequestBody OrderSubmitVM orderSubmitVM) {
		orderService.save(user, orderSubmitVM);
		return new GenericResponse("Order saved");
	}
	
	@GetMapping("/orders")
	Page<OrderVM> getOrders(@CurrentUser Users user,
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return orderService.getOrders(user, page).map(OrderVM::new);
	}
}
