//formchecking const form = document.querySelector('#frmOrder'); const inpEmail = form.querySelector('#inpEmail'); const selectMaat = form.querySelector('#selMeasure'); const msgEmail = form.querySelector('#msgEmail'); const msgSelect = form.querySelector('#msgMeasure'); const overzichtBestelling = document.querySelector('#lblMessage'); //afbeelding const imgLinks = document.querySelectorAll('#model a') const figShoe = document.querySelector('#figShoe'); const imgShoe = figShoe.querySelector('img'); const captShoe = figShoe.querySelector('span'); //checkboxen const accessoire = document.querySelectorAll('#accessoires input');   let prijs = 54.99; let naam = ' '; imgLinks.forEach(lnk => {     lnk.addEventListener('click', function (e) {         e.preventDefault();         document.querySelector('#model .selected').classList.remove('selected');         lnk.classList.add('selected');         imgShoe.src = lnk.href;         captShoe.innerHTML = lnk.textContent;      }); }); form.setAttribute('novalidate', 'novalidate');  fo
//formchecking
const form = document.querySelector('#frmOrder');
const inpEmail = form.querySelector('#inpEmail');
const selectMaat = form.querySelector('#selMeasure');
const msgEmail = form.querySelector('#msgEmail');
const msgSelect = form.querySelector('#msgMeasure');
const overzichtBestelling = document.querySelector('#lblMessage');
//afbeelding
const imgLinks = document.querySelectorAll('#model a')
const figShoe = document.querySelector('#figShoe');
const imgShoe = figShoe.querySelector('img');
const captShoe = figShoe.querySelector('span');
//checkboxen
const accessoire = document.querySelectorAll('#accessoires input');


let prijs = 54.99;
let naam = ' ';
imgLinks.forEach(lnk => {
    lnk.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#model .selected').classList.remove('selected');
        lnk.classList.add('selected');
        imgShoe.src = lnk.href;
        captShoe.innerHTML = lnk.textContent;

    });
});
form.setAttribute('novalidate', 'novalidate');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let numErrors = 0;

    msgEmail.innerHTML = '';
    msgSelect.innerHTML = '';


    if (inpEmail.value == '') {
        msgEmail.innerHTML = 'email mag niet leeg zijn';
        numErrors++;
    }

    if (selectMaat.value == '') {
        msgSelect.innerHTML = 'selecteer je maat';
        numErrors++;
    }

    if (numErrors == 0) {
        overzichtBestelling.innerHTML = Je keuze: ${captShoe.innerHTML} maat: ${selectMaat.value}, ${naam}, (totaalprijs: €${Math.round(prijs * 100) / 100});
    }

});