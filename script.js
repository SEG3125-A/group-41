function openSection(event, sectionName) {
  var i, sections, tablinks;
  // Go over every child of the element with id="sections" and hide it
  sections = document.getElementById("sections");
  for (i = 0; i < sections.children.length; i++) {
    sections.children[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  event.currentTarget.parentElement.className += " active";
}

function populateProducts() {
  var productCategory = document.getElementById("category");
  // Get the element selected from radio buttons
  var checked = productCategory.querySelectorAll("input[type=radio]:checked");
  checked = checked[0];
  var productsList = document.getElementById("listProducts");

  // Remove all products
  while (productsList.firstChild) {
    productsList.removeChild(productsList.firstChild);
  }

  if (checked.length == 0) {
    return;
  }

  // Add products
  var ul = document.createElement("ul");
  var productsToAdd = [];
  productsToAdd.push.apply(productsToAdd, getProducts(checked.value));

  // Filter products by price
  productsToAdd.sort(compareProducts);
  // remove duplicates
  productsToAdd = productsToAdd.filter(
    (product, index, self) =>
      self.findIndex((p) => p.name === product.name) === index
  );

  for (j = 0; j < productsToAdd.length; j++) {
    var li = document.createElement("li");
    var product = productsToAdd[j];
    var input = document.createElement("input");
    var img = document.createElement("img");
    img.src = product.img;
    img.height = 200;
    img.width = 200;
    img.style.padding = "10px";
    input.type = "checkbox";
    input.className = "product";
    input.value = product.value;
    input.name = product.name;
    li.appendChild(img);
    li.appendChild(input);

    li.appendChild(
      document.createTextNode(product.name + " - " + product.price + "$")
    );
    ul.appendChild(li);
  }

  productsList.appendChild(ul);
}

function compareProducts(a, b) {
  return a.price - b.price;
}
function addToCart() {
  var cart = document.getElementById("cart");
  var cartnoti = document.getElementById("cart-noti");

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
    cart.appendChild(
      document.createTextNode("Total: " + getTotal(cartsElements) + "$")
    );
  }
  cartnoti.textContent = "Items Added to Cart";
  cartnoti.style.color = "#ffc24f";
}
