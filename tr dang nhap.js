const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function (button, index) {
  // console.log(button,index);
  button.addEventListener("click", function (event) {{
      var btnItem = event.target;
      var product = btnItem.parentElement;
      //  console.log(product);
      var productImg = product.querySelector("img").src;
      //  console.log(productImg);
      var productName = product.querySelector("h1").innerText;
      // console.log(productName)
      var productPrice = product.querySelector("span").innerText;
      // console.log(productPrice,productImg,productName)
      addcart(productPrice, productImg, productName);
    }
  });
});
function addcart(productPrice, productImg, productName) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".title");

    if (productT[i].innerHTML == productName) {
      alert("san pham da co trong gio hang");
      return;
    }
  }

  var trcontent =
    '<tr><td style="display: flex;align-items: center;"> <img style="width: 70px;"  src="' +
    productImg +
    '" alt=""><span class="title">' +
    productName +
    '</span> </td><td><p><span class="prices">' +
    productPrice +
    '</span><sup>d</sup></p></td><td> <input style="width: 30px;outline: none;" type="number" value="1" min="1"> </td><td style="cursor: pointer;"><span class="cart-delete">xoa</span></td></tr>';
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  // console.log(cartTable);
  cartTable.append(addtr);
  carttotal();
  deleteCart();
}

// tinh tong tien--------
function carttotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  // console.log(cartItem.length);
  var totalC = 0;
  var totalA = 0;
  for (var i = 0; i < cartItem.length; i++) {
    // console.log(i);
    var inputValue = cartItem[i].querySelector("input").value;
    // console.log(inputValue);
    var productPrice = cartItem[i].querySelector(".prices").innerHTML;
    // console.log(productPrice)
    totalA = inputValue * productPrice * 1000;
    // totalB=totalA.toLocaleString('de-DE')
    // console.log(totalB)
    totalC = totalC + totalA;
    // totalD=totalC.toLocaleString('de-DE')
  }
  var cartTotalA = document.querySelector(".price-total span");
  var cartPrice = document.querySelector(".cart-icon span");
  cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
  cartPrice.innerHTML = totalC.toLocaleString("de-DE");
  inputchange();
}
//xoa san pham----
function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".cart-delete");
    productT[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartitemR = cartDelete.parentElement.parentElement;
      cartitemR.remove();
      carttotal();
    });
  }
}

function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", function () {
      carttotal();
    });
  }
}
const cartbtn = document.querySelector(".fa-circle-xmark");
const cartshow = document.querySelector(".fa-cart-shopping");
cartshow.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});
cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-100%";
});




