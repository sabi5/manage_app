function display(){

document.getElementById("demo").innerHTML= "<ul><li><input type='checkbox'></li></ul>" + document.getElementById("add").value + " " + '<input type="text" name="answer" id="input">'
+ "<input type='button'  class='btn btn-primary mb-2' id='btn' value='Edit'>" + " " +"<input type='button' class='btn btn-warning mb-2' value='Delete'>";

// document.task.answer.value=document.task.addtask.value;
var value=document.getElementById("add").value;
}


    // console.log(value);
    // document.getElementById("input").innerHTML=document.getElementById("demo").value;

function edit(){
    var p = document.getElementById('demo');
    var btn = document.getElementById('btn');
    var txt = document.getElementById('add');

    p.textContent = txt.value;

// var p = document.getElementById('demo');
// var btn = document.getElementById('btn');
// var txt = document.getElementById('add');
// btn.onclick = function(){
// p.textContent = txt.value;
}
