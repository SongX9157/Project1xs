function menuview(evt,gamename){
    var i, content, menu12;
    content=document.getElementsByClassName("content");
    for(i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    menu12=document.getElementsByClassName("menu12");
    for(i=0;i<menu12.length;i++){
        menu12[i].className = menu12[i].className.replace(" active", "");
    }
    document.getElementById(gamename).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("showfirst").click();

var imgs=["images//1.jpg","images//2.jpg","images//3.jpg","images//4.jpg"];
var links=["https://www.zelda.com/","https://store.steampowered.com/agecheck/app/374320/#","http://www.monsterhunterworld.com/us/","https://www.sekirothegame.com/"];
var i=0,j=0;
function pre(){
    var show=document.getElementById("showpic");
    var link=document.getElementById("link1");
    removeclass();
    setTimeout(function(){
        addclass();
    }, 1500);
    i=i-1;
    if(i<0){
        i=3;
    }
    show.src=imgs[i];
    link.href=links[i];
}
function next(){
    var show=document.getElementById("showpic");
    var link=document.getElementById("link1");
    removeclass();
    setTimeout(function(){
        addclass();
    }, 1500);

    i=i+1;
    if(i>=4){
        i=0;
    }
    show.src=imgs[i];
    link.href=links[i];    
}
window.setInterval(next,6000);

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
     document.getElementById("overlay").style.display = "none";
}
function show(){
    document.getElementById("showpic").style.display="block";
}
window.onload=on;

function addclass() {
    var element = document.getElementById("showpic");
    element.classList.remove("effect");
}

function removeclass() {
    var element = document.getElementById("showpic");
    element.classList.add("effect");
}
/*function addClass(current,newclass) {
    var oldClass = current.className;
    var blank = oldClass != ''?' ':'';
    var newClass = oldClass + blank + newclass;
    current.className = newClass;    
}

function removeClass(current,newclass) {
    var classNames = current.className.split(/\s+/);
    current.className = classNames.filter(function(item){
        return item !== newclass;
    }).join(' ');
}
var new1 = document.getElementById('showpic');
*/

