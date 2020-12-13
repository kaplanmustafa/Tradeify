package com.tradeify.tradeify_ws.productViews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.shared.CurrentUser;
import com.tradeify.tradeify_ws.shared.GenericResponse;
import com.tradeify.tradeify_ws.user.Users;

@RestController
@RequestMapping("/api/1.0")
public class ProductViewsController {

	@Autowired
	ProductViewsService productViewsService;
	
	@PutMapping("/views/{productId}")
	GenericResponse saveProductView(@CurrentUser Users user, @PathVariable long productId) {
		
		productViewsService.save(user, productId);
		return new GenericResponse("Product view saved");
	}
}
