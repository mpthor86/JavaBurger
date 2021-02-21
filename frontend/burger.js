class Burger {
    static all = []

    constructor(id, name) {
        this.name = name
        this.id = id
        this.tag = document.createElement('p')
        Burger.all.push(this)
    }

    static makeBurgers(data){
        const burger = data['data']
        burger.forEach(el => {
            const burger = new Burger(el.id, el.attributes.name)
            burger.addBurgersToDom()
        })
    }

    burgerClick = (e) => {
        if(e.target.innerText === "Edit"){
            e.target.innerText = 'Save'
            this.createEditForm()
        }else if(e.target.innerText === "Save"){
            Ingredient.update(this)
            this.renderBurgerDetail()
        }else if(typeof(e.target) === 'object'){
            this.renderBurgerDetail()
        }
    }

    render(){
        this.tag.innerHTML = `
        <div id="${this.id}">
            <strong id="${this.id}">${this.name}</strong>    
        `
        return this.tag
    }

    addBurgersToDom() {
        burgerList.appendChild(this.render())
        this.tag.addEventListener('click', this.burgerClick)
    }

    renderBurgerDetail(){
        burgerDetail.innerHTML = ""
        const ings = Ingredient.all.filter((ing) => {
            return ing.burgerId === parseInt(this.id)
        })

        burgerDetail.innerHTML = `
        <strong>Whats in the ${this.name}</strong><br>
        <button id="burger-button">Edit</button>
        `
        ings.forEach(el => {
            Ingredient.render(el)
            burgerDetail.appendChild(el.tag)
        })
        document.getElementById('burger-button').addEventListener('click', this.burgerClick)
    }


    createEditForm = () => {
        burgerForm.innerHTML = ""
        const ings = Ingredient.all.filter((ing) =>{
            return ing.burgerId === parseInt(this.id)
        })

        ings.forEach(el => {
            const inputTag = document.createElement('input')
            inputTag.setAttribute('type', 'text')
            inputTag.setAttribute('value', el.name)
            burgerForm.appendChild(inputTag)
        })
    }

    saveBurger = () => {
         
    }
    
}