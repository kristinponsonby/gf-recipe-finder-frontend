class ApiService {

    constructor(api) {
        this.api = api
    }

    //Fetch call 1
 getRecipes = () => fetch(this.api + "/recipes").then(res => res.json())

} 