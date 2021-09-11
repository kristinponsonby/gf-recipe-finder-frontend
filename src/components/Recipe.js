class Recipe {

    static all = []
     constructor(data) {
         this.data = data
         this.constructor.all.push(this)
         console.log(this )
    }


    renderShow = () => {
        const { name, category, ingredients, imageUrl} = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
            <img src="${imageUrl}" alt=${name}/>
            <p class="title">${name}</p>
            <p>Ingredients: ${ingredients}</p>
            <p>Category: ${category}</p>
          </div>
          <button id="goBack"> Go Back</button>
          `
          document.getElementById("goBack").addEventListener("click", Recipe.renderIndex)
    }


    renderCard = () => {
        // destructuring: 'this' is the passed instance of a recipe
        const { name, category, ingredients, imageUrl, id } = this.data
         document.getElementById("recipe-container").innerHTML +=
          `<div class="recipe-card" data-id=${id}>
              <img src=${imageUrl} alt=${name}/>
              <p class="title">${name}</p>
              <p>Ingredients: ${ingredients}</p>
              <p>Category: ${category}</p>
          </div>`
        }
         
        static openRecipeForm = () => {
            modal.main.innerHTML += `
            <h1> Add a New GF Recipe </h1>
            <form>
            <label for="name">Name:</label><br>
            <input type="text" name="name"></br>
            <label for="category">Category:</label><br>
            <input type="text" name="category"></br>
            <label for="ingredients">Ingredients:</label><br>
            <input type="text" name="ingredients"></br>
            <label for="imageUrl">Image:</label><br>
            <input type="text" name="imageurl"></br>
            <input type="submit" value="Submit!">
            </form>`
            modal.main.querySelector("form").addEventListener("submit", handleSubmit)()
            modal.open()
        }
        
    static find = (id) => this.all.find(recipe => recipe.data.id ==id)

    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
            const id = e.target.closest(".recipe-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static renderIndex= () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const recipeContainer = document.createElement("div") 
        recipeContainer.id= "recipe-container"
        const addRecipe = document.createElement("button")
        addRecipe.innerText = "Add a new recipe"
        addRecipe.addEventListener("click", this.openRecipeForm)
        main.append(recipeContainer, addRecipe)
        this.all.forEach(recipe => recipe.renderCard())
        recipeContainer.addEventListener("click", this.handleIndexClick)
    }

     static getRecipes = () => {
        api.getRecipes().then(recipes => {
             recipes.forEach(recipe => new Recipe(recipe))
            this.renderIndex()
         })
      }


}  