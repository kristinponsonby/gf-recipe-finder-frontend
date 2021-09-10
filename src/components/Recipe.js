class Recipe {

    static all = []
     constructor(data) {
         this.data = data
         this.constructor.all.push(this)
         console.log(this )
    }


    renderCard = () => {
        // destructuring: 'this' is the passed instance of a recipe
        const { name, category, ingredients, imageUrl, id } = this.data
         document.querySelector(".recipe-container").innerHTML +=
          `<div class="recipe-card">
              <img src=${imageUrl} alt=${name}/>
              <p class="title">${name}</p>
              <p>${category}</p>
              <p>${ingredients}</p>
          </div>`
    }

    static renderIndex(){
        const recipeContainer = document.createElement("div") 
        recipeContainer.classList.add("recipe-container")
        document.getElementById("main").appendChild(recipeContainer)
        this.all.forEach(recipe => recipe.renderCard())
    }

     static getRecipes = () => {
        api.getRecipes().then(recipes => {
             recipes.forEach(recipe => new Recipe(recipe))
            this.renderIndex()
         })
      }


}  