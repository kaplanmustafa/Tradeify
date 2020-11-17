package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.PanelType;
import com.tradeify.tradeify_ws.product.repositories.PanelTypeRepository;

@Service
public class PanelTypeService {
	
	@Autowired
	PanelTypeRepository panelTypeRepository;
	
	public List<PanelType> getPanelTypes(Long id, Long generalId) {
		
		return panelTypeRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
