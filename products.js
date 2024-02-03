// Categories to the products pages: vegetables, fruits, dairy, meat, fish, bread
// options: organic, glutenFree, lactoseFree

// prettier-ignore
var products = [
  {
    name: "Carrot",
    value: "carrot",
    price: 0.5,
    fruits: true,
    vegetables: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/carrot.jpg",
  },
  {
    name: "Apple",
    value: "apple",
    price: 1,
    fruits: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/apple.jpg",
  },
  {
    name: "Milk",
    value: "milk",
    price: 2,
    dairy: true,
    organic: false,
    glutenFree: true,
    lactoseFree: false,
    img: "/images/carrot.jpg",
  },
  {
    name: "Beef",
    value: "beef",
    price: 5,
    meat: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/beef.jpg",
  },
  {
    name: "Salmon",
    value: "salmon",
    price: 7,
    fish: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/salmon.jpg",
  },
  {
    name: "Bread",
    value: "bread",
    price: 3,
    bread: true,
    organic: true,
    glutenFree: false,
    lactoseFree: true,
    img: "/images/bread.jpg",
  },
  {
    name: "Banana",
    value: "banana",
    price: 1,
    fruits: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/banana.jpg",
  },
  {
    name: "Yogurt",
    value: "yogurt",
    price: 2,
    dairy: true,
    organic: false,
    glutenFree: true,
    lactoseFree: false,
    img: "/images/yogurt.jpg",
  },
  {
    name: "Chicken",
    value: "chicken",
    price: 4,
    meat: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/chicken.jpg",
  },
  {
    name: "Tuna",
    value: "tuna",
    price: 6,
    fish: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/tuna.jpg",
  },
  {
    name: "Rye bread",
    value: "ryeBread",
    price: 4,
    bread: true,
    organic: true,
    glutenFree: false,
    lactoseFree: true,
    img: "/images/ryebread.jpg",
  },
  {
    name: "Orange",
    value: "orange",
    price: 1,
    fruits: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/orange.jpg",
  },
  {
    name: "Cheese",
    value: "cheese",
    price: 3,
    dairy: true,
    organic: false,
    glutenFree: true,
    lactoseFree: false,
    img: "/images/cheese.jpg",
  },
  {
    name: "Pork",
    value: "pork",
    price: 5,
    meat: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    img: "/images/pork.jpg",
  },
  {
    name: "Sardine",
    value: "sardine",
    price: 6,
    fish: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true
  }];
function getProducts(type) {
  var filteredProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i][type] == true) {
      filteredProducts.push(products[i]);
    }
  }
  return filteredProducts;
}

function getTotal(elems) {
  var sum = 0;
  for (var i = 0; i < elems.length; i++) {
    for (var j = 0; j < products.length; j++) {
      if (elems[i] == products[j].value) {
        sum += products[j].price;
      }
    }
  }
  return sum;
}
