class Recipe {

    static all = []
     constructor(data) {
         this.data = data
         //this.data.details = [{}] 
         //take this obj,iterate through them using .map, and return an array of JS instances of the Detail class, 
         //just one instance in this case. To return this this.data.details = []
         this.details = this.data.details.map(detail => new Detail(detail))
         this.constructor.all.push(this)
    }


    renderShow = () => {
        const { name, category, ingredients, imageUrl} = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
            <img src="${imageUrl}" alt=${name}/>
            <p class="title">${name}</p>
            <p>${category}</p>
            <p>Ingredients</p>
            <p> ${ingredients}</p>
            <div class="container"></div>
            <button id="goBack"> Go Back</button>
          </div>
          `
          document.getElementById("goBack").addEventListener("click", Recipe.renderIndex)
          this.details.forEach(detail => detail.render())
    }


    renderCard = () => {
        // destructuring: 'this' is the passed instance of a recipe
        const { name, category, ingredients, imageUrl, id } = this.data
         document.getElementById("recipe-container").innerHTML +=
          `<div class="recipe-card" data-id=${id}>
              <img src=${imageUrl} alt=${name}/>
              <p class="title">${name}</p>
              <p>${category}</p>
          </div>`
        }

        static handleSubmit = (e) => {
            e.preventDefault()
            const newRecipe = {
                name: e.target.name.value,
                category: e.target.category.value,
                ingredients: e.target.ingredients.value,
                image_url: e.target.imageUrl.value
            }
            api.createRecipe(newRecipe).then(recipe => {
                new Recipe(recipe).renderCard()
            })
            modal.close()
            e.target.reset()
        }
         
        static openRecipeForm = () => {
            modal.main.innerHTML = `
            <h1> Add a New GF Recipe </h1>
            <form>
            <label for="name">Name:</label><br>
            <input type="text" name="name"></br>
            <label for="category">Category:</label><br>
            <input type="text" name="category"></br>
            <label for="ingredients">Ingredients:</label><br>
            <input type="text" name="ingredients"></br>
            <label for="imageUrl">Image:</label><br>
            <input type="text" name="imageUrl"></br>
            <input type="submit" value="Submit!">
            </form>`

            modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
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
        main.append(addRecipe, recipeContainer)
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