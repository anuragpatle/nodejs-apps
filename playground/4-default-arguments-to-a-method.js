
// here anu is the default argument
const greet = (name = 'anu') => {
    console.log('Hello ' + name)
}


greet('Anurag')
greet() // this will print anu


// = {} is very essential if you don't want your code to throw any exception.
const transaction = (type, { label: myLabel = 'someLbl', price = 9 } = {}) => {
    console.log('label: ' + myLabel + ', \nprice: ' + price)
}

// output-
// label: someLbl, 
// price: 9
transaction('order', {})