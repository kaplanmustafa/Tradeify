package com.tradeify.tradeify_ws.product.vm;

import com.tradeify.tradeify_ws.product.entities.BatteryPower;
import com.tradeify.tradeify_ws.product.entities.Brand;
import com.tradeify.tradeify_ws.product.entities.CameraResolution;
import com.tradeify.tradeify_ws.product.entities.CaseDiameter;
import com.tradeify.tradeify_ws.product.entities.Color;
import com.tradeify.tradeify_ws.product.entities.DisplayTechnology;
import com.tradeify.tradeify_ws.product.entities.FrontCameraResolution;
import com.tradeify.tradeify_ws.product.entities.GraphicsCard;
import com.tradeify.tradeify_ws.product.entities.InternalMemory;
import com.tradeify.tradeify_ws.product.entities.OperatingType;
import com.tradeify.tradeify_ws.product.entities.ProcessorModel;
import com.tradeify.tradeify_ws.product.entities.ProcessorType;
import com.tradeify.tradeify_ws.product.entities.Ram;
import com.tradeify.tradeify_ws.product.entities.ScreenResolution;
import com.tradeify.tradeify_ws.product.entities.ScreenSize;
import com.tradeify.tradeify_ws.product.entities.Ssd;
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
	
	public ProductAttributeVM(CameraResolution cameraResolution) {
		this.setId(cameraResolution.getId());
		this.setCategoryName(cameraResolution.getCameraResolutionName());
		this.setGeneralCategoryId(cameraResolution.getGeneralCategory().getId());
		this.setMiddleCategoryId(cameraResolution.getSubCategory().getId());
	}
	
	public ProductAttributeVM(DisplayTechnology displayTechnology) {
		this.setId(displayTechnology.getId());
		this.setCategoryName(displayTechnology.getDisplayTechnologyName());
		this.setGeneralCategoryId(displayTechnology.getGeneralCategory().getId());
		this.setMiddleCategoryId(displayTechnology.getSubCategory().getId());
	}
	
	public ProductAttributeVM(ScreenResolution screenResolution) {
		this.setId(screenResolution.getId());
		this.setCategoryName(screenResolution.getScreenResolutionName());
		this.setGeneralCategoryId(screenResolution.getGeneralCategory().getId());
		this.setMiddleCategoryId(screenResolution.getSubCategory().getId());
	}
	
	public ProductAttributeVM(ProcessorType processorType) {
		this.setId(processorType.getId());
		this.setCategoryName(processorType.getProcessorTypeName());
		this.setGeneralCategoryId(processorType.getGeneralCategory().getId());
		this.setMiddleCategoryId(processorType.getSubCategory().getId());
	}
	
	public ProductAttributeVM(Ram ram) {
		this.setId(ram.getId());
		this.setCategoryName(ram.getRamName());
		this.setGeneralCategoryId(ram.getGeneralCategory().getId());
		this.setMiddleCategoryId(ram.getSubCategory().getId());
	}
	
	public ProductAttributeVM(GraphicsCard graphicsCard) {
		this.setId(graphicsCard.getId());
		this.setCategoryName(graphicsCard.getGraphicsCardName());
		this.setGeneralCategoryId(graphicsCard.getGeneralCategory().getId());
		this.setMiddleCategoryId(graphicsCard.getSubCategory().getId());
	}
	
	public ProductAttributeVM(Ssd ssd) {
		this.setId(ssd.getId());
		this.setCategoryName(ssd.getSsdName());
		this.setGeneralCategoryId(ssd.getGeneralCategory().getId());
		this.setMiddleCategoryId(ssd.getSubCategory().getId());
	}
	
	public ProductAttributeVM(ProcessorModel processorModel) {
		this.setId(processorModel.getId());
		this.setCategoryName(processorModel.getProcessorModelName());
		this.setGeneralCategoryId(processorModel.getGeneralCategory().getId());
		this.setMiddleCategoryId(processorModel.getSubCategory().getId());
	}
}
