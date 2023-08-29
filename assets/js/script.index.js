class Pet{}

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

function isURLValida() {
    let imgLink = document.getElementById("input-image").value
    if(imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}