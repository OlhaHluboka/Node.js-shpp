/**
 * Implements function constructor Product for creating objects with next
 * propreties and methods:
 * 
 * Function has next parameters:
 * @param {string} ID - product's ID
 * @param {string} name - product's name
 * @param {string} description - description of product
 * @param {number} price - price of product
 * @param {string} brand - brand of product
 * @param {Array} sizes - array with sizes of product
 * @param {string} activeSize - active size of product
 * @param {number} quantity - quantity of product
 * @param {Date} date - date of product
 * @param {Array} reviews - array with object "review of product"
 * @param {Array} images - array with images of product
 *  
 */

function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {

    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;

    // Variables for defining a condition of sort array of products.
    let choice;

    /* Getter and setter for all parameters                                                                    */

    this.getID = function () {

        return this.ID;
    }
    this.setID = function (newID) {

        this.ID = newID;
    }

    this.getName = function () {

        return this.name;
    }
    this.setName = function (newName) {

        this.name = newName;
    }

    this.getDescriotion = function () {

        return this.description;
    }

    this.setDescription = function (newDescription) {

        this.description = newDescription;
    }

    this.getPrice = function () {

        return this.price;
    }
    this.setPrice = function (newPrice) {

        this.price = newPrice;
    }

    this.getBrand = function () {

        return this.brand;
    }
    this.setBrand = function (newBrand) {

        this.brand = newBrand;
    }

    this.getSizes = function () {

        return this.sizes;
    }
    this.setSizes = function (newSizes) {

        this.sizes = newSizes;
    }

    this.getActiveSize = function () {

        return this.activeSize;
    }
    this.setActiveSize = function (newActiveSize) {

        this.activeSize = newActiveSize;
    }

    this.getQuantity = function () {

        return this.quantity;
    }
    this.setQuantity = function (newQuantity) {

        this.quantity = newQuantity;
    }

    this.getDate = function () {

        return this.date;
    }
    this.setDate = function (newDate) {

        this.date = newDate;
    }

    this.getReviews = function () {

        return this.reviews;
    }
    this.setReviews = function (newReviews) {

        this.reviews = newReviews;
    }

    this.getImages = function () {

        return this.images;
    }
    this.setImages = function (newImages) {

        this.images = newImages;
    }

    /* Methods of this object.                                                                         */

    /** 
     * Obtains a review by its ID number.
     * 
     *  @param - ID number of each review;
     * 
     *  @returns - a review object;
    */

    this.getReviewByID = function (getID) {

        for (let review of this.reviews) {

            if (getID == review.ID) {

                return review;
            }
        }
    }

    /** 
     * Obtains an image from an array of images by entring number or the first image if parameter is undefined.
     * 
     * @param - a number of image in array;
     * 
     * @returns - a searched image (image presents in the text format);
    */
    this.getImage = function (number) {

        if (number != undefined) {

            return this.images[number];
        } else {

            return this.images[0];
        }
    }

    /** 
     * Adds a new value of size in the field - array of sizes. 
     * 
     * @param - a new value of size;
     * 
     * @returns - the new element in array size;
    */
    this.addSize = function (newSize) {

        if (!this.sizes.includes(newSize)) {

            this.sizes.push(newSize);
        } else {
            console.log("Such size exists already!")
        }
    }


    /** 
     * Deletes a value of size by it key (a number in array "sizes").
     * 
     * @param - a value of size;
     */
    this.deleteSize = function (valueOfSize) {

        // Variable for defining a key (an index in array)
        let indexSearchedSize = this.sizes.indexOf(valueOfSize);

        if (indexSearchedSize != -1) {
            this.sizes.splice(indexSearchedSize, 1);
        }
    }

    /**
     * Adds a new review in this array of reviews parameter.
     * 
     * @param - a new review;
     */
    this.addReview = function (newReview) {

        this.reviews.push(newReview);
    }

    /**
     * Deletes a review by its ID from this array of reviews parameter.
     * 
     * @param - ID of review;
     */
    this.deleteReview = function (ID) {

        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].getID() == ID) {

                return this.reviews.splice(i, 1);
            }
        }
    }

    /**
     * Gets an average rating of this Product which comes into from the array of reviews (parameter of Product).
     * 
     * @param - a new review;
     * 
     * @returns - a number of average rating.
     */
    this.getAverageRating = function () {

        // Counter for number of math operation adding in time of iteration on review array and rating object.
        let numberOfAdding = 0;

        // For calculation rating.
        let averageRating = 0;

        for (let review of this.reviews) {

            for (let key in review.raiting) {

                averageRating += review.raiting[key]; // review every key in the object 'rating'
                numberOfAdding++;
            }
        }

        return (averageRating / numberOfAdding).toFixed(2); // rounding to two signs after comma
    }
}


