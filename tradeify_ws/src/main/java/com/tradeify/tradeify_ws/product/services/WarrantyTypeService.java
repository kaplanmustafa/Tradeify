package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.WarrantyType;
import com.tradeify.tradeify_ws.product.repositories.WarrantyTypeRepository;

@Service
public class WarrantyTypeService {
	
	@Autowired
	WarrantyTypeRepository warrantyTypeRepository;
	
	public List<WarrantyType> getWarrantyTypes(Long id, Long generalId) {
		
		return warrantyTypeRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
