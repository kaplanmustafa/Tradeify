package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.ProcessorType;
import com.tradeify.tradeify_ws.product.repositories.ProcessorTypeRepository;

@Service
public class ProcessorTypeService {
	
	@Autowired
	ProcessorTypeRepository processorTypeRepository;
	
	public List<ProcessorType> getProcessorTypes(Long id, Long generalId) {
		
		return processorTypeRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public ProcessorType getProcessorTypeByCategory(String general, String sub, String brand) {
		return processorTypeRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
}
