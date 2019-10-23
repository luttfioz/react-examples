# Service project for data requirements

**services** project contains rest services for creating, updating, deleting and saving products

## Running project from Eclipse

- Run eclipse
- Select "Import/Existing Maven Project" from File menu
- Select "services" project
- Right click on **Application.java**  and choose "Run As/Java Application"
- After a while, Spring project will start
- You can make request through the url: http://localhost:8080/products

## Running project from Command Line

Alternatively, you can run the jar file provided from the command line:
java -jar services.jar

## Provided Rest services

### Getting all products

- **URL:** [http://localhost:8080/products](http://localhost:8080/products)
- **Method:** GET
- **Path Variable:** NA
- **Request Body:** NA
- **Response Body:** Product list

### Getting a specific product

- **URL:** [http://localhost:8080/products/{id}](http://localhost:8080/products/{id})
- **Method:** GET
- **Path Variable:** id of product to be read
- **Request Body:** NA
- **Response Body:** Product

### Deleting a product

- **URL:** [http://localhost:8080/products/{id}](http://localhost:8080/products/{id})
- **Method:** DELETE
- **Path Variable:** id of product to be deleted
- **Request Body:** NA
- **Response Body:** deleted product

### Updating a product

- **URL:** [http://localhost:8080/products/{id}](http://localhost:8080/products/{id})
- **Method:** PUT
- **Path Variable:** id of product to be updated
- **Request Body:** product data
- **Response Body:** updated product

### Saving a product

- **URL:** [http://localhost:8080/products](http://localhost:8080/products)
- **Method:** POST
- **Path Variable:** NA
- **Request Body:** product data
- **Response Body:** saved product. The id value will be assigned randomly.

## Exceptional Cases

To test exceptional cases, simply send a request as follows:
[http://localhost:8080/products?code=111](http://localhost:8080/products?code=111)

In this case, the server will return an error code of 500 when request contains a parameter named "code"
