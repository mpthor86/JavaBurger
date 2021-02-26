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
            burger.addToDom()
        })
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit"){
            e.target.innerText = 'Save'
            this.createEditForm()
        }else if(e.target.innerText === "Save"){
            const newIng = document.querySelector(`input[id="${e.target.id}"]`)
            Ingredient.update(e.target.id, newIng.value)
        }else if(typeof(e.target) === 'object'){
            this.renderDetail()
        }
    }

    render(){
        this.tag.innerHTML = `
        <div id="${this.id}">
            <strong id="${this.id}">${this.name}</strong>    
        `
        return this.tag
    }

    addToDom() {
        burgerList.appendChild(this.render())
        this.tag.addEventListener('click', this.handleClick)
    }

    renderDetail(){
        burgerForm.innerHTML = ""
        const ings = Ingredient.all.filter((ing) => {
            return ing.burgerId === parseInt(this.id)
        })

        burgerDetail.innerHTML = `
        <strong>Whats in the ${this.name}</strong><br>
        `
        ings.forEach(el => {
            burgerDetail.appendChild(el.tag)

            el.tag.addEventListener('click', () => {

                if(!el.tag.querySelector('input')){
                    const button = document.createElement('button')
                    button.id = el.id
                    button.innerText = "Save"
                    button.addEventListener('click', this.handleClick)
                    el.tag.innerHTML = `<input id=${el.id} value=${el.name}>` 
                    el.tag.appendChild(button)
                }
            })
        })
    }


    //createEditForm = () => {
    //    burgerForm.innerHTML = `<h4><u>Update Burger</u></h4>`
    //    const ings = Ingredient.all.filter((ing) =>{
    //        return ing.burgerId === parseInt(this.id)
    //    })
//
    //    ings.forEach(el => {
    //        const li = document.createElement('li')
    //        const inputTag = document.createElement('input')
    //        inputTag.setAttribute('type', 'text')
    //        inputTag.setAttribute('value', el.name)
    //        li.appendChild(inputTag)
    //        burgerForm.appendChild(li)
    //    })
    //}
    
}