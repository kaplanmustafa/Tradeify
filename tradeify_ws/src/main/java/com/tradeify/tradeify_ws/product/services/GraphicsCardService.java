package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.GraphicsCard;
import com.tradeify.tradeify_ws.product.repositories.GraphicsCardRepository;

@Service
public class GraphicsCardService {
	
	@Autowired
	GraphicsCardRepository graphicsCardRepository;
	
	public List<GraphicsCard> getGraphicsCards(Long id, Long generalId) {
		
		return graphicsCardRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
	
	public GraphicsCard getGraphicsCardByCategory(String general, String sub, String brand) {
		return graphicsCardRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
}
