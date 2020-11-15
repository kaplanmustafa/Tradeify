package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperatingTypeService {
	
	@Autowired
	OperatingTypeRepository operatingTypeRepository;
	
	public List<OperatingType> getOperatingTypes(Long id, Long generalId) {
		
		return operatingTypeRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
