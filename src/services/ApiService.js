class ApiService {

    constructor(api) {
        this.api = api
    }

    //Fetch call 1
    getRecipes = () => { 
        return fetch(this.api + "/recipes")
        .then(res => res.json())
    }

    //Fetch call 2
    createRecipe = (newRecipe) => {
        console.log(newRecipe)
        console.log(user)
        // Make sure when a user posts a new recipe, the user id is first added to that new recipe
    newRecipe.user_id = user.id
     return fetch(this.api + "/recipes", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
         })
        .then(response => response.json())
    }

    //Fetch call 3
    findOrCreateUser = (username) => {
        console.log(username)
        return fetch(this.api + "/users", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({username: username}),
               })
              .then(response => response.json())
          }
    

} 