/** This is an instance of an object-review that visitors will give.
 * @param {string} ID - reviews's ID 
 * @param {string} author - autor's name
 * @param {Date} date -  date of review   
 * @param {string} comment - autor's comment
 * @param {Map} raiting
 */

function Review(ID, author, date, comment, raiting) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.raiting = raiting;

    /* Getters and setters for parameters.                                                                 */
    this.getID = function () {

        return this.ID;
    }
    this.setID = function (newID) {

        this.ID = newID;
    }

    this.getAuthor = function () {

        return this.author;
    }
    this.setAutor = function (newAutor) {

        this.author = newAutor;
    }

    this.getDate = function () {

        return this.date;
    }
    this.setDate = function (newDate) {

        this.date = newDate;
    }

    this.getComment = function () {

        return this.comment;
    }
    this.setComment = function (newComment) {

        this.comment = newComment;
    }

    this.getRaiting = function () {

        return this.raiting;
    }
    this.setRaiting = function (newRaiting) {

        this.raiting = newRaiting;
    }
}

/**
 * Implements a search one text into names or descriptions which belongs to each product in the array of products.
 * 
 * @param {Array} products - an array of products; 
 * @param {string} search -  text for search in a product array.
 * 
 * @returns - an array of searched objects.
 */
function searchProducts(products, search) {

    // Array for catching searched products.
    let searchedArray = [];

    for (let product of products) {

        if (product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())) {

            searchedArray.push(product);
        }
    }

    return searchedArray;
}

/**
 * Sorts an array of products by one condition of there:  'price', 'name' or 'ID'.
 * 
 * @param {Array} products - an array of products;
 * @param {string} sortRule - a condition for sorting: may be price or name, or ID.
 * 
 * @returns - an array of sorted objects.
 */

function sortProducts(products, sortRule) {

    // Use a variable 'choice' in a product object for determination a condition for sorting array. 
    for (let product of products) {
        switch (sortRule.toLowerCase()) {

            case "price":
                product.choice = product.price;
                break;

            case "name":
                product.choice = product.name.charAt(0).toLowerCase();
                break;

            case "id":
                product.choice = product.ID;
                break;

            default:
                console.log("Enter correct sort rule: 'price', 'name' or 'ID'!")
                return;
        }
    }

    /**
     * Inner function is a quicksort algorithm for sorting elements by some their properties. These properties
     * is defined in previous block of function 'sortProducts(products, sortRule)'. User chooses a property
     * in he time of fulfilling this function. They may be 'price', 'name' or 'ID'.
     * 
     * @param {Array} products - array of products;
     * 
     * @returns - sorted array of products.
     */
    function quicksort(products) {

        // This variable is a first element in array that compares with all leaving elements into array
        // exsept for itself. If an element less then pivot, it puts in the left additional array, if more -
        // in the right additional array. After the end of iterations into array, left array, pivot element and
        // right array concats in the final array that was sorted, but quicksort repeats in both additional
        // arrays: left (that less of pivot) and right (that more of pivot).
        let pivot = products[0];
        
        // An additional array for less elements (left array).
        let lessArray = [];

        // An additional array for more elements (right array).
        let greaterArray = [];

        if (products.length < 2) {

            return products;
        } else {

            for (let i = 1; i < products.length; i++) {

                if (products[i].choice <= pivot.choice) lessArray.push(products[i]);
                if (products[i].choice > pivot.choice) greaterArray.push(products[i]);
            }

            return [...quicksort(lessArray), pivot, ...quicksort(greaterArray)];
        }
    }
    return quicksort(products);
}


/*                                     Testing program.                                                   */


/* Testing getters and setters of this object "Product".                                                                */

function testMethods(nameOfTest, setterResult, getterResult) {

    if (setterResult === getterResult) {

        console.log(nameOfTest + "Passed!");
    } else {

        console.log(nameOfTest + "NOT passed!!!");
    }
}

let product_0 = new Product();

