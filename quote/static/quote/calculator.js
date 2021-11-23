const price = document.querySelector('.price')
const quantity = document.querySelectorAll('input')[0]
const duration = document.querySelectorAll('input')[1]
const quantityNumber = document.querySelectorAll('.number')[0]
const durationNumber = document.querySelectorAll('.number')[1]
const buttonI5 = document.getElementById('buttonI5')
const buttonI7 = document.getElementById('buttonI7')
let laptopPrice = 650


buttonI5.addEventListener('click', ()=>{
    laptopPrice = buttonI5.value
    let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
    price.innerHTML = '$'+value;
    buttonI7.classList.remove("activated")
    buttonI5.classList.add("activated")

})


buttonI7.addEventListener('click', ()=>{
    laptopPrice = buttonI7.value
    let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
    price.innerHTML = '$'+value;
    buttonI5.classList.remove("activated")
    buttonI7.classList.add("activated")
})


let durationFlag = 10;
let quantityFlag = 0;

duration.oninput = ( ()=> {
    durationNumber.innerHTML = duration.value;
    if (duration.value <= 6)
        durationFlag = 10;
    else if (6 < duration.value && duration.value<= 12 )
        durationFlag = 11;
    else if (12 < duration.value && duration.value<= 18 )
        durationFlag = 12;
    else if (18 < duration.value && duration.value<= 24 )
        durationFlag = 15;
    else if (24 < duration.value && duration.value<= 30 )
        durationFlag = 17;
    else durationFlag = 18;

    let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
    price.innerHTML = '$'+value;
});


quantity.oninput = ( ()=> {
    quantityNumber.innerHTML = quantity.value;
    if (quantity.value <= 10)
        quantityFlag = 0;
    else if (10 < quantity.value && quantity.value<= 25 )
        quantityFlag = -1;
    else if (25 < quantity.value && quantity.value<= 50 )
        quantityFlag = -1;
    else if (50 < quantity.value && quantity.value<= 75 )
        quantityFlag = -2;
    else quantityFlag = -2;

    let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
    price.innerHTML = '$'+value;
});

