const init = () => {
 const formInput = document.querySelector("form")
 formInput.addEventListener("submit", (event) =>{
    event.preventDefault()
    //console.log(event)
    
    const input = document.querySelector('input#searchByID');
    //console.log(input.value)
   const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const url = "http://localhost:3000/movies/"

   fetch(url + input.value,requestOptions)
    .then(response => response.json())
    .then(data => {
     // console.log(data);
     const title = document.querySelector('section#movieDetails h4');
     const summary = document.querySelector('section#movieDetails p');
     title.innerText = data.title;
     summary.innerText = data.summary

 })
})}

document.addEventListener('DOMContentLoaded', init);