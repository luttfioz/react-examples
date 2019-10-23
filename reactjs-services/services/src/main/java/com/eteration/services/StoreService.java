package com.eteration.services;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.eteration.model.Product;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class StoreService {
	@Autowired
	ProductServiceStub service;


	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getAllProducts(HttpServletRequest request) {
		String code = request.getParameter("code");
		if (code != null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<Product>());

		} else {
			return ResponseEntity.status(HttpStatus.OK).body(service.getProducts());
		}
	}

	@RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	public Product getProductById(@PathVariable("id") String id) {
		return service.get(id);
	}
	
	@RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.DELETE)
	public Product removeProductById(@PathVariable("id") String id) {
		return service.remove(id);
	}
	
	@RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
	public Product updateProduct(@PathVariable("id") String id, @RequestBody Product product) {
		return service.update(id, product);
	}
	
	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public Product createProduct(@RequestBody Product product) {
		return service.save(product);
	}

}
