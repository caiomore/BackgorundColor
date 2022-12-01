function transitions() {
    document.getElementById("fundo").style.transition = "all 2s";
} 

function fundoVerde(button) {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#008000'
    return transitions()
}

function fundoAzul() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#0000ff'
    return transitions()
}

function fundoAmarelo() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#ffff00'
    return transitions()
}

function fundoPreto() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#000000'
    return transitions()
}

function fundoVermelho() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#ff0000'
    return transitions()
}