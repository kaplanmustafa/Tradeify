package com.tradeify.tradeify_ws.product.vm;

import java.util.List;

import lombok.Data;

@Data
public class ProductFilterVM {
	
	private List<Float> priceFilters;
	
	private List<Long> brandFilters;
	
	private List<Long> colorFilters;

	private List<Long> operatingTypeFilters;

	private List<Long> caseDiameterFilters;

	private List<Long> warrantyTypeFilters;

	private List<Long> internalMemoryFilters;

	private List<Long> batteryPowerFilters;

	private List<Long> screenSizeFilters;

	private List<Long> cameraResolutionFilters;

	private List<Long> frontCameraResolutionFilters;

	private List<Long> displayTechnologyFilters;

	private List<Long> screenResolutionFilters;

	private List<Long> processorTypeFilters;

	private List<Long> ramFilters;

	private List<Long> graphicsCardFilters;

	private List<Long> ssdFilters;

	private List<Long> processorModelFilters;

	private List<Long> screenRefreshRateFilters;

	private List<Long> panelTypeFilters;
	
}
