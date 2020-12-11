package com.tradeify.tradeify_ws.order;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.order.vm.OrderSubmitVM;
import com.tradeify.tradeify_ws.shared.CurrentUser;
import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.user.Users;

@RestController
@RequestMapping("/api/1.0")
public class OrderController {

	@Autowired
	OrderService orderService;
	
	@PostMapping("orders")
	GenericResponse saveOrder(@CurrentUser Users user, @Valid @RequestBody OrderSubmitVM orderSubmitVM) {
		orderService.save(user, orderSubmitVM);
		return new GenericResponse("Order saved");
	}
}