// Test "ID" parameter
let setterResult = "001";
product_0.setID(setterResult);
let getterResult = product_0.getID();
testMethods("Test getter and setter ID  -  ", setterResult, getterResult);

// Test "name" parameter
setterResult = "Man shirt";
product_0.setName(setterResult);
getterResult = product_0.getName();
testMethods("Test getter and setter 'name' parameter  -  ", setterResult, getterResult);

// Test "description" parameter
setterResult = "Man shirt with tight sleeves";
product_0.setDescription(setterResult);
getterResult = product_0.getDescriotion();
testMethods("Test getter and setter 'description' parameter  -  ", setterResult, getterResult);

// Test "price" parameter
setterResult = 11.99;
product_0.setPrice(setterResult);
getterResult = product_0.getPrice();
testMethods("Test getter and setter 'price' parameter  -  ", setterResult, getterResult);

// Test "brand" parameter
setterResult = "Karlo Patchotty";
product_0.setBrand(setterResult);
getterResult = product_0.getBrand();
testMethods("Test getter and setter 'brand' parameter  -  ", setterResult, getterResult);

// Test "sizes" parameter
setterResult = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
product_0.setSizes(setterResult);
getterResult = product_0.getSizes();
testMethods("Test getter and setter 'sizes' parameter  -  ", setterResult, getterResult);

// Test "activeSize" parameter
setterResult = "XXXL";
product_0.setActiveSize(setterResult);
getterResult = product_0.getActiveSize();
testMethods("Test getter and setter 'Active Size' parameter  -  ", setterResult, getterResult);

// Test "quantity" parameter
setterResult = 2;
product_0.setQuantity(setterResult);
getterResult = product_0.getQuantity();
testMethods("Test getter and setter 'quantity' parameter  -  ", setterResult, getterResult);

// Test "date" parameter
setterResult = new Date(2023, 5, 25);
product_0.setDate(setterResult);
getterResult = product_0.getDate();
testMethods("Test getter and setter 'date' parameter  -  ", setterResult, getterResult);

// Test "reviews" parameter
setterResult = [new Review("01", "John"), new Review("02", "Ryan"), new Review("03", "Dodj")];
product_0.setReviews(setterResult);
getterResult = product_0.getReviews();
testMethods("Test getter and setter 'reviews' parameter  -  ", setterResult, getterResult);

// Test "images" parameter
setterResult = ["img_0", "img_1", "img_2"];
product_0.setImages(setterResult);
getterResult = product_0.getImages();
testMethods("Test getter and setter 'images' parameter  -  ", setterResult, getterResult);


/* Testing other methods of this object "Product".                                                        */

// Test of  method: "getReviewByID"
setterResult = product_0.getReviews()[1];
let ID = "02";
getterResult = product_0.getReviewByID(ID);
testMethods("Test of  method: 'getReviewByID'  -  ", setterResult, getterResult);

// Test of  method: "getImage"
setterResult = product_0.getImages()[1];
let numberOfImage = 1;
getterResult = product_0.getImage(1);
testMethods("Test of  method: 'getImage'  -  ", setterResult, getterResult);

// Test of  method: "addSize"
product_0.addSize('XXXXL');
getterResult = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL'].toString; // arrays have not equal with ===
setterResult = product_0.getSizes().toString; // arrays have not equal with ===
testMethods("Test of  method: 'addSize'  -  ", setterResult, getterResult);

