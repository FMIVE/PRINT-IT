
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let depart = 0;//point de réfèrence compteur

    const bannerImg = document.querySelector('.banner-img');// selectionne la cible du carousel.
	const tagLine = document.querySelector('#banner p');       //selectionne le "texte p" de la bannière.
    const dots = Array.from(document.querySelectorAll('.dot'));// selectionne tous les points.
    const arrowright = document.querySelector('.arrow_right');//selectionne la fleche droite.

arrowright.addEventListener('click', () => {
    depart = (depart + 1) % slides.length; //Capture le clic de la fleche droite et passe à l'image suivante.
    carousel();                                                
});       

// une AUTRE Façon d'écrire la même chose que la fleche droite. (pas de CONST) ici la fleche n'est pas déclarée au préalable.
document.querySelector('.arrow_left').addEventListener('click', () => {
    depart = (depart - 1 + slides.length) % slides.length;//capture le clic de gauche et passe à l'image précédente.
   carousel();  
});

// Capture une action sur les points (indicateurs de pagination)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        depart = index;
       carousel();
    });
});

//function: récupère l'image du tableau. Donne le chemin pour l'image.
// Donne le bon texte depuis le tableau.
function carousel() {
   const slide = slides[depart];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;//interpolation, backticks `` et ${} pour générer du html avec .innerHTML.
    tagLine.innerHTML = slide.tagLine;

    // Donne le bon "point,dot". Parcours les éléments "dot" pour changer la classe (.classList) "dot.selected".
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === depart) {
            dot.classList.add('dot_selected');
        }
    });
}












