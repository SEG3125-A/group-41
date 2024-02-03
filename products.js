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
    vegetarian: true,
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
    vegetarian: true,
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
    vegetarian: true,
    img: "/images/milk.jpg",
  },
  {
    name: "Beef",
    value: "beef",
    price: 5,
    meat: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: false,
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
    vegetarian: false,
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
    vegetarian: true,
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
    vegetarian: true,
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
    vegetarian: true,
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
    vegetarian: false,
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
    vegetarian: false,
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
    vegetarian: true,
    img: "/images/ryeBread.jpg",
  },
  {
    name: "Orange",
    value: "orange",
    price: 1,
    fruits: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: true,
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
    vegetarian: true,
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
    vegetarian: false,
    img: "/images/pork.jpg",
  },
  {
    name: "Sardine",
    value: "sardine",
    price: 6,
    fish: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: false,
  },
  {
    name: "Lettuce",
    value: "lettuce",
    price: 1,
    vegetables: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: true,
    img: "/images/lettuce.jpg",
  },
  {
    name: "Broccoli",
    value: "broccoli",
    price: 1,
    vegetables: true,
    fruits: false,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: true,
    img: "/images/broccoli.jpg",
  },
  {
    name: "Eggs",
    value: "eggs",
    price: 2,
    vegetables: false,
    dairy: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: true,
    img: "/images/egg.jpg",
  },
  {
    name: "Lamb",
    value: "lamb",
    price: 5,
    meat: true,
    vegetables: false,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: false,
    img: "/images/lamb.jpg",
  },
  {
    name: "Cod",
    value: "cod",
    price: 7,
    vegetables: false,
    fish: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: false,
    img: "/images/cod.jpg",
  },
  {
    name: "Baguette",
    value: "baguette",
    price: 3,
    bread: true,
    vegetables: false,
    organic: true,
    glutenFree: false,
    lactoseFree: true,
    vegetarian: true,
    img: "/images/baguette.jpg",
  },
  {
    name: "Grapes",
    value: "grapes",
    vegetables: false,
    price: 1,
    fruits: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: true,
    img: "/images/grapes.jpg",
  },
  {
    name: "Butter",
    value: "butter",
    vegetables: false,
    price: 2,
    dairy: true,
    vegetables: false,
    organic: false,
    glutenFree: true,
    lactoseFree: false,
    vegetarian: true,
    img: "/images/butter.jpg",
  },
  {
    name: "Turkey",
    value: "turkey",
    price: 4,
    vegetables: false,
    meat: true,
    organic: true,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: false,
    img: "/images/turkey.jpg",
  },
  {
    name: "Herring",
    value: "herring",
    vegetables: false,
    price: 6,
    fish: true,
    organic: false,
    glutenFree: true,
    lactoseFree: true,
    vegetarian: false,
    img: "/images/herring.jpg",
  },
];
function getProducts(type=null, restrictions = "none") {
  var filteredProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (type == null) {
      getCriteria();
    } else {
      if (products[i][type] == true) {
        if (restrictions.length == 0) {
          filteredProducts.push(products[i]);
        } else {
          getCriteria();
        }
      }
    }
  }
  return filteredProducts;

  function getCriteria() {
    var addProduct = true;
    for (var j = 0; j < restrictions.length; j++) {
      if (products[i][restrictions[j].value] == false) {
        addProduct = false;
      }
    }
    if (addProduct) {
      filteredProducts.push(products[i]);
    }
    return { addProduct, j };
  }
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
