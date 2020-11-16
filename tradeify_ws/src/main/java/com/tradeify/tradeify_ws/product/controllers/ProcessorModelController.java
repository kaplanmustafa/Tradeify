package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.ProcessorModel;
import com.tradeify.tradeify_ws.product.services.ProcessorModelService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class ProcessorModelController {

	@Autowired
	ProcessorModelService processorModelService;
	
	@GetMapping("/api/1.0/processorModels/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<ProcessorModel> list = processorModelService.getProcessorModels(id, generalId);
		for(ProcessorModel item: list) {
			attributeVM.add(new ProductAttributeVM(item));
		}
		
		return attributeVM;
	}
}
	