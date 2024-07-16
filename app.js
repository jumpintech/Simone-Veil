var prenom = prompt("Comment tu t'appelles ?");

var titre = document.getElementById('titre');

titre.innerText = "Bonjour " + prenom;

 

if(prenom == "Chloéline"){

alert("Comme moi !");

titre.style.color = "#008000";

}else{

titre.style.color = "#FF0000";

}
