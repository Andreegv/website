droneButton = document.querySelectorAll('input[name=drone]')
paragrah = document.querySelector('p')
let variable = 'some random text'
console.log(variable)

variable = 1234
console.log(variable)

if (true) {
    variable = 'I changed it inside of a block?'
    console.log(variable)
}

console.log(variable)



for (const selection of droneButton) {
    if (selection.checked) {
        variable = selection.value
        paragrah.innerText = variable
        console.log(variable)
    }

}

console.log(variable)

for (const selection of droneButton) {
    selection.addEventListener('click',()=>{
        variable = selection.dataset.radio;
        console.log(variable)
        paragrah.innerText = variable
    })

}

console.log(variable)



