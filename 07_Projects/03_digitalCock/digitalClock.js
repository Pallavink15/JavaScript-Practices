const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


 setInterval(function(){
    let date = new date
// console.log(date.toLocalTimeString());
clock.innerHTML = date.toLocalTimeString();
 },1000)