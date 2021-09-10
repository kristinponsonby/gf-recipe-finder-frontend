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
          </div>`
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

    static find = (id) => this.all.find(recipe => recipe.data.id ==id)

    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
            const id = e.target.closest(".recipe-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static renderIndex= () => {
        const recipeContainer = document.createElement("div") 
        recipeContainer.id= "recipe-container"
        document.getElementById("main").appendChild(recipeContainer)
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