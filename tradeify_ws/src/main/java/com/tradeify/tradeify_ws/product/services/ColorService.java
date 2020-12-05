package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.Color;
import com.tradeify.tradeify_ws.product.repositories.ColorRepository;

@Service
public class ColorService {
	
	@Autowired
	ColorRepository colorRepository;
	
	public List<Color> getBrands(Long id, Long generalId) {
		
		return colorRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}
	
	public Color getColorByCategory(String general, String sub, String brand) {
		return colorRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public Color getById(Long id) {
		
		return colorRepository.getOne(id);
	}
}
