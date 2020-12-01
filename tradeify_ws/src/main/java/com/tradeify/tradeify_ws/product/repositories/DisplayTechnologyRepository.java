package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.DisplayTechnology;


public interface DisplayTechnologyRepository extends JpaRepository<DisplayTechnology, Long>{

	List<DisplayTechnology> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<DisplayTechnology> findAllByOrderById();
	
	DisplayTechnology findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
}
