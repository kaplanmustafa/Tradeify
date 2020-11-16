package com.tradeify.tradeify_ws.product.vm;

import com.tradeify.tradeify_ws.product.entities.BatteryPower;
import com.tradeify.tradeify_ws.product.entities.Brand;
import com.tradeify.tradeify_ws.product.entities.CaseDiameter;
import com.tradeify.tradeify_ws.product.entities.Color;
import com.tradeify.tradeify_ws.product.entities.FrontCameraResolution;
import com.tradeify.tradeify_ws.product.entities.InternalMemory;
import com.tradeify.tradeify_ws.product.entities.OperatingType;
import com.tradeify.tradeify_ws.product.entities.ScreenSize;
import com.tradeify.tradeify_ws.product.entities.WarrantyType;

import lombok.Data;

@Data
public class ProductAttributeVM {
	
	private long id;

	private String categoryName;
	
	private long generalCategoryId;
	
	private long middleCategoryId;
	
	public ProductAttributeVM(Brand brand) {
		this.setId(brand.getId());
		this.setCategoryName(brand.getBrandName());
		this.setGeneralCategoryId(brand.getGeneralCategory().getId());
		this.setMiddleCategoryId(brand.getSubCategory().getId());
	}
	
	public ProductAttributeVM(Color color) {
		this.setId(color.getId());
		this.setCategoryName(color.getColorName());
		this.setGeneralCategoryId(color.getGeneralCategory().getId());
		this.setMiddleCategoryId(color.getSubCategory().getId());
	}
	
	public ProductAttributeVM(OperatingType operatingType) {
		this.setId(operatingType.getId());
		this.setCategoryName(operatingType.getOperatingTypeName());
		this.setGeneralCategoryId(operatingType.getGeneralCategory().getId());
		this.setMiddleCategoryId(operatingType.getSubCategory().getId());
	}
	
	public ProductAttributeVM(CaseDiameter caseDiameter) {
		this.setId(caseDiameter.getId());
		this.setCategoryName(caseDiameter.getCaseDiameterName());
		this.setGeneralCategoryId(caseDiameter.getGeneralCategory().getId());
		this.setMiddleCategoryId(caseDiameter.getSubCategory().getId());
	}
	
	public ProductAttributeVM(WarrantyType warrantyType) {
		this.setId(warrantyType.getId());
		this.setCategoryName(warrantyType.getWarrantyTypeName());
		this.setGeneralCategoryId(warrantyType.getGeneralCategory().getId());
		this.setMiddleCategoryId(warrantyType.getSubCategory().getId());
	}
	
	public ProductAttributeVM(InternalMemory internalMemory) {
		this.setId(internalMemory.getId());
		this.setCategoryName(internalMemory.getInternalMemoryName());
		this.setGeneralCategoryId(internalMemory.getGeneralCategory().getId());
		this.setMiddleCategoryId(internalMemory.getSubCategory().getId());
	}
	
	public ProductAttributeVM(BatteryPower batteryPower) {
		this.setId(batteryPower.getId());
		this.setCategoryName(batteryPower.getBatteryPowerName());
		this.setGeneralCategoryId(batteryPower.getGeneralCategory().getId());
		this.setMiddleCategoryId(batteryPower.getSubCategory().getId());
	}
	
	public ProductAttributeVM(ScreenSize screenSize) {
		this.setId(screenSize.getId());
		this.setCategoryName(screenSize.getScreenSizeName());
		this.setGeneralCategoryId(screenSize.getGeneralCategory().getId());
		this.setMiddleCategoryId(screenSize.getSubCategory().getId());
	}
	
	public ProductAttributeVM(FrontCameraResolution frontCameraResolution) {
		this.setId(frontCameraResolution.getId());
		this.setCategoryName(frontCameraResolution.getFrontCameraResolutionName());
		this.setGeneralCategoryId(frontCameraResolution.getGeneralCategory().getId());
		this.setMiddleCategoryId(frontCameraResolution.getSubCategory().getId());
	}
}