// Test of  method: "deleteSize"
product_0.deleteSize('M');
getterResult = ['XS', 'S', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL'].toString; // arrays have not equal with ===
setterResult = product_0.getSizes().toString; // arrays have not equal with ===
testMethods("Test of  method: 'deleteSize'  -  ", setterResult, getterResult);

// Test of  method: "addReview"
product_0.addReview(new Review("04", "Lidia"));
getterResult = [new Review("01", "John"), new Review("02", "Ryan"), new Review("03", "Dodj"), new Review("04", "Lidia")].toString; // arrays have not equal with ===
setterResult = product_0.getReviews().toString; // arrays have not equal with ===
testMethods("Test of  method: 'addReview'  -  ", setterResult, getterResult);

// Test of  method: "deleteReview"
product_0.deleteReview(new Review("01", "John"));
getterResult = [new Review("02", "Ryan"), new Review("03", "Dodj"), new Review("04", "Lidia")].toString; // arrays have not equal with ===
setterResult = product_0.getReviews().toString; // arrays have not equal with ===
testMethods("Test of  method: 'deleteReview'  -  ", setterResult, getterResult);

// Test of  method: "getAverageRating"

product_0.setReviews([new Review("01", "John", new Date(2023, 6, 1), "Good product!",
    { service: 10, price: 3, value: 6, quality: 8 }), new Review("02", "Ryan", new Date(2023, 6, 2), "Ok!",
        { service: 9, price: 1, value: 9, quality: 3 }), new Review("03", "Dodj", new Date(2023, 6, 2), "Nice!",
            { service: 8, price: 2, value: 5, quality: 7 })]);

getterResult = (((10 + 3 + 6 + 8) + (9 + 1 + 9 + 3) + (8 + 2 + 5 + 7)) / 12).toFixed(2);
setterResult = product_0.getAverageRating();
testMethods("Test of  method: 'getAverageRating'  -  ", setterResult, getterResult);


/* Testing function "searchProducts (products, search)".                                                         */

let arrayOfProducts = [new Product("001", "Fancy dress", "Dress for masquerade", 11.99),
new Product("002", "Babydoll dress", "Dress in the doll style", 13.59),
new Product("003", "Cocktail dress", "For business meetings", 16.00),
new Product("004", "Wrap robe", "Dressing gown", 9.59),
new Product("005", "sweater", "Classic style", 8.90),
new Product("006", "Sweatshirt", "Popular style", 10.25),
new Product("007", "hoodie", "new sweater", 12.00),
new Product("008", "pendent", "For my sweetheard", 3.5)];

getterResult = [new Product("005", "sweater", "Classic style", 8.90),
new Product("006", "Sweatshirt", "Popular style", 10.25),
new Product("007", "hoodie", "new sweater", 12.00),
new Product("008", "pendent", "For my sweetheard", 3.5)].toString;

setterResult = searchProducts(arrayOfProducts, "SWE").toString;
testMethods("Test of  method: 'searchProducts (products, search)',  - ", setterResult, getterResult);


/* Testing function "sortProducts (products, sortRule)".                                                         */

// Sort rule "price":

getterResult = [new Product("008", "pendent", "For my sweetheard", 3.5),
new Product("005", "sweater", "Classic style", 8.90),
new Product("004", "Wrap robe", "Dressing gown", 9.59),
new Product("006", "Sweatshirt", "Popular style", 10.25),
new Product("001", "Fancy dress", "Dress for masquerade", 11.99),
new Product("007", "hoodie", "new sweater", 12.00),
new Product("002", "Babydoll dress", "Dress in the doll style", 13.59),
new Product("003", "Cocktail dress", "For business meetings", 16.00)].toString;

setterResult = sortProducts(arrayOfProducts, "price").toString;
testMethods("Test of  method: 'sortProducts (products, 'price')',  - ", setterResult, getterResult);

// Sort rule "name":

getterResult = [new Product("002", "Babydoll dress", "Dress in the doll style", 13.59),
new Product("003", "Cocktail dress", "For business meetings", 16.00),
new Product("001", "Fancy dress", "Dress for masquerade", 11.99),
new Product("007", "hoodie", "new sweater", 12.00),
new Product("008", "pendent", "For my sweetheard", 3.5),
new Product("005", "sweater", "Classic style", 8.90),
new Product("006", "Sweatshirt", "Popular style", 10.25),
new Product("004", "Wrap robe", "Dressing gown", 9.59)].toString;

setterResult = sortProducts(arrayOfProducts, "name").toString;
testMethods("Test of  method: 'sortProducts (products, 'name')',  - ", setterResult, getterResult);

// Sort rule "ID":

getterResult = [new Product("001", "Fancy dress", "Dress for masquerade", 11.99),
new Product("002", "Babydoll dress", "Dress in the doll style", 13.59),
new Product("003", "Cocktail dress", "For business meetings", 16.00),
new Product("004", "Wrap robe", "Dressing gown", 9.59),
new Product("005", "sweater", "Classic style", 8.90),
new Product("006", "Sweatshirt", "Popular style", 10.25),
new Product("007", "hoodie", "new sweater", 12.00),
new Product("008", "pendent", "For my sweetheard", 3.5)].toString;

setterResult = sortProducts(arrayOfProducts, "ID").toString;
testMethods("Test of  method: 'sortProducts (products, 'ID')',  - ", setterResult, getterResult);
