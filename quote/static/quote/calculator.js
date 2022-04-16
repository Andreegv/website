const price = document.querySelector('.price')
const rent = document.getElementById('rent')
const quantity = document.getElementById('quantityRange')
const duration = document.getElementById('durationRange')
const quantityNumber = document.getElementById('quantityNumber')
const durationNumber = document.getElementById('durationNumber')
const processor = document.querySelectorAll('input[name=processor]')
let laptopPrice = 1

for (const coreIntel of processor) {
    if (coreIntel.checked) {
        laptopPrice = coreIntel.dataset.laptopPrice;
    }
}

for (const coreIntel of processor) {
    coreIntel.addEventListener('click',()=>{
        laptopPrice = coreIntel.dataset.laptopPrice;
        let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
        price.innerHTML = '$'+value;
        rent.value = '$'+value;
    })
}

let durationFlag = 10;
let quantityFlag = 0;

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
    rent.value = '$'+value;

});


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
    rent.value = '$'+value;

});
