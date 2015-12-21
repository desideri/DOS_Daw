function iniciarSesion(){
    var btnSign = document.getElementById("btnSignIN");
    btnSign.setAttribute("data-toggle", "modal");
    btnSign.setAttribute("data-target", "#ejemMod");
}

function validacionCampos(){        
    if(nuName.getAttribute("placeholder") == "Username" || nuName.getAttribute("placeholder") == "" ){
        nuName.setAttribute("placeholder","Write a username");
        nuName.setAttribute("color",red);
    }
    if(nuemail.getAttribute("placeholder")="email" || nuemail.getAttribute("placeholder")=""){
        nuemail.setAttribute("placeholder","Write a username");
        nuemail.setAttribute("color",red);
    }
    if(nuPassword.getAttribute("placeholder")="New Password" || nuPassword.getAttribute("placeholder")=""){
        nuPassword.setAttribute("placeholder","Write a username");
        nuPassword.setAttribute("color",red);
    }
    if(nuName.getAttribute("placeholder") !="" && nuemail.getAttribute("placeholder")!="" && nuPassword.getAttribute("placeholder")!=""){
        document.getElementById("myModal").setAttribute("data-dismiss",myModal);
        alert("Proceed to log in")
    }
}
window.addEventListener("load", validacionCampos, false);