class ApiService {

    constructor(api) {
        this.api = api
    }

    //Fetch call 1
 getRecipes = () => fetch(this.api + "/recipes").then(res => res.json())

 //Fetch call 2
 createRecipe = (newRecipe) => {
    return fetch(this.api + "/recipes", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRecipe),
  })
  .then(response => response.json())


    }
} 