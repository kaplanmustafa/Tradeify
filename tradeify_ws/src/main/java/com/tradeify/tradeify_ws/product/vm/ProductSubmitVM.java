package com.tradeify.tradeify_ws.product.vm;

import java.util.List;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class ProductSubmitVM {

	@NotNull
	@Size(min = 1, max= 255)
	private String productName;
	
	private String generalCategory;
	
	private String subCategory;
	
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
	
	@NotNull
	@Size(min = 1, max= 255)
	private String price;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String description;
	
	private long coverImage;
	
	private List<Long> images;
}
