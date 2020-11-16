package com.tradeify.tradeify_ws.category;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.product.entities.BatteryPower;
import com.tradeify.tradeify_ws.product.entities.Brand;
import com.tradeify.tradeify_ws.product.entities.CameraResolution;
import com.tradeify.tradeify_ws.product.entities.CaseDiameter;
import com.tradeify.tradeify_ws.product.entities.Color;
import com.tradeify.tradeify_ws.product.entities.DisplayTechnology;
import com.tradeify.tradeify_ws.product.entities.FrontCameraResolution;
import com.tradeify.tradeify_ws.product.entities.InternalMemory;
import com.tradeify.tradeify_ws.product.entities.OperatingType;
import com.tradeify.tradeify_ws.product.entities.ScreenResolution;
import com.tradeify.tradeify_ws.product.entities.ScreenSize;
import com.tradeify.tradeify_ws.product.entities.WarrantyType;

import lombok.Data;

@Data 
@Entity
public class GeneralCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String categoryName;
	
	@OneToMany(mappedBy = "subPrivateId", cascade = CascadeType.REMOVE)
	private List<SubCategory> subCategories;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<Brand> brands;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<Color> colors;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<OperatingType> operatingTypes;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<CaseDiameter> caseDiameters;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<WarrantyType> warrantyTypes;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<InternalMemory> internalMemories;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<BatteryPower> batteryPowers;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<ScreenSize> screenSizes;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<FrontCameraResolution> frontCameraResolutions;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<CameraResolution> cameraResolutions;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<DisplayTechnology> displayTechnologies;
	
	@OneToMany(mappedBy = "generalCategory", cascade = CascadeType.REMOVE)
	private List<ScreenResolution> screenResolutions;
}