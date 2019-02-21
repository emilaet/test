//Funktion1 (erSynlig)
//Lyt om brugeren scroller
//document.addEventListener();


//Funktion2 (aktiverMultimedier)
//Når 50% er synligt så afspil, video/audio

//4
function erSynlig(elementId) {
    var elementBoks = document.getElementById(elementId).getBoundingClientRect();
    var halvtredsPct = elementBoks.height * 0.5;
    var start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}



//3
function aktiverMultimedier(elementIdListe, AVIdListe) {

    for (var i = 0; i < elementIdListe.length; i++) {

        if (erSynlig(elementIdListe[i])) {
            document.getElementById(AVIdListe[i]).play();
        } else {
            document.getElementById(AVIdListe[i]).pause();
        }
    }
}





document.getElementById("tilFelt2").addEventListener("click", function () {

    document.getElementById("felt2").scrollIntoView(true);

});

document.getElementById("tilFelt3").addEventListener("click", function () {

    document.getElementById("felt3").scrollIntoView(true);

});



//hovedprogramdel


//1
var elementIdListe = ["felt1", "felt2", "felt3", "video"];
var AVIdListe = ["sang1", "sang2", "sang3", "video"];

//2
window.addEventListener("scroll", function () {
    aktiverMultimedier(elementIdListe, AVIdListe);
});
