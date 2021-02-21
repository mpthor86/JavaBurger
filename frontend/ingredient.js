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

    static fetchIngredients(){
        fetch('http://[::1]:3000/ingredients')
        .then(resp => resp.json())
        .then(Ingredient.makeIngredients)
    }

    static makeIngredients(data) {
        const ingredients = data['data']
        ingredients.forEach(el => {
            new Ingredient({id: el.id, ...el.attributes})
        })
    }

    static update(burger) {
        const ings = Ingredient.all.filter((ing) =>{
            return ing.burgerId === parseInt(burger.id)
        })
        const newIng = burgerForm.children
        for(let i = 0; i < ings.length; i++){
            ings[i].name = newIng[i].value}
        ings.forEach(el => el.updateIngredient())
    }

    updateIngredient = () =>{
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this)
        }

        fetch(`http://[::1]:3000/ingredients/${this.id}`, configObj)
        .then(r => r.json())
        .then(json => {
            if(json.error){
                alert(json.error)
                }else{
                    burgerForm.innerHTML = ""
                }
            }
        )
    }

    static render = (el) => {
        el.tag.innerHTML = `
        ${el.name}
        `
    }

}