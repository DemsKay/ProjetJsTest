let UserInput = document.getElementById('UserInputHTML')
let myTab = ['Une ligne', 'Autre chose...']


function AddText() {    
    if (UserInput.value!=='') {
        document.querySelector('#AddingList p').innerText += UserInput.value+'\n';
        UserInput.value=''
        UserInput.focus()
    }
    else {
        alert('Veuillez entrer du texte')
    }
}
// Ce code va Utiliser la donnée entrée par l'utilisateur dans le input, puis l'insérer dans un 'p' identifié comme ""p"".
// 5-6 : Permet d'abord de supprimer la valeur de l'input après avoir validé, puis de mettre le curseur sur la case.``
// Si l'utilisateur valide sans avoir entré de valeurs, un message d'erreur apparaît.

function ShowArray() {
    for(let i=0; i<myTab.length; i++){
        document.querySelector('#myArray p').innerText += myTab[i]+'\n';
    }
}

function PushToArray() {
    myTab.push(UserInput.value);
    ShowArray()
}

function PopToArray() {

}