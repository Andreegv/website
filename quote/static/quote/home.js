const slideValue = document.querySelector('span')
const inputSlider = document.querySelector('input')
const checkVerifier = document.getElementById('accept')
const pChecker = document.getElementById('pChecker')

checkVerifier.addEventListener('click', ()=> {
   if (checkVerifier.checked === true) {
      pChecker.style.color = 'red';
   }
   else { pChecker.style.color = 'black'
   }

})


inputSlider.oninput = ( ()=>{
   let value = inputSlider.value;
   slideValue.textContent = value;
   slideValue.style.left = ((value/200)*100) + "%"
   slideValue.classList.add('show');
});

inputSlider.onblur = (()=>{
   slideValue.classList.remove('show');
})

