package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.ProcessorType;
import com.tradeify.tradeify_ws.product.services.ProcessorTypeService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class ProcessorTypeController {

	@Autowired
	ProcessorTypeService processorTypeService;
	
	@GetMapping("/api/1.0/processorTypes/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<ProcessorType> list = processorTypeService.getProcessorTypes(id, generalId);
		for(ProcessorType item: list) {
			attributeVM.add(new ProductAttributeVM(item));
		}
		
		return attributeVM;
	}
}
	