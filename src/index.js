const api = new ApiService("http://localhost:3000")
const modal = new Modal()

//This runs your fetch call and gets all recipe json objects
//Recipe.getRecipes()
document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
    e.preventDefault()
    console.log(e.target.username.value)
}