package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.Color;
import com.tradeify.tradeify_ws.product.repositories.ColorRepository;

@Service
public class ColorService {
	
	@Autowired
	ColorRepository colorRepository;
	
	public List<Color> getBrands(Long id, Long generalId) {
		
		return colorRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
