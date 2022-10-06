// ITERATION 1

let cartElement = document.querySelector("#cart tbody");

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal;
  return subtotal
  }

function calculateAll() {
  let allProduct = document.querySelectorAll('.product');
  let copyAllProduct = [...allProduct];
  let totalPrice = 0;
  for (let i=0; i<copyAllProduct.length; i++){
    totalPrice += updateSubtotal(copyAllProduct[i]);
    
  }

  totalValue = document.getElementById('total-value');
  totalValue.innerHTML = `Total: ${totalPrice}`;
 
}

// ITERATION 4

function removeProduct(event) {

    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    
    const productToRemove = target.parentNode.parentNode;
    cartElement.removeChild(productToRemove);
  
    calculateAll();
      
  function bindDeleteButton(deleteButton) {
    deleteButton.addEventListener("click", removeProduct); 
  }
  
}

// ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName('btn-remove');
  [...removeButtons].forEach(button => button.addEventListener('click', removeProduct));

});

