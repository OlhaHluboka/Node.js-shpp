'use strict';
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
 * @param {Array} reviews - array with reviews of product
 * @param {Array} images - array with images of product
 *  
 */


function Product (ID, name, description, price, brand, activeSize, quantity, date, images) {
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

    reviews = {
        ID: ID,
        author: author,
        date: date,
        comment: comment,
        raiting: raiting,
    };

    // getter and setter for parameters
    
    this.getID = function() {
        return ID;
    }
    this.setID = function(newID) {
        ID = newID;
    }

    
    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }

    this.getDescriotion = function() {
        return description;
    }
    this.setDescription = function(newDescription) {
        description = newDescription;
    }
    
    this.getPrice = function() {
        return price;
    }
    this.setPrice = function(newPrice) {
        price = newPrice;
    }

    this.getBrand = function() {
        return brand;
    }
    this.setBrand = function(newBrand) {
        brand = newBrand;
    }

    
}
