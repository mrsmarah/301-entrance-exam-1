'use strict';

var tasks=[];

var Task =function(name,date){
this.name = name;
this.date = date;
tasks.push(this);
};

// console.log('hii');

var eventOne = document.getElementById("formData");
eventOne.addEventListener('click', clickbtn);

function clickbtn(e){
    // console.log('hii');

    e.preventDefault();
    // console.log('hii');
    if ((document.getElementById("taskInput").value !== '') && (document.getElementById("dateInput").value !== '')){
        console.log('hi');
        new Task(document.getElementById("taskInput").value ,document.getElementById("dateInput").value );
        render();
    }
    console.log(tasks);
            // render();
            setItem();
}
function setItem(){
    var objStorage = JSON.stringify(tasks);
    localStorage.setItem('objStorage',objStorage);
}
function getItem(){
    var objStorage = localStorage.getItem('objStorage');
    if (objStorage){
        tasks = JSON.parse(objStorage);
        // render();
    }
}
getItem();

function render(){
var container = document.getElementById("list");
var ulEL = document.createElement('ul');
// ulEl.textContent='';
container.appendChild(ulEL);
for(var i=0; i<tasks.length ; i++){
    var liEl = document.createElement('li');
    ulEL.appendChild(liEl);
    liEl.textContent=`${tasks[i].name}`
}
}
// render();