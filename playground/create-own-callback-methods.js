
//-------------------[Start] Withoue Callback-----------------------------

const geoCodeSync = (address) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0
        }
        return data
    }, 2000);
}


const dataSync = geoCodeSync('India')

console.log("Sync: " + dataSync) // output- Sync: undefined

//-------------------[End] Withoue Callback-----------------------------


//-------------------[Start] With Callback-----------------------------
const geoCodeAsync = (address, myCallback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0
        }
        myCallback(data)
    }, 2000);
}

// This will print:
// Async: 0 0
const dataAsync = geoCodeAsync('India', (data) => console.log('Async: ' + data.lat + " " + data.lon))



//-------------------[End] With Callback-----------------------------


//----------------------------------------------------------Another Example----------------------------------
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
//
//
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const add = (a, b, addFn) => {

    setTimeout(() => addFn(a + b), 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // 5
})