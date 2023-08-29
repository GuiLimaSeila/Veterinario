class Pet {
    constructor(tutor, name, specie, date, img) {
        this.tutor = tutor
        this.name = name
        this.specie = specie
        this.date = date
        this.img = img
        this.age = this.calculateAge()

    }
    calculateAge() {
        let petBirthdate = this.date
        let date = new Date(petBirthdate);
        var monthDiff = Date.now() - date.getTime();
        var ageDiff = new Date(monthDiff);

        var year = ageDiff.getUTCFullYear();

        var cal = Math.abs(year - 1970);
        return cal;
    }
}
class PetList {
    constructor() {
        this.petList = [];
    }
    addPet(pet) {

        if (getInputs()) {
            sendMsg("Preencha todos os campos", "error")
        } else if (!isURLValida()) {
            sendMsg("Imagen esta com formato errado", "error")
        } else {
            sendMsg("Pet cadastrado 🐕🐈", "succes")
            this.petList.push(pet)
            displayPet()
            cleanInputs()
        }
    }
}

function cleanInputs() {
    tutor = document.getElementById("input-tutor").value = "";
    nomePet = document.getElementById("input-namePet").value = "";
    especie = document.getElementById("input-species").value = "";
    imgLink = document.getElementById("input-image").value = "";
    data = document.getElementById("input-date").value = "";
}

function getInputs() {
    let tutor = document.getElementById("input-tutor").value
    let nomePet = document.getElementById("input-namePet").value
    let especie = document.getElementById("input-species").value
    let imgLink = document.getElementById("input-image").value
    let data = document.getElementById("input-date").value

    if (tutor == '' || nomePet == '' || especie == '' || imgLink == '' || data == '') {
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
    const pet = new Pet(tutor, nomePet, especie, dateinPTBR(data), imgLink)
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
    if (imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function displayPet() {
    let showPet = "";

    listPet.petList.forEach((pet) => {
        showPet += `
        <div class="pet-container">
        <p>Tutor: ${pet.tutor}</p>
            <p>Nome: ${pet.name}</p>
            <p>Espécie: ${pet.specie}</p>
            <p>Data de Nascimento: ${pet.date}</p>
            <p>Idade: ${pet.age}</p>
            <img src="${pet.img}" alt="${pet.name}">
        </div>
    </div>
            `;
    });

    document.getElementById("pet-area").innerHTML = showPet;
}

function dateinPTBR(birthdate) {
    let dateArray = birthdate.split("-");
    let dateReversed = dateArray.reverse();
    let dateFormated = dateReversed.join("/");

    return dateFormated;
}

function showRegisterArea() {
    document.getElementById("pet-area").classList.add("hidden");
    document.getElementById("postPet").classList.remove("hidden");
}

function showPets() {
    if (listPet.petList.length < 1) {
        sendMsg("Adicione um Pet primeiro.", "error")
    } else {
        document.getElementById("pet-area").classList.remove("hidden");
        document.getElementById("postPet").classList.add("hidden");

    }


}