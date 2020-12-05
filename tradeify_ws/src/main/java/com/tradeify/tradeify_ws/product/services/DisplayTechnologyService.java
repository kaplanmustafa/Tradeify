package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.DisplayTechnology;
import com.tradeify.tradeify_ws.product.repositories.DisplayTechnologyRepository;

@Service
public class DisplayTechnologyService {
	
	@Autowired
	DisplayTechnologyRepository displayTechnologyRepository;
	
	public List<DisplayTechnology> getDisplayTechnologies(Long id, Long generalId) {
		
		return displayTechnologyRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public DisplayTechnology getDisplayTechnologyByCategory(String general, String sub, String brand) {
		return displayTechnologyRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public DisplayTechnology getById(Long id) {
	
		return displayTechnologyRepository.getOne(id);
	}
}
