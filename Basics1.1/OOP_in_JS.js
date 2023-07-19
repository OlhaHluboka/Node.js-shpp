'use strict'

/**
 * Implements a class Product in prototype style.
 * 
 * This class is a prototype for other objects and it has not any instances. 
 * 
 * @param {string} [ID="0000"] - ID of product
 * @param {string} [name="noName"]  - name of product
 * @param {string} [description="noDescription"]  - description of product
 * @param {number} [price="noPrice"] - price of product
 * @param {number} [quantity="noQuantity"] - quantity of product
 * @param {Array} [reviews="noReview"] - reviews of this product
 * @param {Array} [images="noImage"] - images of this product
 * @param {data} [data="noData"] -  data of product 
 * @param {string} [brand="noBrand"] - brand of product* 
 * 
 */

function AbstractProduct(ID = "0000", name = "noName", description = "noDescription", price = "noPrice",
    quantity = "noQuantity", reviews = "noReview", images = "noImage", data = "noData",
    brand = "noBrand") {

    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.reviews = reviews;
    this.images = images;
    this.data = data;
    this.brand = brand;
}

/* Getters and Setters for prototype`s fields. */

// getter and setter for ID parameter

AbstractProduct.prototype.getID = function () {
    return this.ID;
}

AbstractProduct.prototype.setID = function (newID) {
    this.ID = newID;
}

// getter and setter for name parameter

AbstractProduct.prototype.getName = function () {
    return this.name;
}

AbstractProduct.prototype.setName = function (newName) {
    this.name = newName;
}

// getter and setter for description parameter

AbstractProduct.prototype.getDescriotion = function () {
    return this.description;
}

AbstractProduct.prototype.setDescription = function (newDescription) {
    this.description = newDescription;
}

// getter and setter for price parameter

AbstractProduct.prototype.getPrice = function () {
    return this.price;
}

AbstractProduct.prototype.setPrice = function (newPrice) {
    this.price = newPrice;
}

// getter and setter for quantity parameter

AbstractProduct.prototype.getQuantity = function () {
    return this.quantity;
}

AbstractProduct.prototype.setQuantity = function (newQuantity) {
    this.quantity = newQuantity;
}

// getter and setter for review parameter

AbstractProduct.prototype.getReviews = function () {
    return this.reviews;
}

AbstractProduct.prototype.setReviews = function (newReviews) {
    this.reviews = newReviews;
}

// getter and setter for image parameter

AbstractProduct.prototype.getImages = function () {
    return this.images;
}

AbstractProduct.prototype.setImages = function (newImages) {
    this.images = newImages;
}

// getter and setter for data parameter

AbstractProduct.prototype.getData = function () {
    return this.data;
}

AbstractProduct.prototype.setData = function (newData) {
    this.data = newData;
}

// getter and setter for brand parameter

AbstractProduct.prototype.getBrand = function () {
    return this.brand;
}

AbstractProduct.prototype.setBrand = function (newBrand) {
    this.brand = newBrand;
}

/* Other additional methods of this prototype. */

/** 
    * Obtains a review by its ID number.
    * 
    *  @param - ID number of each review;
    * 
    *  @returns - a review object;
   */

