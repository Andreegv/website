//Control Panel//

//The result is based on laptop price and ROI (in months).
// You can update this variables

// Initial laptop price for Windows OS:
let laptopPriceCi5 = 750
let laptopPriceCi7 = 1000

// Initial laptop price for Mac OS:
let MacPriceCi5 = 2000
let MacPriceCi7 = 2500

//price and rent are the exactly the same, both are the final result of the calculator: "the price per laptop//
//there are two because #price is a div and #rent is an input element.//
//#rent has display none because it is need it to send the data-form//

const price = document.getElementById('price');
const rent = document.getElementById('rent');
const durationInputNumber = document.querySelector('input[name=duration-number]');
const durationInputType = document.querySelectorAll('input[name=duration]');
const quantityInput = document.querySelector('input[name=quantity]');
const operatingSystems = document.querySelectorAll('input[name=os]');
const processors = document.querySelectorAll('input[name=processors]');
let processor = 'ci5';
let laptopPrice = 750;
let operatingSystem = 'Windows';
let quantity;
let quantityFlag = 0
let duration;
let durationType = 'months'
let durationFlag = 10;

///General Functions///
function calculatorUpdate(value){
    price.innerHTML = '$'+value;
        rent.value = '$'+value;
}

//extracting processor data and defining laptopPrice//

processors.forEach((core) => {
    core.addEventListener("change", function(e) {
      processor = e.target.value;
      if (processor === 'ci5') {
          if (operatingSystem === 'Windows') {
              laptopPrice = laptopPriceCi5

          }

          else {
              laptopPrice = MacPriceCi5

          }
      }

      else {
          if (operatingSystem === 'Windows') {
              laptopPrice = laptopPriceCi7;

          }

          else {
              laptopPrice = MacPriceCi7;

          }
      }
    let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
    price.innerHTML = '$'+value;
    rent.value = '$'+value;
    console.log(Math.ceil(laptopPrice/durationFlag))
    console.log(quantityFlag)
    console.log(value)
    });
});


//extracting OS data and defining laptopPrice//

operatingSystems.forEach((sys) => {
    sys.addEventListener("change", function(e) {
      operatingSystem = e.target.value;
      if (operatingSystem === 'Windows') {
          if (processor === 'ci5') {
              laptopPrice = laptopPriceCi5
              console.log(laptopPrice);
          }

          else {
              laptopPrice = laptopPriceCi7
              console.log(laptopPrice);
          }
      }
      else {
          if (processor === 'ci5') {
              laptopPrice = MacPriceCi5
              console.log(laptopPrice);
          }

          else {
              laptopPrice = MacPriceCi7
              console.log(typeof laptopPrice);
          }
      }
    let value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
    price.innerHTML = '$'+value;
    rent.value = '$'+value;
    console.log(Math.ceil(laptopPrice/durationFlag))
    console.log(quantityFlag)
    console.log(value)
    });
});


//extracting quantity//

quantityInput.addEventListener('input', (e)=>{
    quantity = parseInt(e.target.value);
    let value
    if ( isNaN(duration) || isNaN(quantity) ) {
        value = 0
        calculatorUpdate(value);
    }
    else {
        if (quantity <= 10)
            quantityFlag = 0;
        else if (10 < quantity && quantity<= 25 )
            quantityFlag = -1;
        else if (25 < quantity && quantity<= 50 )
            quantityFlag = -1;
        else if (50 < quantity && quantity<= 75 )
            quantityFlag = -2;
        else quantityFlag = -2;
        value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
        calculatorUpdate(value);
    }
});


///////***********Renting term**************//////////

//extracting renting term //


////Extracting durationType/////
durationInputType.forEach((type) => {
    type.addEventListener("change", function(e) {
      durationType = e.target.id;
    });
});

////Extracting durationNumber/////


durationInputNumber.addEventListener('input', (e)=> {
    duration = parseInt(e.target.value);
    let value
    if ( isNaN(duration) || isNaN(quantity) ) {
        value = 0
        calculatorUpdate(value);
    }
    else {
        if (duration <= 6)
        durationFlag = 10;
        else if (6 < duration && duration<= 12 )
            durationFlag = 11;
        else if (12 < duration && duration<= 18 )
            durationFlag = 12;
        else if (18 < duration && duration<= 24 )
            durationFlag = 15;
        else if (24 < duration && duration<= 30 )
            durationFlag = 17;
        else durationFlag = 18;
        value = Math.ceil(laptopPrice/durationFlag) + quantityFlag;
        calculatorUpdate(value)
    }
});
