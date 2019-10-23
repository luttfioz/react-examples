package com.eteration.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.eteration.model.Product;

@Component
public class ProductServiceStub {
	private List<Product> products = new ArrayList<Product>();

	private ProductServiceStub() {
		super();
		init();
	}

	public Product update(String id, Product uProd) {
		Product oldProduct = get(id);
		products.remove(oldProduct);
		uProd.setId(id);
		products.add(uProd);
		return uProd;
	}
	
	public Product remove(String id) {
		Product product = get(id);
		products.remove(product);
		
		return product;
	}
	
	public Product save(Product product) {
		product.setId(String.valueOf((int)(Math.random()*100+10)));
		products.add(product);		
		return product;
	}

	public Product get(String id) {
		Product prod = null;
		for (Product p : products) {
			if (p.getId().equals(id))
				prod = p;
		}
		return prod;
	}

	private void init() {
		Product p1 = new Product("0", "tablet", "img-tablet", "10-Inch Tablet", "269",
				"Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display");

		Product p2 = new Product("1", "shoe", "img-shoe", "Running Shoe", "48",
				"Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining");

		Product p3 = new Product("2", "watch", "img-watch", "Slim Bracelet Watch", "27", 
				"A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel");

		products.add(p1);
		products.add(p2);
		products.add(p3);

	}

	public List<Product> getProducts() {
		return products;
	}

}
