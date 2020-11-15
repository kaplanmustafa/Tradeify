package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ColorService {
	
	@Autowired
	ColorRepository colorRepository;
	
	public List<Color> getBrands(Long id, Long generalId) {
		
		return colorRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
