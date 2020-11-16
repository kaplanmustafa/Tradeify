package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.InternalMemory;
import com.tradeify.tradeify_ws.product.services.InternalMemoryService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class InternalMemoryController {

	@Autowired
	InternalMemoryService internalMemoryService;
	
	@GetMapping("/api/1.0/internalMemories/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<InternalMemory> memories = internalMemoryService.getInternalMemories(id, generalId);
		for(InternalMemory type: memories) {
			attributeVM.add(new ProductAttributeVM(type));
		}
		
		return attributeVM;
	}
}
	