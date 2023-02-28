// constanten/formchecking
const frm = document.querySelector('#frmOrder');
const email = frm.querySelector('#inpEmail');
const scltMaat = frm.querySelector('#selMeasure');
const msgEmail = frm.querySelector('#msgEmail');
const msgMeasure = frm.querySelector('#msgMeasure');
const schoenFotos = document.querySelectorAll('#model href');
const figShoe = document.querySelector('#figShoe');
const fotoSchoen = figShoe.querySelector('img');
const figCaption = figShoe.querySelector('span');
const accessoire = document.querySelectorAll('#accessoires input');
const totaleBestelling = document.querySelector('#lblMessage');


let basisPrijs = 54.99;
let schoenNaam = ' ';
schoenFotos.forEach(lnk => {
    lnk.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#model .selected').classList.remove('selected');
        lnk.classList.add('selected');
        fotoSchoen.src = lnk.a;
        figCaption.innerHTML = lnk.textContent;
    });
});

// disable HTML5 validation
frm.setAttribute('novalidate', 'novalidate');

// halt form submissions and check form
frm.addEventListener('submit', function (e) {
    e.preventDefault();
    let numErrors = 0;

    // clear all messages
    msgEmail.innerHTML = '';
    msgMeasure.innerHTML = '';

    // email mag niet leeg zijn
    if (email.value == '') {
        msgEmail.innerHTML = 'email mag niet leeg zijn';
        numErrors++;
    }

    // dropdown mag niet leeg zijn
    if (scltMaat.value == '') {
        msgMeasure.innerHTML = 'selecteer je maat';
        numErrors++;
    }

    // output message
    accessoire.forEach(checkbox => {
        if (checkbox.checked) {
            basisPrijs = basisPrijs + checkbox.value;
            schoenNaam += ', ' + checkbox.name;
        }
    });

    if (numErrors == 0) {
        totaleBestelling.innerHTML = `Je keuze: ${figCaption.innerHTML}
        maat ${scltMaat.value} ${schoenNaam}, (totaalprijs: €${basisPrijs}`;
    }
});
