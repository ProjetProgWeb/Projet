function Joueur(firstName, lastName, pseudo) {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.pseudo= pseudo; 
    this.lcdp = ""; 
    this.st = ""; 
    this.minion = ""; 
}

let joueurs = []; 

function Ajouter() {
    var pnm = document.getElementById("prenom").value; 
    var nm = document.getElementById("nom").value;
    var ps = document.getElementById("psd").value; 

    const joueur = new Joueur(pnm, nm, ps); 
  
    joueurs.push(joueur); 

    const tblPers = document.getElementById("tab_j"); 
    const persRaw = document.createElement("TR"); 
    const nameCell = document.createElement("TD"); 
    const lcdpCell = document.createElement("TD"); 
    const stCell = document.createElement("TD"); 
    const minionCell = document.createElement("TD"); 
    nameCell.innerText = joueur.pseudo; 
    lcdpCell.innerText = joueur.lcdp; 
    stCell.innerText = joueur.st; 
    minionCell.innerText = joueur.minion; 

    const removeCell = document.createElement("TD"); 
    const removeButton = document.createElement("BUTTON"); 

    removeButton.innerText = "Supprimer"; 
    removeButton.addEventListener("click", removePerson); 

    removeCell.appendChild(removeButton); 
    persRaw.appendChild(nameCell); 
    persRaw.appendChild(lcdpCell);
    persRaw.appendChild(stCell);
    persRaw.appendChild(minionCell);
    persRaw.appendChild(removeCell); 
    tblPers.appendChild(persRaw); 
}

function removePerson(mouseEvent) {
    mouseEvent.target.parentElement.parentElement.remove(); 
}

