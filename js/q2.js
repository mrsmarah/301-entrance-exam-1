// Write a function that will print out the following pattern in the console

// *
// **
// ***
// ****
// *****
// Please note your solution should be dynamic and not hardcoded using console logs 
// ( Do NOT use five console logs in order to solve it )

function printingStars(){
    var container = document.getElementById('renderStars');
    var ulEl =document.createElement('ul');
    container.appendChild(ulEl);
    for (var i=0 ; i<starsArr.length ; i++){
        var liEl =document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${starsArr[i]}`;
        console.log(liEl.textContent);
    }
    
}
var starsArr=["*","**","***","****","*****"] ;
printingStars();


