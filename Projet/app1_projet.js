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


function ResST() {
    var Res = {E:0, H:0, S:0, D:0};
    var questions = [document.querySelector("input[name='st_1']:checked").value,
    document.querySelector("input[name='st_2']:checked").value, 
    document.querySelector("input[name='st_3']:checked").value,
    document.querySelector("input[name='st_4']:checked").value,
    document.querySelector("input[name='st_5']:checked").value,
    document.querySelector("input[name='st_6']:checked").value,
    document.querySelector("input[name='st_7']:checked").value,
    document.querySelector("input[name='st_8']:checked").value]
    for (var i=0; i<questions.length; i++) { 
        if (i==1 || i==6) {
            switch(questions[i]) {
                case 'eleven' : 
                    Res.E++; 
                    break; 
                default :
                    Res.H++; 
                    Res.S++; 
                    Res.D++; 
            } 
        }
        else if(i==5) {
            switch(questions[i]) {
                case 'hopper' : 
                    Res.H++;
                    Res.S++; 
                    break; 
                default :
                    Res.E++; 
                    Res.D++; 
            } 
        }
        else {
            switch(questions[i]) {
                case 'eleven' : 
                    Res.E++; 
                    break; 
                case 'hopper' : 
                    Res.H++; 
                    break; 
                case 'steve' : 
                    Res.S++; 
                    break; 
                default : 
                    Res.D++;
            }
        }
    }
    
    var max = 0
    var pers; 
    for (let i in Res) {
        if (Res[i]>max){
            max=Res[i]; 
            pers = i; 
        }
    }
    if (pers=='E') {
        alert('Eleven'); 
    }
    else if (pers=='H') {
        alert('Jim Hopper'); 
    }
    else if (pers=='D') {
        alert('Dustin Henderson'); 
    }
    else {
        alert('Steve Harrington'); 
    }
}

function ResLCDP() {
    var Res = {T:0, P:0, H:0, B:0};
    var questions = [document.querySelector("input[name='lcdp_1']:checked").value,
    document.querySelector("input[name='lcdp_2']:checked").value, 
    document.querySelector("input[name='lcdp_3']:checked").value,
    document.querySelector("input[name='lcdp_4']:checked").value,
    document.querySelector("input[name='lcdp_5']:checked").value,
    document.querySelector("input[name='lcdp_6']:checked").value,
    document.querySelector("input[name='lcdp_7']:checked").value]
    for (var i=0; i<questions.length; i++) { 
        switch(questions[i]) {
            case 'professeur' : 
                Res.P++; 
                break; 
            case 'tokyo' : 
                Res.T++; 
                break; 
            case 'helsinki' : 
                Res.H++; 
                break; 
            default : 
                Res.B++;
            }
    }
    
    var max = 0
    var pers; 
    for (let i in Res) {
        if (Res[i]>max){
            max=Res[i]; 
            pers = i; 
        }
    }
    var image;
    if (pers=='T') {
        alert('Tokyo'); 
    }
    else if (pers=='P') {
        alert('Le professeur'); 
    }
    else if (pers=='H') {
        alert('Helsinki'); 
    }
    else {
        alert('Berlin'); 
    }
}

function ResMini() {
    var Res = {B:0, S:0, K:0};
    var questions = [document.querySelector("input[name='min_1']:checked").value,
    document.querySelector("input[name='min_2']:checked").value, 
    document.querySelector("input[name='min_3']:checked").value,
    document.querySelector("input[name='min_4']:checked").value,
    document.querySelector("input[name='min_5']:checked").value,
    document.querySelector("input[name='min_6']:checked").value]
    for (var i=0; i<questions.length; i++) { 
        switch(questions[i]) {
            case 'bob' : 
                Res.B++; 
                break; 
            case 'stuart' : 
                Res.S++; 
                break; 
            default : 
                Res.K++; 
            }
    }
    
    var max = 0
    var pers; 
    for (let i in Res) {
        if (Res[i]>max){
            max=Res[i]; 
            pers = i; 
        }
    }
    if (pers=='B') {
        alert('Bob'); 
    }
    else if (pers=='S') {
        alert('Stuart'); 
    }
    else {
        alert('Kevin'); 
    }
}
