//****************************  LOOP ORIGINAL PROPERTIES OF ARRAY *********************************************************************

const myNewArray = [1,2,3,4,5]

for(let v in myNewArray){
    if(myNewArray.hasOwnProperty(v)){
        console.log(v)
    }
}


//****************************  Implement custom foreach loop *********************************************************************

// Basic SDE 1 level 

Array.prototype.customForEachOne = function(callback){
    for(let i=0; i < this.length; i++){
        callback(this[i], i , this)
    }
}


//  SDE 2 level (with side checks, edge check)

Array.prototype.ForEachTwo = function(callback, thiscontext){
    if(typeof callback !== 'function'){
        throw `not a function`
    }

    const length = this.length

    let i=0; 
    while(i < length){
        if (this.hasOwnProperty(i)) {     // to access on its own prop
            callback.call(thiscontext, this[i], i, this)                 // cant directly run call back , we need to call it or bind
        }
        i++
    }
}