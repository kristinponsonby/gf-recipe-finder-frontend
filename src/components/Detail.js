class Detail {

    constructor(data, recipe) {
        this.data = data
        this.recipe = recipe
    }

    render = () => {
        const { difficulty, cookTime, instructions, image } = this.data
        document.querySelector(".container").innerHTML += `
        <div class="card">
        <h1> Baking Instructions</h1>
        <img src="${image}"/>
        <p><strong> Cook Time: </strong>${cookTime}</p>
        <p><strong>Difficulty: </strong>${difficulty}</p>
        <p> ${instructions}</p>
        </div>
        `
    }  

}