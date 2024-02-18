import { catBreedData } from '/data.js'

const options = document.getElementById("options");
const catbreedForm = document.querySelector("#catbreed-choice")
const formBtn = document.getElementById("submit")

formBtn.addEventListener("click", fetchFormData)

function renderForm(){
    // console.log(catBreedData)
    // console.log("catBreedData")
}

function fetchFormData(e){
    e.preventDefault();
    console.log('data fetched')
    
    const form = new FormData(catbreedForm)
   
    const values = [...form.entries()];
    console.log(values)
    
    console.log(values.length)
    // if(values.length === 2){
    //     formBtn.disabled = false;
    // }
   
}


