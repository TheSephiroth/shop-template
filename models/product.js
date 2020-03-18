const fs = require('fs');
const path = require('path');
const dirHelper = require('../util/path');

const p = path.join(dirHelper, 
    'data',
    'products.json'
);


const getProductsFromFiles = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
        }else{
        cb(JSON.parse(fileContent));
        }
    })
}


module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id =  Math.random().toString();
        getProductsFromFiles(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }

    static fetchAll(cb) {
        getProductsFromFiles(cb);
    }
}