const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user 


//This runs your fetch call and gets all recipe json objects
Recipe.getRecipes()
document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
    e.preventDefault()
    //clear form
    document.getElementById("main").innerHTML += ""
    api.findOrCreateUser(e.target.username.value).then(userData => {
        //over write the global scope as defined above
        user = userData
        Recipe.getRecipes()
    })
}

