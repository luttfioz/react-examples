package com.eteration.model;

import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement
public class Product {
	private String id;
	private String img;
	private String alt;
	private String name;
	private String price;
	private String description;
	public Product() {
		super();
	}
	
	
	public Product(String id, String img, String alt, String name, String price, String description) {
		super();
		this.id = id;
		this.img = img;
		this.alt = alt;
		this.name = name;
		this.price = price;
		this.description = description;
	}


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getAlt() {
		return alt;
	}
	public void setAlt(String alt) {
		this.alt = alt;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	

	

}
