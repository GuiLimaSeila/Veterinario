class Pet{
    constructor(tutor, name, specie, img, date){
        this.tutor = tutor
        this.name = name
        this.specie = specie
        this.img = img
        this.date = date
    }
}

function getInputs() {
    let tutor = document.getElementById("input-tutor").value
    let nomePet = document.getElementById("input-namePet").value
    let especie = document.getElementById("input-species").value
    let imgLink = document.getElementById("input-image").value
    let data = document.getElementById("input-date").value

    if (tutor == '' || nomePet == '' || especie == '' ||  imgLink == '' || data == '') {
        return true;
    } else {
        return false;

    }
}

function petStatus() {
    let tutor = document.getElementById("input-tutor").value
    let nomePet = document.getElementById("input-namePet").value
    let especie = document.getElementById("input-species").value
    let imgLink = document.getElementById("input-image").value
    let data = document.getElementById("input-date").value
    const pet = new Pet(tutor, nomePet, especie, data, imgLink)
    listPet.addPet(pet)
}

const listPet = new PetList();
class PetList {
    constructor() {
        this.petList = [];
    }
    addPet(pet) {

        if (getInputs()) {
            sendMsg("Preencha todos os campos", "error")
        } else if(!isURLValida()) {
            sendMsg("Imagen esta com formato errado", "error")
        }else {
            sendMsg("Pet cadastrado 🐕🐈", "succes")
            this.petList.push(pet)
            render()
            cleanInput()
        }
    }
}

function sendMsg(msg, typeMsg) {
    //Essa função vai colocar uma mensagem na tela do usuario
    //usando tecnicas de html e js

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    const msgDisplay = `
<p class="${typeMsg}">${msg}</p>
`
    msgDiv.innerHTML = msgDisplay;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 4000);
}

function isURLValida() {
    let imgLink = document.getElementById("input-image").value
    if(imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}