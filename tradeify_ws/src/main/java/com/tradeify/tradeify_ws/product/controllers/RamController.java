package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.Ram;
import com.tradeify.tradeify_ws.product.services.RamService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class RamController {

	@Autowired
	RamService ramService;
	
	@GetMapping("/api/1.0/rams/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<Ram> list = ramService.getRams(id, generalId);
		for(Ram item: list) {
			attributeVM.add(new ProductAttributeVM(item));
		}
		
		return attributeVM;
	}
}
	