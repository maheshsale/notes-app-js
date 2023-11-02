function deleteNote(){

}

function createNote(){
      let notesDiv = document.querySelector(".notes");
      console.log(notesDiv)

      // Create a new p tag
      let note = document.createElement("p");
      note.setAttribute("contenteditable", "true");
      let img = document.createElement("img");
      img.src = "./images/delete.png"
      img.addEventListener("click", function(event){
            event.target.parentElement.remove();
      });
      note.appendChild(img);

      notesDiv.appendChild(note);

      console.log(note);
}