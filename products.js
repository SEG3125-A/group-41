var products = [
    {
        name:"xbox one",
        value:"xbox",
        price: 700,
        videoGame: true,
        electronic: true,
        appliances: false,
    },
    {
        name: "Half life 3",
        value: "half-life",
        price: 60,
        videoGame: true,
        electronic: true,
        appliances: false,
    },
    {
        name:"Portal 2",
        value:"portal",
        price: 40,
        videoGame: true,
        electronic: true,
        appliances: false,
    },
    {
        name:"Left 4 Dead",
        value:"left4dead",
        price: 60,
        videoGame: true,
        electronic: true,
        appliances: false,    
    },
    {
        name:"Iphone 10",
        value:"iphone",
        price: 1000,
        videoGame: false,
        electronic: true,
        appliances: false,
    },
    {
        name:"Samsung Galaxy S8",
        value:"samsung",
        price: 800,
        videoGame: false,
        electronic: true,
        appliances: false,
    },
    {
        name:"LG G6",
        value:"lg",
        price: 600,
        videoGame: false,
        electronic: true,
        appliances: false,
    },
    {
        name:"microwave",
        value:"microwave",
        price: 200,
        videoGame: false,
        electronic: false,
        appliances: true,
    },
    {
        name:"oven",
        value:"oven",
        price: 500,
        videoGame: false,
        electronic: false,
        appliances: true,
    },
    {
        name:"fridge",
        value:"fridge",
        price: 800,
        videoGame: false,
        electronic: false,
        appliances: true,
    }
];

function getProducts(type){
    var filteredProducts = [];
    for(var i = 0; i < products.length; i++){
        if(products[i][type] == true){
            filteredProducts.push(products[i]);
        }
    }
    return filteredProducts;
}

function getTotal(elems) {
    var sum = 0;
    for(var i = 0; i < elems.length; i++){
        for(var j = 0; j < products.length; j++){
            if(elems[i] == products[j].value){
                sum += products[j].price;
            }
        }
    }
    return sum;
}