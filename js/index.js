// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal
  
  console.log(subtotal)
  //... your code goes here
}

function calculateAll() {
  let totalPrice = 0;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProduct = document.querySelectorAll('.product');
  allProduct.forEach((Product) =>{
    let allProductElement = updateSubtotal(Product);
    totalPrice += allProductElement;
   
  })

  let totalValue = document.getElementById('#total-value span');
  totalValue.innerText = totalPrice;
  console.log(totalPrice)


  
  
  //console.log(singleProduct)
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
