package com.tradeify.tradeify_ws.product.vm;

import java.util.ArrayList;
import java.util.List;

import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.vm.FileAttachmentVM;
import com.tradeify.tradeify_ws.product.Product;

import lombok.Data;

@Data
public class ProductVM {

	private long id;
	
	private long generalId;
	
	private long subId;
	
	private String productName;
	
	private String batteryPower;
	
	private String brand;
	
	private String cameraResolution;
	
	private String caseDiameter;
	
	private String color;
	
	private String displayTechnology;
	
	private String frontCameraResolution;
	
	private String graphicsCard;
	
	private String internalMemory;
	
	private String operatingType;
	
	private String panelType;
	
	private String processorModel;
	
	private String processorType;
	
	private String ram;
	
	private String screenRefreshRate;
	
	private String screenResolution;
	
	private String screenSize;
	
	private String ssd;
	
	private String warrantyType;
	
	private float price;
	
	private String description;
	
	private List<FileAttachmentVM> images = new ArrayList<>();
	
	public ProductVM(Product product) {
		this.setId(product.getId());
		this.setProductName(product.getProductName());
		this.setGeneralId(product.getGeneralCategory().getId());
		this.setSubId(product.getSubCategory().getId());
		if(product.getBatteryPower() != null)
			this.setBatteryPower(product.getBatteryPower().getBatteryPowerName());
		if(product.getBrand() != null)
			this.setBrand(product.getBrand().getBrandName());
		if(product.getCameraResolution() != null)
			this.setCameraResolution(product.getCameraResolution().getCameraResolutionName());
		if(product.getCaseDiameter() != null)
			this.setCaseDiameter(product.getCaseDiameter().getCaseDiameterName());
		if(product.getColor() != null)
			this.setColor(product.getColor().getColorName());
		if(product.getDisplayTechnology() != null)
			this.setDisplayTechnology(product.getDisplayTechnology().getDisplayTechnologyName());
		if(product.getFrontCameraResolution() != null)
			this.setFrontCameraResolution(product.getFrontCameraResolution().getFrontCameraResolutionName());
		if(product.getGraphicsCard() != null)
			this.setGraphicsCard(product.getGraphicsCard().getGraphicsCardName());
		if(product.getInternalMemory() != null)
			this.setInternalMemory(product.getInternalMemory().getInternalMemoryName());
		if(product.getOperatingType() != null)
			this.setOperatingType(product.getOperatingType().getOperatingTypeName());
		if(product.getPanelType() != null)
			this.setPanelType(product.getPanelType().getPanelTypeName());
		if(product.getProcessorModel() != null)
			this.setProcessorModel(product.getProcessorModel().getProcessorModelName());
		if(product.getProcessorType() != null)
			this.setProcessorType(product.getProcessorType().getProcessorTypeName());
		if(product.getRam() != null)
			this.setRam(product.getRam().getRamName());
		if(product.getScreenRefreshRate() != null)
			this.setScreenRefreshRate(product.getScreenRefreshRate().getScreenRefreshRateName());
		if(product.getScreenResolution() != null)
			this.setScreenResolution(product.getScreenResolution().getScreenResolutionName());
		if(product.getScreenSize() != null)
			this.setScreenSize(product.getScreenSize().getScreenSizeName());
		if(product.getSsd() != null)
			this.setSsd(product.getSsd().getSsdName());
		if(product.getWarrantyType() != null)
			this.setWarrantyType(product.getWarrantyType().getWarrantyTypeName());
			this.setPrice(product.getPrice());
		if(product.getDescription() != null)
			this.setDescription(product.getDescription());
		if(product.getImages() != null) {
			for(FileAttachment image: product.getImages()) {
				if(image != null) {
					this.images.add(new FileAttachmentVM(image));
				}
			}
		}
	}
}
