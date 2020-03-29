// Object Property shorthand -------------------------------------------------

const name = 'Anurag'
const age = '29'

// Syntax 1
const user = {
    name: name,
    age: age,
    location: 'Pune'
}
// console.log(user)

// Syntax 2 (shorthand)
const user1 = {
    name,
    age,
    location: 'Pune'
}

//console.log(user1)

//---------------------------------------------------------------------------------------------------



// Object Destructuring ----------------------------------------------------------------------------

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// Syntax 1
const label = product.label
const price = product.price
// console.log('label: ' + label + ', \nprice: ' + price)


// Syntax 2 (Destructuring syntax)
// const { label, price } = product
//console.log('label: ' + label + ', \nprice: ' + price)

// Syntax 2 (Destructuring syntax)
// giving our own names
// const { label: myLabel, price } = product
// console.log('label: ' + myLabel + ', \nprice: ' + price)


// Syntax 2 (Destructuring syntax)
// giving default values
// const { label: myLabel, price = 5 } = product
//console.log('label: ' + myLabel + ', \nprice: ' + price)


//Syntax 2 [Destructuring while passing in agrument]

const transaction = (type, { label: myLabel, price }) => {
    console.log('label: ' + myLabel + ', \nprice: ' + price)
}



transaction('order', product)
//---------------------------------------------------------------------------------------------------
