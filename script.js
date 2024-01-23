function openSection(event, sectionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    event.currentTarget.className += " active";
}

function populateProducts(categoryId, productsSectId){
    var productCategory = document.getElementById(categoryId);
    var productsList = document.getElementById(productsSectId);

    // Remove all products
    while (productsList.firstChild) {
        productsList.removeChild(productsList.firstChild);
    }

    // Add products
    var productsToAdd = getProducts(productCategory.value);

    for (i = 0; i < productsToAdd.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "item";
        checkbox.value = productsToAdd[i].value;
        checkbox.id = productsToAdd[i].value;
        checkbox.className = "product";
        productsList.appendChild(checkbox);

        var label = document.createElement('label')
        label.htmlFor = productsToAdd[i].name;
        label.appendChild(document.createTextNode(productsToAdd[i].name));
        productsList.appendChild(label);
    }
}

function addToCart() {
    var cart = document.getElementById("cart");
    var products = document.getElementsByClassName("product");
    var cartsElements = [];

    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
    
    var text = document.createElement("p");
    text.innerHTML = "Cart:";
    text.appendChild(document.createElement("br"));
    for (i = 0; i < products.length; i++) {
        if (products[i].checked) {
            cartsElements.push(products[i].value);
            text.appendChild(document.createTextNode(products[i].value));
            text.appendChild(document.createElement("br"));
        }
    }
    if (cartsElements.length == 0) {
        text.appendChild(document.createTextNode("Cart is empty"));
        cart.appendChild(text);
    } else {
        cart.appendChild(text);
        cart.appendChild(document.createTextNode("Total: " + getTotal(cartsElements) + "$"));
    }
    
}

