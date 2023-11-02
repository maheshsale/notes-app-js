let notesDiv = document.querySelector(".notes");

function createNote(){
      // Create a new p tag
      let note = document.createElement("p");
      note.setAttribute("contenteditable", "true");
      let img = document.createElement("img");
      img.src = "./images/delete.png"

      img.addEventListener("click", function(event){
            if(confirm("Confirm to delete the note")){
                  event.target.parentElement.remove();
            }
      });

      note.appendChild(img);
      notesDiv.appendChild(note);
}