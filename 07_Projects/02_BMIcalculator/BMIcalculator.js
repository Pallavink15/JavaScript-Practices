document.querySelector('form')

form.addEventListner('submit', function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const result  = parseInt(document.querySelector('#results'))

   if(height === '' || height < 0 || height || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
   } else if(weight === '' || weight < 0 || weight || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`}
    else {
        const bmi = (weight / ((height*weight)/1000).toFixed(2))
    }
    // to show the results
    result.innerHTML = `<span>${bmi}</span>`
})