AbstractProduct.prototype.getReviewByID = function (getID) {

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
AbstractProduct.prototype.getImage = function (number) {

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
AbstractProduct.prototype.addSize = function (newSize) {

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
AbstractProduct.prototype.deleteSize = function (valueOfSize) {

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
AbstractProduct.prototype.addReview = function (newReview) {

    this.reviews.push(newReview);
}

/**
 * Deletes a review by its ID from this array of reviews parameter.
 * 
 * @param - ID of review;
 */
AbstractProduct.prototype.deleteReview = function (ID) {

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
AbstractProduct.prototype.getAverageRating = function () {

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


/**
 * Returns a string that contained values of all properties of this object.
 * 
 * @returns - string of a value * 
 */

AbstractProduct.prototype.getFullInformation = function () {

    let values = "";

    for (let property in this) {
        if (Object.hasOwn(this, property)) {

            values += property + "  -  " + this[property] + "\n"
        }
    }
    return values;
}


/**
 * Returns a cost for n products this type in the format: "$12.40".    
 * 
 * @param - a quantity of products
 * 
 * @returns - an all amount of money  
 *  
 */

AbstractProduct.prototype.getPriceForQuantity = function (quantity_new) {

    let result = `$${(this.price * quantity_new).toFixed(2)}`

    return result
}

/**
 * Universal method for getter and setter functions for all properties of this prototype object.
 * 
 * @param {string} property - a property of prototype
 * @param {} value - value of property
 */

AbstractProduct.prototype.universalGetSet = function (property, value) {

    if (Object.hasOwn(this, property)) {

        if (value === undefined) {   // getter

            return this[property]

        } else {   //setter

            this[property] = value;
        }
    }
}


/**
 * Object "Review" is a review of customer about product.
 * @param {string} ID - ID of rview
 * @param {string} author - name of author
 * @param {data} date - date of written review
 * @param {string} comment - his or her comment
 * @param {object} raiting - results of survey questionnaire
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

/* FUNCTIONS*/

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


/* INHERENT OBJECTS */


/**
 * Objects "Clothes" is an inherent object from a prototype "AbstractProduct".
 * 
 * @param {Array} sizes
 * @param {string} [activeSize="noActiveSize"] 
 * @param {string} [data="noData"] 
 * @param {String} material 
 * @param {String} color 
 */

function Clothes(sizes = "noSizes", activeSize = "noActiveSize", data = "noData",
    material = "noMaterial", color = "noColor") {
    AbstractProduct.call(this, sizes, activeSize, data, material, color)

    this.sizes = sizes;
    this.activeSize = activeSize;
    this.data = data;
    this.material = material;
    this.color = color;
}

// Couples prototype "AbstractProduct" with prototype "Clothes"
Clothes.prototype = Object.create(AbstractProduct.prototype)

// And makes getter and setter methods for fields of this instance
Clothes.prototype.getSizes = function () {
    return this.sizes
}
Clothes.prototype.setSizes = function (newSizes) {
    this.sizes = newSizes
}

Clothes.prototype.getActiveSize = function () {
    return this.activeSize
}
Clothes.prototype.setActiveSize = function (newActiveSize) {
    this.activeSize = newActiveSize
}

Clothes.prototype.getDate = function () {
    return this.data
}
Clothes.prototype.setDate = function (newDate) {
    this.data = newDate
}

Clothes.prototype.getMaterial = function () {
    return this.material
}
Clothes.prototype.setMaterial = function (newMaterial) {
    this.material = newMaterial
}

Clothes.prototype.getColor = function () {
    return this.color
}
Clothes.prototype.setColor = function (newColor) {
    this.color = newColor
}


/**
 * Objects "Electronics" is another inherent object from a prototype "AbstractProduct".
 * 
 * @param {Number} warranty - warranty period in years
 * @param {Number} power  - size of Mpxs
 */
function Electronics(date, warranty, power) {
    AbstractProduct.call(this, date, warranty, power)

    this.data = date;
    this.warranty = warranty;
    this.power = power;
}

Electronics.prototype = Object.create(AbstractProduct.prototype)

// Getters and setters
Electronics.prototype.getDate = function () {
    return this.data
}
Electronics.prototype.setDate = function (newDate) {
    this.data = newDate
}

Electronics.prototype.getWarranty = function () {
    return this.warranty
}
Electronics.prototype.setWarranty = function (newWarranty) {
    this.warranty = newWarranty
}

Electronics.prototype.getPower = function () {
    return this.power
}
Electronics.prototype.setPower = function (newPower) {
    this.power = newPower
}


/* TESTING */

/**
 * The main function for testing methods.
 * @param {string} nameOfTest - name of method which is testing now
 * @param {*} setterResult - variable for matching
 * @param {*} getterResult - variable for matching
 */
function testMethods(nameOfTest, setterResult, getterResult) {

    if (setterResult === getterResult) {

        console.log(nameOfTest + "Passed!");
    } else {

        console.log(nameOfTest + "NOT passed!!!");
    }
}

/* CLOTHES TESTS */

console.log("!!!CLOTHES TESTS!!!\n")

let product_1 = new Clothes()

// Test "ID" parameter
let setterResult = "001";
product_1.setID(setterResult);
let getterResult = product_1.getID();
testMethods("Test getter and setter ID  -  ", setterResult, getterResult);

// Test "name" parameter
setterResult = "Blue jeans";
product_1.setName(setterResult);
getterResult = product_1.getName();
testMethods("Test getter and setter 'name' parameter  -  ", setterResult, getterResult);

// Test "description" parameter
setterResult = "Tight blue jeans for the girls";
product_1.setDescription(setterResult);
getterResult = product_1.getDescriotion();
testMethods("Test getter and setter 'description' parameter  -  ", setterResult, getterResult);

// Test "price" parameter
setterResult = 7;
product_1.setPrice(setterResult);
getterResult = product_1.getPrice();
testMethods("Test getter and setter 'price' parameter  -  ", setterResult, getterResult);

// Test "brand" parameter
setterResult = "ISCO Denim";
product_1.setBrand(setterResult);
getterResult = product_1.getBrand();
testMethods("Test getter and setter 'brand' parameter  -  ", setterResult, getterResult);

// Test "quantity" parameter
setterResult = 3;
product_1.setQuantity(setterResult);
getterResult = product_1.getQuantity();
testMethods("Test getter and setter 'quantity' parameter  -  ", setterResult, getterResult);

// Test "reviews" parameter
setterResult = [new Review("01", "Martha"), new Review("02", "Particia"), new Review("03", "Erica")];
product_1.setReviews(setterResult);
getterResult = product_1.getReviews();
testMethods("Test getter and setter 'reviews' parameter  -  ", setterResult, getterResult);

// Test "images" parameter
setterResult = ["img_0", "img_1", "img_2"];
product_1.setImages(setterResult);
getterResult = product_1.getImages();
testMethods("Test getter and setter 'images' parameter  -  ", setterResult, getterResult);

// Test "sizes" parameter
setterResult = ['S', 'M', 'L', 'XL', 'XXL'];
product_1.setSizes(setterResult);
getterResult = product_1.getSizes();
testMethods("Test getter and setter 'sizes' parameter  -  ", setterResult, getterResult);

// Test "activeSize" parameter
setterResult = "XXL";
product_1.setActiveSize(setterResult);
getterResult = product_1.getActiveSize();
testMethods("Test getter and setter 'Active Size' parameter  -  ", setterResult, getterResult);

// Test "date" parameter
setterResult = new Date(2023, 6, 12);
product_1.setDate(setterResult);
getterResult = product_1.getDate();
testMethods("Test getter and setter 'date' parameter  -  ", setterResult, getterResult);

// Test "material" parameter
setterResult = "Denim"
product_1.setMaterial(setterResult)
getterResult = product_1.getMaterial()
testMethods("Test getter and setter 'material' parameter  -  ", setterResult, getterResult)

// Test "color" parameter
setterResult = "Blue"
product_1.setColor(setterResult)
getterResult = product_1.getColor()
testMethods("Test getter and setter 'color' parameter  -  ", setterResult, getterResult)

/* Testing other methods of object "Clothes".  */

// Test of  method: "getReviewByID"
setterResult = product_1.getReviews()[3];
let ID = undefined;
getterResult = product_1.getReviewByID(ID);
testMethods("Test of  method: 'getReviewByID'  -  ", setterResult, getterResult);

// Test of  method: "getImage"
setterResult = product_1.getImages()[1];
let numberOfImage = 1;
getterResult = product_1.getImage(numberOfImage);
testMethods("Test of  method: 'getImage'  -  ", setterResult, getterResult);

// Test of  method: "addSize"
product_1.addSize('XS');
getterResult = ['XS', 'S', 'M', 'L', 'XL', 'XXL'].toString; // arrays have not equal with ===
setterResult = product_1.getSizes().toString; // arrays have not equal with ===
testMethods("Test of  method: 'addSize'  -  ", setterResult, getterResult);

// Test of  method: "deleteSize"
product_1.deleteSize('M');
getterResult = ['XS', 'S', 'L', 'XL', 'XXL'].toString; // arrays have not equal with ===
setterResult = product_1.getSizes().toString; // arrays have not equal with ===
testMethods("Test of  method: 'deleteSize'  -  ", setterResult, getterResult);

// Test of  method: "addReview"
product_1.addReview(new Review("04", "Diana"));
getterResult = 4     // in array of reviews there are four reviews
setterResult = product_1.getReviews().length
testMethods("Test of  method: 'addReview'  -  ", setterResult, getterResult);

// Test of  method: "deleteReview"
product_1.deleteReview("01");
getterResult = 3     // in array of reviews there are three reviews
setterResult = product_1.getReviews().length
testMethods("Test of  method: 'deleteReview'  -  ", setterResult, getterResult);

// Test of  method: "getAverageRating"

product_1.setReviews([new Review("01", "Martha", new Date(2023, 6, 1), "Good product!",
    { service: 10, price: 3, value: 6, quality: 8 }), new Review("02", "Patricia", new Date(2023, 6, 2), "Ok!",
        { service: 9, price: 1, value: 9, quality: 3 }), new Review("03", "Erica", new Date(2023, 6, 2), "Nice!",
            { service: 8, price: 2, value: 5, quality: 7 })]);

getterResult = (((10 + 3 + 6 + 8) + (9 + 1 + 9 + 3) + (8 + 2 + 5 + 7)) / 12).toFixed(2);
setterResult = product_1.getAverageRating();
testMethods("Test of  method: 'getAverageRating'  -  ", setterResult, getterResult);

// Test of method: "getFullInformation"
console.log("Test of method: 'getFullInformation':" + "\n")
console.log(product_1.getFullInformation())

// Test of method "getPriceForQuantity(int)"
getterResult = `$${(7 * 2).toFixed(2)}`
setterResult = product_1.getPriceForQuantity(2)
testMethods("Test of  method: 'getPriceForQuantity(int)'  -  ", setterResult, getterResult);

// Test of method "universalGetSet(property, value)"
// Universal getter
getterResult = product_1.universalGetSet("name");
setterResult = "Blue jeans"
testMethods("Test of  method: 'universalGetSet(property)'  -  ", setterResult, getterResult)

// Universal setter
product_1.universalGetSet("brand", "Pepe Jeans")
getterResult = product_1.universalGetSet("brand")
setterResult = "Pepe Jeans"
testMethods("Test of  method: 'universalGetSet(property, value)'  -  ", setterResult, getterResult)


/* Function "searchProducts (products, search)". */

let arrayOfClothes = [new Clothes("001", "Fancy dress", "Dress for masquerade", 11.99),
new Clothes("002", "Babydoll dress", "Dress in the doll style", 13.59),
new Clothes("003", "Cocktail dress", "For business meetings", 16.00),
new Clothes("004", "Wrap robe", "Dressing gown", 9.59),
new Clothes("005", "sweater", "Classic style", 8.90),
new Clothes("006", "Sweatshirt", "Popular style", 10.25),
new Clothes("007", "hoodie", "new sweater", 12.00),
new Clothes("008", "pendent", "For my sweetheard", 3.5)];

getterResult = [new Clothes("005", "sweater", "Classic style", 8.90),
new Clothes("006", "Sweatshirt", "Popular style", 10.25),
new Clothes("007", "hoodie", "new sweater", 12.00),
new Clothes("008", "pendent", "For my sweetheard", 3.5)];

setterResult = searchProducts(arrayOfClothes, "SWE");
testMethods("Test of  method: 'searchProducts (products, search)',  - ", setterResult.length, getterResult.length);

/* Testing function "sortProducts (products, sortRule)".                                                         */

// Sort rule "price":
console.log("Test of  method: 'sortProducts (products, PRICE) :")

let price = true

if (price) {

    let sorted = sortProducts(arrayOfClothes, "price")
    for (let obj of sorted) {
        console.log(obj.getPrice() + " - " + obj.getName() + " - " + obj.getID())
    }
}

// Sort rule "name":
console.log("\n"+"Test of  method: 'sortProducts (products, NAME) :")

let nameProduct = true

if (nameProduct) {

    let sorted = sortProducts(arrayOfClothes, "name")
    for (let obj of sorted) {
        console.log(obj.getName() + " - " + obj.getPrice() + " - " + obj.getID())
    }
}


// Sort rule "ID":
console.log("\n"+"Test of  method: 'sortProducts (products, ID) :")

let ID_Prod = true

if (ID_Prod) {

    let sorted = sortProducts(arrayOfClothes, "ID")
    for (let obj of sorted) {
        console.log(obj.getID() + " - " + obj.getName() + " - " + obj.getPrice())
    }
}

console.log("\n!!!ELECTRONICS TESTS!!!\n")

let product_2 = new Electronics()

// Test "ID" parameter
setterResult = "001";
product_2.setID(setterResult);
getterResult = product_2.getID();
testMethods("Test getter and setter ID  -  ", setterResult, getterResult);

// Test "name" parameter
setterResult = "Camera";
product_2.setName(setterResult);
getterResult = product_2.getName();
testMethods("Test getter and setter 'name' parameter  -  ", setterResult, getterResult);

// Test "description" parameter
setterResult = "Amazing fotos";
product_2.setDescription(setterResult);
getterResult = product_2.getDescriotion();
testMethods("Test getter and setter 'description' parameter  -  ", setterResult, getterResult);

// Test "price" parameter
setterResult = 600;
product_2.setPrice(setterResult);
getterResult = product_2.getPrice();
testMethods("Test getter and setter 'price' parameter  -  ", setterResult, getterResult);

// Test "brand" parameter
setterResult = "Canon";
product_2.setBrand(setterResult);
getterResult = product_2.getBrand();
testMethods("Test getter and setter 'brand' parameter  -  ", setterResult, getterResult);

// Test "quantity" parameter
setterResult = 4;
product_2.setQuantity(setterResult);
getterResult = product_2.getQuantity();
testMethods("Test getter and setter 'quantity' parameter  -  ", setterResult, getterResult);

// Test "reviews" parameter
setterResult = [new Review("01", "Olivia"), new Review("02", "Peter"), new Review("03", "Georg")];
product_2.setReviews(setterResult);
getterResult = product_2.getReviews();
testMethods("Test getter and setter 'reviews' parameter  -  ", setterResult, getterResult);

// Test "images" parameter
setterResult = ["img_0", "img_1", "img_2", "img_3"];
product_2.setImages(setterResult);
getterResult = product_2.getImages();
testMethods("Test getter and setter 'images' parameter  -  ", setterResult, getterResult);

// Test "date" parameter
setterResult = new Date(2023, 6, 15);
product_2.setDate(setterResult);
getterResult = product_2.getDate();
testMethods("Test getter and setter 'date' parameter  -  ", setterResult, getterResult);

// Test "warranty" parameter
setterResult = 3
product_2.setWarranty(setterResult)
getterResult = product_2.getWarranty()
testMethods("Test getter and setter 'warranty' parameter  -  ", setterResult, getterResult)

// Test "power" parameter
setterResult = 18
product_2.setPower(setterResult)
getterResult = product_2.getPower()
testMethods("Test getter and setter 'power' parameter  -  ", setterResult, getterResult)
