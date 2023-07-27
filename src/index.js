const init = () => {
  
const form = document.querySelector('form')
form.addEventListener('submit',(event) => {
event.preventDefault()

//Accessing the value directly from the DOM element
const val = document.querySelector('input#searchByID')
console.log(val.value)

fetch(`http://localhost:3000/movies/${val.value}`)
.then(resp => resp.json())
.then(data => {
    const title = document.querySelector('section#movieDetails h4')
    const summary = document.querySelector('section#movieDetails p')

    title.innerText = data.title
    summary.innerText = data.summary
})
})
}

document.addEventListener('DOMContentLoaded', init);