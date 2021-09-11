class Modal {


    constructor() {
        this.addCloseEventListener()
    }

    get modal(){
        return document.querySelector("#myModal")
    }

    get main(){
       return document.getElementById("modal-main")
    }
    // Made this into an arrow function becuase we're using it in an event listener
    open = () => {
        this.modal.style.display = "block"
    }

    close = () => {
        this.modal.style.display = "none"
    }

    addCloseEventListener = () => {
        this.modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("close") || e.target.id == "myModal") {
                this.close()
            }
        })
    }
}
    


