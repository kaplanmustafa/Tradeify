package com.tradeify.tradeify_ws.order.vm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import com.tradeify.tradeify_ws.order.Orders;

import lombok.Data;

@Data
public class OrderVM {
	
	private long id;
	
	private String timestampTr;
	
	private String timestampEn;
	
	private String orderStatus;
	
	private float totalPrice;
	
	private long totalProduct;
	
	public OrderVM(Orders order) {
		this.setId(order.getId());
		SimpleDateFormat sdfTr = new SimpleDateFormat("dd MMMM yyyy hh:mm:ss a", new Locale("tr"));
		String dateTr = sdfTr.format(new Date(order.getTimestamp().getTime()));
		this.setTimestampTr(dateTr);
		SimpleDateFormat sdfEn = new SimpleDateFormat("MMMM dd yyyy hh:mm:ss a", new Locale("en"));
		String dateEn = sdfEn.format(new Date(order.getTimestamp().getTime()));
		this.setTimestampEn(dateEn);
		String status = "";
		if(order.getOrderStatus() == 0)	status = "Preparing";
		else if(order.getOrderStatus() == 1) status = "In transit";
		else if(order.getOrderStatus() == 2) status = "Was delivered";
		this.setOrderStatus(status);
		this.setTotalPrice(order.getTotalPrice());
		this.setTotalProduct(order.getTotalProduct());
	}
}
