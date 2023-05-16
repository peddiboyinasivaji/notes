const notesContainer=document.querySelector(".notes-containner");
const creatBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

creatBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="./delete-button-png-delete-button-128.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();W
    }
})