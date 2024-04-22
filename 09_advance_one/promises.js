// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise   - for notes

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
    }, 1000)
    resolve()
    })

    promiseOne.then(function(){
        console.log("Promise consumed")
    })


    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Async task 2')
        }, 1000)
        resolve()
    }).then(function(){
        console.log('Async task resolved')
    })

    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username: "chai", email:"chai@example.com"})
        }, 1000)
        
    })

    promiseOne.then(function(user){
        console.log("Promise consumed")
    })

    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false 
            if (!error){
                resolve({userName:"pallavi", password:"123"})
            }
            else{
                reject('ERROR: Something went wrong')
            }
        }, 1000)
    })

   const username = promiseFour.then((user) => {
        console.log(user);
    return user.userName
    })
    .then((username) => {console.log(username)})
    .catch(function(error){
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))

    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error){
            resolve({username: "js", password:"123"})
            }
            else{
                reject('ERROR: Something went wrong')
            }
        }, 1000)
    
    })

    async function consumePromiseFive(){
        try{
        const response = await promiseFive
        console.log(response);
        } catch(error){
        console.log(error);
        }
    }

    consumePromiseFive()

    // async function getAllUsers(){ // async wait for funct to work then gives error if any
    //     try{
    //     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    //     //console.log(response)
    //     const data = await(response.json());
    //     console.log(data)
    //     }
    //     catch(error){
    //         console.log("E:", error)
    //     }
    // }

    // getAllUsers()

    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
       return response.json()
    })
    .then((data) => {console.log(data)})
    .catch((error) => console.log(error))