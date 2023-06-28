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
 * @param {date} date - date of product
 * @param {Array} reviews - array with object "review of product"
 * @param {Array} images - array with images of product
 *  
 */


function Product(ID, name, description, price, brand, activeSize, quantity, date, reviews, images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.size = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;


    // getter and setter for parameters

    this.getID = function () {
        return ID;
    }
    this.setID = function (newID) {
        ID = newID;
    }

    this.getName = function () {
        return name;
    }
    this.setName = function (newName) {
        name = newName;
    }

    this.getDescriotion = function () {
        return description;
    }
    this.setDescription = function (newDescription) {
        description = newDescription;
    }

    this.getPrice = function () {
        return price;
    }
    this.setPrice = function (newPrice) {
        price = newPrice;
    }

    this.getBrand = function () {
        return brand;
    }
    this.setBrand = function (newBrand) {
        brand = newBrand;
    }

    this.getActiveSize = function () {
        return activeSize;
    }
    this.setActiveSize = function (newActiveSize) {
        activeSize = newActiveSize;
    }

    this.getQuantity = function () {
        return quantity;
    }
    this.setQuantity = function (newQuantity) {
        quantity = newQuantity;
    }


    this.getDate = function () {
        return date;
    }
    this.setDate = function (newDate) {
        date = newDate;
    }

    this.getReviews = function () {
        return reviews;
    }
    this.setReviews = function (newReviews) {
        reviews = newReviews;
    }

    this.getImages = function () {
        return images;
    }
    this.setImages = function (newImages) {
        images = newImages;
    }

    // methods of object "Product"

    this.getReviewByID = function (getID) {
        for (let review of reviews) {
            if (getID == review.ID) {
                return review;
            }
        }
    }


}
function Review(ID, author, date, comment, raiting) {
    this.ID = ID,
    this.author = author,
    this.date = date,
    this.comment = comment,
    this.raiting = raiting
}

/// Testing program

let shirt = new Product("001-27", "Man shirt", "with tight sleeves", 12, "Karl");


let rev1 = new Review(shirt.ID, "Kolja");
let rev2 = new Review(shirt.ID, "Vanja");

let arr = [rev1, rev2];
shirt.setReviews(arr);

console.log(shirt.getReviewByID("001-27"));
    }

    
}
