window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}
function init() {

    ID("kuld").addEventListener("click", validalas);

}
function validalas() {
    //  console.log("validáció");

    // legaláb 3 hosszu
    //nagy betüvel kezdödik
    //legyen benne szóköz
    var uzenet = "";
    var megadottAdatok = "";
    if (ID("nev").value.length < 3) {
        uzenet = "A név legalább 3 karakter hosszú legyen! <br>";
        ID("nev").style.border = "2px solid red";
    } else {
        ID("nev").style.border = "none";
    }
    var reg = /[A-z]+[a-z]{2,}/;
    if (!reg.test(ID("nev").value)) {
        uzenet += "A név nagybetüvel kell kezdögyön! <br>";
        ID("nev").style.border = "2px solid red";
    } else {
        ID("nev").style.border = "none";
        megadottAdatok += "Név:" + ID("nev").value + "<br>";
    }

//    console.log(uzenet);
//órai munka ismeg házi is

    var telefon = /[0-9]{2} [0-9]{3} [0-9]{4}/;
    if (!reg.test(ID("nev").value)) {
        uzenet += "Szélesgombal elválasztva legyen! <br>";
        ID("phone").style.border = "2px solid red";
    } else {
        ID("phone").style.border = "none";
        megadottAdatok += "Telefon: " + ID("phone").value + "<br>";

    }
    var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!reg.test(ID("email").value)) {
        uzenet += "Hiányzik a @ jel vagy a .com! <br>";
        ID("email").style.border = "2px solid red";
    } else {
        ID("email").style.border = "none";
        megadottAdatok += "Email: " + ID("email").value + "<br>";

    }
    var emilujra = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!reg.test(ID("emailujra").value)) {
        uzenet += "Hiányzik a @ jel vagy a .com! <br>";
        ID("emailujra").style.border = "2px solid red";
    } else {
        ID("emailujra").style.border = "none";

    }



    $("aside section:nth-child(1) p")[0].innerHTML = uzenet;
    $("aside section:nth-child(2) p")[0].innerHTML = megadottAdatok;



}
//Üzenet küldés
function sendMail() {

    var link = "mailto:tellad.adam@gmail.com"
            + "?cc=tellad.adam@gmail.com"
            + "&subject=" + encodeURIComponent("Üzenetem: ")
            + "&body=" + encodeURIComponent(ID('uzenet').value);
    window.location.href = link;

}



