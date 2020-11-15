package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WarrantyTypeService {
	
	@Autowired
	WarrantyTypeRepository warrantyTypeRepository;
	
	public List<WarrantyType> getWarrantyTypes(Long id, Long generalId) {
		
		return warrantyTypeRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
