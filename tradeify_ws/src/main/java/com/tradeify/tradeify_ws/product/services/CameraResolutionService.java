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
}
