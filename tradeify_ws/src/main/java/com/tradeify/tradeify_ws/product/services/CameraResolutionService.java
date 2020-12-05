package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.CameraResolution;
import com.tradeify.tradeify_ws.product.repositories.CameraResolutionRepository;

@Service
public class CameraResolutionService {
	
	@Autowired
	CameraResolutionRepository cameraResolutionRepository;
	
	public List<CameraResolution> getCameraResolutions(Long id, Long generalId) {
		
		return cameraResolutionRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public CameraResolution getCameraResolutionByCategory(String general, String sub, String brand) {
		return cameraResolutionRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public CameraResolution getById(Long id) {
		
		return cameraResolutionRepository.getOne(id);
	}
}
