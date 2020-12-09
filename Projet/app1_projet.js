function Joueur(firstName, lastName, pseudo) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pseudo = pseudo;
    this.lcdp = "";
    this.st = "";
    this.minion = "";
}

let joueurs = [];
let pseudos = [];

function Ajouter() {
    var pnm = document.getElementById("prenom").value;
    var nm = document.getElementById("nom").value;
    var ps = document.getElementById("psd").value;

    let joueur = new Joueur(pnm, nm, ps);

    var present = false;
    for (var i = 0; i < joueurs.length; i++) {
        if (joueur.pseudo == joueurs[i].pseudo) {
            present = true;
            break;
        }
    }
    if (present) {
        alert('Ce pseudo existe déjà. Veuillez en entrer un autre.');
    }
    else {
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

        const rLcdp = (joueur.pseudo).concat('_', 'lcdp');
        const rSt = (joueur.pseudo).concat('_', 'st');
        const rMin = (joueur.pseudo).concat('_', 'mini');

        lcdpCell.setAttribute("id", rLcdp);
        stCell.setAttribute("id", rSt);
        minionCell.setAttribute("id", rMin);

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
}


function removePerson(mouseEvent) {
    var ps = mouseEvent.target.parentElement.parentElement.firstChild.innerText;
    var index;
    for (var i = 0; i < joueurs.length; i++) {
        if (joueurs[i].pseudo == ps) {
            index = i;
            break;
        }
    }
    joueurs.splice(index, 1);
    console.log(joueurs);
    mouseEvent.target.parentElement.parentElement.remove();
}


function ResST() {
    var Res = { E: 0, H: 0, S: 0, D: 0 };
    try {
        var questions = [document.querySelector("input[name='st_1']:checked").value,
        document.querySelector("input[name='st_2']:checked").value,
        document.querySelector("input[name='st_3']:checked").value,
        document.querySelector("input[name='st_4']:checked").value,
        document.querySelector("input[name='st_5']:checked").value,
        document.querySelector("input[name='st_6']:checked").value,
        document.querySelector("input[name='st_7']:checked").value,
        document.querySelector("input[name='st_8']:checked").value]
    }
    catch (err) {
        alert("Toutes les réponses n'ont pas été cochées.");
    }
    for (var i = 0; i < questions.length; i++) {
        if (i == 1 || i == 6) {
            switch (questions[i]) {
                case 'eleven':
                    Res.E++;
                    break;
                default:
                    Res.H++;
                    Res.S++;
                    Res.D++;
            }
        }
        else if (i == 5) {
            switch (questions[i]) {
                case 'hopper':
                    Res.H++;
                    Res.S++;
                    break;
                default:
                    Res.E++;
                    Res.D++;
            }
        }
        else {
            switch (questions[i]) {
                case 'eleven':
                    Res.E++;
                    break;
                case 'hopper':
                    Res.H++;
                    break;
                case 'steve':
                    Res.S++;
                    break;
                default:
                    Res.D++;
            }
        }
    }

    var max = 0
    var pers;
    for (let i in Res) {
        if (Res[i] > max) {
            max = Res[i];
            pers = i;
        }
    }
    let perso;
    if (pers == 'E') {
        perso = 'Eleven';
    }
    else if (pers == 'H') {
        perso = 'Jim Hopper';
    }
    else if (pers == 'D') {
        perso = 'Dustin Henderson';
    }
    else {
        perso = 'Steve Harrington';
    }

    let ps = prompt('Veuillez entrer votre pseudo :');

    let present = false;
    for (let i = 0; i < joueurs.length; i++) {
        if (ps == joueurs[i].pseudo) {
            present = true;
            break;
        }
    }

    const ID = (ps).concat('_', 'st');
    const caseRes = document.getElementById(ID);

    if (!present) {
        alert('Ce pseudo n\'est pas valide');
    }
    else {
        caseRes.innerText = perso;
    }
}

function ResLCDP() {
    var Res = { T: 0, P: 0, H: 0, B: 0 };
    try {
        var questions = [document.querySelector("input[name='lcdp_1']:checked").value,
        document.querySelector("input[name='lcdp_2']:checked").value,
        document.querySelector("input[name='lcdp_3']:checked").value,
        document.querySelector("input[name='lcdp_4']:checked").value,
        document.querySelector("input[name='lcdp_5']:checked").value,
        document.querySelector("input[name='lcdp_6']:checked").value,
        document.querySelector("input[name='lcdp_7']:checked").value]
    }
    catch (err) {
        alert("Toutes les réponses n'ont pas été cochées.");
    }
    for (var i = 0; i < questions.length; i++) {
        switch (questions[i]) {
            case 'professeur':
                Res.P++;
                break;
            case 'tokyo':
                Res.T++;
                break;
            case 'helsinki':
                Res.H++;
                break;
            default:
                Res.B++;
        }
    }

    let max = 0
    let pers;
    for (let i in Res) {
        if (Res[i] > max) {
            max = Res[i];
            pers = i;
        }
    }

    let perso;

    const paragraphe = document.createElement('h3'); 
    const affich = document.getElementById("pLcdp");
    if (pers == 'T') {
        perso = 'Tokyo';  
        paragraphe.innerText = "Tokyo"; 
    }
    else if (pers == 'P') {
        perso = 'Le professeur';
        paragraphe.innerText = "Le professeur"; 
    }
    else if (pers == 'H') {
        perso = 'Helsinki';
        paragraphe.innerText = "Helsinki"; 
    }
    else {
        perso = 'Berlin';
        paragraphe.innerText = "Berlin"; 
    }
    affich.appendChild(paragraphe);

    let ps = prompt('Veuillez entrer votre pseudo :');

    let present = false;
    for (let i = 0; i < joueurs.length; i++) {
        if (ps == joueurs[i].pseudo) {
            present = true;
            break;
        }
    }

    const ID = (ps).concat('_', 'lcdp');
    const caseRes = document.getElementById(ID);

    if (!present) {
        alert('Ce pseudo n\'est pas valide');
    }
    else {
        caseRes.innerText = perso;
    }
}

function ResMini() {
    let Res = { B: 0, S: 0, K: 0 };
    try {
        let questions = [document.querySelector("input[name='min_1']:checked").value,
        document.querySelector("input[name='min_2']:checked").value,
        document.querySelector("input[name='min_3']:checked").value,
        document.querySelector("input[name='min_4']:checked").value,
        document.querySelector("input[name='min_5']:checked").value,
        document.querySelector("input[name='min_6']:checked").value]
    }
    catch (err) {
        alert("Toutes les réponses n'ont pas été cochées.");
    }
    for (let i = 0; i < questions.length; i++) {
        switch (questions[i]) {
            case 'bob':
                Res.B++;
                break;
            case 'stuart':
                Res.S++;
                break;
            default:
                Res.K++;
        }
    }

    let max = 0
    let pers;
    for (let i in Res) {
        if (Res[i] > max) {
            max = Res[i];
            pers = i;
        }
    }
    let perso;
    if (pers == 'B') {
        perso = 'Bob';
    }
    else if (pers == 'S') {
        perso = 'Stuart';
    }
    else {
        perso = 'Kevin';
    }

    let ps = prompt('Veuillez entrer votre pseudo :');

    let present = false;
    for (let i = 0; i < joueurs.length; i++) {
        if (ps == joueurs[i].pseudo) {
            present = true;
            break;
        }
    }

    const ID = (ps).concat('_', 'mini');
    const caseRes = document.getElementById(ID);

    if (!present) {
        alert('Ce pseudo n\'est pas valide');
    }
    else {
        caseRes.innerText = perso;
    }
}
