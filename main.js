function handleProductChanges(product, isIncrease) {
    const productCount = getInputValue(product)
    let productNewCount = productCount;
    if (isIncrease == true) {
       productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
       productNewCount = productCount - 1;
    }
    document.getElementById(product + 'Quantity').value = productNewCount;
    // const casingPrice = productNewCount * 59;
    let productTotal = 0;
    if (product == 'mobile') {
       productTotal = productNewCount * 1219;
    }
    if (product == 'casing') {
       productTotal = productNewCount * 59;
    }
    document.getElementById(product + 'Total').innerText = productTotal;
    calculateTotal();
 }

 function calculateTotal() {
    const mobileCount = getInputValue('mobile')
    const casingCount = getInputValue('casing')
    // const mobileInput = document.getElementById('mobileQuantity');
    // const mobileCount = parseInt(mobileInput.value);

    // const casingInput = document.getElementById('casingQuantity');
    // const casingCount = parseInt(casingInput.value);
    const subTotalPrice = mobileCount * 1219 + casingCount * 59;
    document.getElementById('subTotal').innerText = subTotalPrice;

    var tax = subTotalPrice * .05;
    tax = tax.toFixed(2);
    document.getElementById('tax').innerText = tax;
    tax = parseFloat(tax);

    const totalAmount = subTotalPrice + tax;
    document.getElementById('totalAmount').innerText = totalAmount;
 }
 function getInputValue(product) {
    const productInput = document.getElementById(product + 'Quantity');
    const productCount = parseInt(productInput.value);
    return productCount;
 }
 //cartRemove

 document.getElementById('display1').addEventListener("click", function () {
    document.getElementById('cartRemove1').style.display = "none";
    document.getElementById('mobileQuantity').value = 0;
    document.getElementById('mobileTotal').innerText = 0;
    calculateTotal();
 })
 document.getElementById('display2').addEventListener("click", function () {
    document.getElementById('cartRemove2').style.display = "none";
    document.getElementById('casingQuantity').value = 0;
    document.getElementById('casingTotal').innerText = 0;
    calculateTotal();
 })
 //checkout
 const checkout = document.getElementById('checkout');
 const welcomePage = document.getElementById('welcomePage');
 welcomePage.style.display = "none";
 checkout.addEventListener('click', function () {
    const cart = document.getElementById('shoppingCart');
    cart.style.display = "none";
    welcomePage.style.display = "block";
 })

 // document.getElementById('casingIncrease').addEventListener('click', function () {

 //    handleProductChanges(true);

 //    // const casingInput = document.getElementById('casingQuantity');
 //    // const casingCount = parseInt(casingInput.value)
 //    // const casingNewCount = casingCount + 1;
 //    // casingInput.value = casingNewCount;
 //    // const casingPrice = casingNewCount * 59;
 //    // document.getElementById('casingTotal').innerText = casingPrice;
 // })
 // document.getElementById('casingDecrease').addEventListener('click', function () {

 //    handleProductChanges(false);

 //    // const casingInput = document.getElementById('casingQuantity');
 //    // const casingCount = parseInt(casingInput.value);
 //    // const casingNewCount = casingCount - 1;
 //    // if (casingNewCount < 0) {
 //    //    return alert('cant be less than zero');
 //    // }
 //    // casingInput.value = casingNewCount;
 //    // const casingPrice = casingNewCount * 59 ;
 //    // document.getElementById('casingTotal').innerText = casingPrice;
 // })


 // for mobile:

 // document.getElementById('mobileIncrease').addEventListener('click', function () {
 //    handleMobileChanges(true);
 // })
 // document.getElementById('mobileDecrease').addEventListener('click', function () {
 //    handleMobileChanges(false);
 // })
 // function handleMobileChanges(isIncrease){
 //    const mobileInput = document.getElementById('mobileQuantity');
 //    const mobileCount = parseInt(mobileInput.value)
 //    let mobileNewCount = mobileCount ;
 //    if(isIncrease == true){
 //       mobileNewCount = mobileCount + 1;
 //    }
 //    if(isIncrease == false && mobileCount > 0){
 //       mobileNewCount = mobileCount - 1;
 //    }
 //    mobileInput.value = mobileNewCount;
 //    const mobilePrice = mobileNewCount * 1219 ;
 //    document.getElementById('currentMobilePrice').innerText = mobilePrice;
 // }