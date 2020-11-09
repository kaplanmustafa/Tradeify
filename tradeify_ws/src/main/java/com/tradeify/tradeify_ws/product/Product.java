package com.tradeify.tradeify_ws.product;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.file.FileAttachment;

import lombok.Data;

@Data
@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String productName;

	@NotNull
	@ManyToOne
	private GeneralCategory category;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String brand;
	
	@NotNull
	private float price;
	
	@NotNull
	private int stock;
	
	@NotNull
	private String description;
	
	@NotNull
	@OneToMany(mappedBy = "product", cascade = CascadeType.REMOVE) 
	private List<FileAttachment> fileAttachment;
}
