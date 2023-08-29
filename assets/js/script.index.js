class Pet{
    constructor(tutor, name, specie, date, age, img ){
        this.tutor = tutor
        this.name = name
        this.specie = specie
        this.date = date
        this.age = age
        this.img = img

    }
}
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
    const pet = new Pet(tutor, nomePet, especie, dateinPTBR(data), calculateAge(data), imgLink)
    listPet.addPet(pet)
}

const listPet = new PetList();
function sendMsg(msg, typeMsg) {


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

function calculateAge(age){
    let petBirthdate = age
    let date = new Date(petBirthdate);
    var monthDiff = Date.now() - date.getTime();
    var ageDiff = new Date( monthDiff);

    var year = ageDiff.getUTCFullYear();
    
    var cal = Math.abs(year - 1970);
    return cal;
}

function dateinPTBR(birthdate) {
    let dateArray = birthdate.split("-");
    let dateReversed = dateArray.reverse();
    let dateFormated = dateReversed.join("/");
    
    return dateFormated;
}

function displayPet(){
    console.log(this.petList)
}