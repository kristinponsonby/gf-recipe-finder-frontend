class Detail {

    constructor(data, recipe) {
        this.data = data
        this.recipe = recipe
    }

    render = () => {
        const { difficulty, cookTime, instructions, image } = this.data
        document.querySelector(".container").innerHTML += `
        <div class="card">
        <img src="${image}"/>
        <p>Cook Time: ${cookTime}</p>
        <p>Difficulty: ${difficulty}</p>
        <p>Baking Instructions: ${instructions}</p>
        </div>
        `
    }  

}