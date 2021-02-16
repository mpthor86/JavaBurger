fetch('http://[::1]:3000/categories')
    .then(resp => resp.json)
    .then(data => addToDom(data))

function addToDom(data){
    
}