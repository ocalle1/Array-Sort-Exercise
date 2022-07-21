// Utilizes the HTML form code.

const form = document.myForm
// Radio
form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(form.gender.value)
})

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     // for loop gets the checked information
//    for(let i = 0; i < form.gender.length; i++){
//        console.log(form.gender[i].checked)
//    }
// })

// Select Option
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(form.destination.value)
})

const checkedInput = []
//checkbox --- food selection
form.addEventListener("submit", (event) => {
    event.preventDefault()

    for (let i = 0; i < form.food.length; i++) {
        if (form.food[i].checked) {
            checkedInput.push(form.food[i].value)

        }
    }
    console.log(checkedInput)
})
