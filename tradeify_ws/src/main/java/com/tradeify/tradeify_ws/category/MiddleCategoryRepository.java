package com.tradeify.tradeify_ws.category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MiddleCategoryRepository extends JpaRepository<MiddleCategory, Long>{

	List<MiddleCategory> findAllByGeneralCategoryId(Long generalCategoryId);
}
