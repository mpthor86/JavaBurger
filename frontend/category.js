class Category {
    static all = []

    constructor(id, name) {
        this.name = name
        this.id = id
        this.tag = document.createElement('p')
        this.tag.addEventListener('click', this.catClick)
        Category.all.push(this)
    }

    static fetchCategories(){
        fetch('http://[::1]:3000/categories')
        .then(resp => resp.json())
        .then(Category.makeCategories)
    }

    static makeCategories(data){
        const cat = data['data']
        cat.forEach(el => {
            const newCat = new Category(el.id, el.attributes.name)
            newCat.addCategoriesToDom()
        })
    }

    changeColor(){
        this.style.color = 'blue'
    }

    render(){
        this.tag.innerHTML = `
        <div id="${this.id}">
            <strong id="${this.id}">${this.name}</strong>    
        `

        return this.tag
    }

    addCategoriesToDom() {
        catList.appendChild(this.render())
    }
    
    catClick = (e) => {
        Meal.addMealToDom(e.target.id)
    }
}