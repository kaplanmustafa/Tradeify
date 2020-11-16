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
}
