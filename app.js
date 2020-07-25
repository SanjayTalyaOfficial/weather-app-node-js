console.log('starting')
setTimeout(() => {
    console.log('2 second timeout')
}, 2000)

setTimeout(() => {
    console.log('second 0 timeout')
}, 0)

console.log('stopping')