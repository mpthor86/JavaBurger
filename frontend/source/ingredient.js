class Ingredient {
    static all = []

    constructor({id, name, burger_id}) {
        this.id = id
        this.name = name
        this.burgerId = burger_id
        this.tag = document.createElement('li')
        this.tag.addEventListener('click', this.handleClick)
        Ingredient.all.push(this)
    }

    static makeIngredients(data) {
        const ingredients = data['data']
        ingredients.forEach(el => {
            new Ingredient({id: el.id, ...el.attributes}).render()
        })
        //Ingredients.forEach(el => Ingredient.render(el))
    }

    static update(id, name) {
        const ing = Ingredient.all.find((ing) => {return ing.id === parseInt(id)})
        ing.name = name
        IngredientApi.update(ing)
        //const ings = Ingredient.all.filter((ing) =>{
        //    return ing.burgerId === parseInt(burger.id)
        //})
        //const newIng = document.querySelectorAll('input')
        //for(let i = 0; i < ings.length; i++){
        //    ings[i].name = newIng[i].value
        //ings.forEach(el => IngredientApi.update(el))
        //    }
    }

    render = () => {
        this.tag.innerHTML = `
        ${this.name}
        `
    }

}