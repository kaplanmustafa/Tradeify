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

import com.tradeify.tradeify_ws.product.Product;

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
	
	@OneToMany(mappedBy = "category", cascade = CascadeType.REMOVE)
	private List<Product> product;
}
