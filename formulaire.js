/**
 * Author: Jeremi Savard
 * Date: September 27, 2023
 * Description: Cette page de dons pour le premier projet.
 */

/*NAVIGATION*/

const fieldset1 = document.getElementById('premiereSection');
const fieldset2 = document.getElementById('deuxiemeSection');
const fieldset3 = document.getElementById('troisiemeSection');
const fieldset4 = document.getElementById('quatriemeSection');


const boutonUnique = document.getElementById('suivant1');
const boutonReccurent = document.getElementById('suivant2');
const boutonSpecial = document.getElementById('suivant3');
const premierBoutonSuivant = document.getElementById('suivant4');
const deuxiemeBoutonSuivant = document.getElementById('suivant5');
const btnPrecedentGros1 = document.getElementById('boutonPrecedent_gros1');
const btnPrecedentGros2 = document.getElementById('boutonPrecedent_gros2');
const btnPrecedentGros3 = document.getElementById('boutonPrecedent_gros3');


const btnPrecedent1 = document.getElementById('precedent1');
const btnPrecedent2 = document.getElementById('precedent2');

const stepEtape1 = document.getElementById('stepEtape1');
const stepEtape2 = document.getElementById('stepEtape2');
const stepEtape3 = document.getElementById('stepEtape3');
const stepEtape4 = document.getElementById('stepEtape4');



// Add click event listeners to the buttons
boutonUnique.addEventListener('click', () => {
    fieldset2.classList.remove('hidden');
    fieldset1.classList.add('hidden');
    btnPrecedentGros1.classList.remove('hidden');
    stepEtape1.src = 'images/10x/1-plein.png';
});
boutonReccurent.addEventListener('click', () => {
    fieldset2.classList.remove('hidden');
    fieldset1.classList.add('hidden');
    btnPrecedentGros1.classList.remove('hidden');
    stepEtape1.src = 'images/10x/1-plein.png';

});
boutonSpecial.addEventListener('click', () => {
    fieldset2.classList.remove('hidden');
    fieldset1.classList.add('hidden');
    btnPrecedentGros1.classList.remove('hidden');
    stepEtape1.src = 'images/10x/1-plein.png';

});
premierBoutonSuivant.addEventListener('click', () => {
    fieldset3.classList.remove('hidden');
    fieldset2.classList.add('hidden');
    btnPrecedentGros2.classList.remove('hidden');
    btnPrecedentGros1.classList.add('hidden');
    stepEtape2.src = 'images/10x/2-plein.png';

});
deuxiemeBoutonSuivant.addEventListener('click', () => {
    fieldset4.classList.remove('hidden');
    fieldset3.classList.add('hidden');
    btnPrecedentGros3.classList.remove('hidden');
    btnPrecedentGros2.classList.add('hidden');
    stepEtape3.src = 'images/10x/3-plein.png';
    stepEtape4.src = 'images/10x/4-plein.png';

});
btnPrecedent1.addEventListener('click', ()=>{
    fieldset1.classList.remove('hidden');
    fieldset2.classList.add('hidden');
    stepEtape1.src = 'images/10x/1-vide.png';
})
btnPrecedent2.addEventListener('click', ()=>{
    fieldset2.classList.remove('hidden');
    fieldset3.classList.add('hidden');
    stepEtape2.src = 'images/10x/2-vide.png';

})
btnPrecedentGros1.addEventListener('click', ()=>{
    fieldset1.classList.remove('hidden');
    fieldset2.classList.add('hidden');
    btnPrecedentGros1.classList.add('hidden');
    stepEtape1.src = 'images/10x/1-vide.png';

})
btnPrecedentGros2.addEventListener('click', ()=>{
    fieldset2.classList.remove('hidden');
    fieldset3.classList.add('hidden');
    btnPrecedentGros2.classList.add('hidden');
    btnPrecedentGros1.classList.remove('hidden');
    stepEtape2.src = 'images/10x/2-vide.png';

})
btnPrecedentGros3.addEventListener('click', ()=>{
    fieldset3.classList.remove('hidden');
    fieldset4.classList.add('hidden');
    btnPrecedentGros3.classList.add('hidden');
    btnPrecedentGros2.classList.remove('hidden');
    stepEtape3.src = 'images/10x/3-vide.png';
    stepEtape4.src = 'images/10x/4-vide.png';


})

const nomInput = document.getElementById('nom');
const erreurNomComplet = document.getElementById('erreurNomComplet');
const telephoneInput = document.getElementById('telephone');
const erreurNumTel = document.getElementById('erreurNumTel');
const dateNaissanceInput = document.getElementById('date_naissance');
const erreurDateNaissance = document.getElementById('erreurDateNaissance');
const emailInput = document.getElementById('email');
const erreurMail = document.getElementById('erreurMail');

document.querySelector('form').addEventListener('submit', function (event) {
    let isValid = true;

    if (!nomInput.checkValidity()) {
        erreurNomComplet.textContent = 'Veuillez entrer un nom valide.';
        isValid = false;
    } else {
        erreurNomComplet.textContent = '';
    }

    if (!telephoneInput.checkValidity()) {
        erreurNumTel.textContent = 'Veuillez entrer un numéro de téléphone valide.';
        isValid = false;
    } else {
        erreurNumTel.textContent = '';
    }

    if (!dateNaissanceInput.checkValidity()) {
        erreurDateNaissance.textContent = 'Veuillez entrer une date de naissance valide.';
        isValid = false;
    } else {
        erreurDateNaissance.textContent = '';
    }

    if (!emailInput.checkValidity()) {
        erreurMail.textContent = 'Veuillez entrer une adresse courriel valide.';
        isValid = false;
    } else {
        erreurMail.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
