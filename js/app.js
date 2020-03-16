'use strict';

var tasks=[];

var Task =function(name,date){
this.name = name;
this.date = date;
tasks.push(this);
};

// console.log('hii');

var eventOne = document.getElementById("submit-btn");
eventOne.addEventListener('click', clickbtn);

function clickbtn(e){

    e.preventDefault();
    if ((document.getElementById("taskInput").value !== '') && (document.getElementById("dateInput").value !== '')){
        console.log('hi');
        new Task(document.getElementById("taskInput").value ,document.getElementById("dateInput").value );
    
    }
            setItem();
            render();

            document.getElementById("taskInput").value = '';
            document.getElementById("dateInput").value = '';
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

function render(){
    getItem();
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
