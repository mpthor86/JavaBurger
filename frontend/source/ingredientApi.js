class IngredientApi {
    static fetchIngredients(){
        fetch('http://[::1]:3000/ingredients')
        .then(resp => resp.json())
        .then(Ingredient.makeIngredients)
    }

    static update = (ing) =>{
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(ing)
        }

        fetch(`http://[::1]:3000/ingredients/${ing.id}`, configObj)
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
}