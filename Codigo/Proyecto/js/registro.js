function iniciarSesion(){
    var btnSign = document.getElementById("btnSignIN");
    btnSign.setAttribute("data-toggle", "modal");
    btnSign.setAttribute("data-target", "#ejemMod");
}
window.addEventListener("load", iniciarSesion, false);