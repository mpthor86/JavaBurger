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
            Ingredient.update(this)
            this.renderDetail()
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
        burgerDetail.innerHTML = `<h4><u>Burger Detail:</u></h4>`
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
        document.getElementById('burger-button').addEventListener('click', this.handleClick)
    }


    createEditForm = () => {
        burgerForm.innerHTML = `<h4><u>Update Burger</u></h4>`
        const ings = Ingredient.all.filter((ing) =>{
            return ing.burgerId === parseInt(this.id)
        })

        ings.forEach(el => {
            const li = document.createElement('li')
            const inputTag = document.createElement('input')
            inputTag.setAttribute('type', 'text')
            inputTag.setAttribute('value', el.name)
            li.appendChild(inputTag)
            burgerForm.appendChild(li)
        })
    }
    
}