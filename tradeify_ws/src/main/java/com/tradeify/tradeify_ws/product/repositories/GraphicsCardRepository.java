package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.GraphicsCard;


public interface GraphicsCardRepository extends JpaRepository<GraphicsCard, Long>{

	List<GraphicsCard> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<GraphicsCard> findAllByOrderById();
	
	GraphicsCard findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
}
