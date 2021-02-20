class Burger {
    static all = []

    constructor(id, name) {
        this.name = name
        this.id = id
        this.tag = document.createElement('p')
        this.tag.addEventListener('click', this.burgerClick)
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
        if(e.target.innerText === "Edit Burger"){
            e.target.innerText = 'Save'
            this.createEditForm(e.target)
        }
        this.renderBurgerDetail()
    }

    render(){
        this.tag.innerHTML = `
        <div id="${this.id}">
            <strong id="${this.id}">${this.name}</strong>    
        `
        return this.tag
    }

    renderBurgerDetail(){
        const ings = Ingredient.all.filter((ing) => {
            return ing.burgerId === parseInt(this.id)
        })
        burgerDetail.addEventListener('click', this.burgerClick)
        burgerDetail.innerHTML = `
        <strong>Whats in the ${this.name}</strong><br>
        <button id="edit">Edit Burger</button>
        `
        ings.forEach(el => {
            const ingTag = document.createElement('li')
            ingTag.id = 'ingredient'
            ingTag.innerText = el.name
            burgerDetail.appendChild(ingTag)
        })
    }

    addBurgersToDom() {
        burgerList.appendChild(this.render())
    }

    createEditForm = (button) => {
        debugger
    }
    
}