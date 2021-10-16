document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})
function iniciarApp(){
    crearGaleria();
}
async function crearGaleria(){
    try {
      const resultado = await fetch('./baseDeDatos.json');
      const db = await resultado.json();
      const { discos } = db;
      
      discos.reverse();
      discos.forEach(disco => {
          const { name, autor, imageMin, imageFront, linkSpotify, linkYoutube } = disco;

          const nombreDisco = document.createElement('P');
          nombreDisco.textContent = `${name} `;
          nombreDisco.classList.add('disco-nombre', 'nombres');

          const imagenDisco = document.createElement ('IMG');
          imagenDisco.classList.add('imagendisco');
          imagenDisco.src = `${imageMin}`;  

          const autorDisco = document.createElement ('P');
          nombreDisco.classList.add('disco-autor');
          autorDisco.textContent = `${autor}`;
          
          
          const linkSpoti = document.createElement ('A');
          linkSpoti.href = `${linkSpotify}`;
          linkSpoti.target = '_blank'
        //   linkSpoti.textContent = 'Spotify'
          linkSpoti.classList.add('boton-galeria', 'boton-galeria__spotify', 'fab', 'fa-spotify')

          const linkYou = document.createElement ('A');
          linkYou.href = `${linkYoutube}`;
          linkYou.target = '_blank'
        //   linkYou.textContent = 'Youtube';
          linkYou.classList.add('boton-galeria','boton-galeria__youtube', 'fab', 'fa-youtube');
          
          
          const discoDiv = document.createElement('DIV');
          discoDiv.classList.add('discos-galeria');
          discoDiv.appendChild(nombreDisco);
          // discoDiv.appendChild(nombreAutorDisco)
          discoDiv.appendChild(imagenDisco);
          discoDiv.appendChild(autorDisco);
          discoDiv.appendChild(linkSpoti);
          discoDiv.appendChild(linkYou);
          
          document.querySelector('#discos').appendChild(discoDiv);

          
          
      });

    } catch (error) {
        console.log(error)
    }
}


const galeriaSlide = document.querySelector('.galeria-slide');
const galeriaImagenes = document.querySelectorAll('.galeria-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1
const size = galeriaImagenes[0].clientWidth ;


galeriaSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',() =>{
   if (counter >= galeriaImagenes.length - 1) return;
    galeriaSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    galeriaSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});
prevBtn.addEventListener('click',() =>{
    if (counter <= 0) return;
    galeriaSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    galeriaSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

galeriaSlide.addEventListener('trasitioned', () => {
    if (galeriaImagenes[counter].id === 'lastClone'){
        galeriaSlide.style.transition = "none";
        counter = galeriaImagenes.length - 2 ;
        galeriaSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if (galeriaImagenes[counter].id === 'firstClone'){
        galeriaSlide.style.transition = "none";
        counter = galeriaImagenes.length - counter ;
        galeriaSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
})
const  hamburguesa = document.querySelector ('.hamburguesa');
const navLinks = document.querySelector ('.nav-links');
const links = document.querySelectorAll ('.nav-links li');


hamburguesa.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    
    links.forEach(link => {
        link.classList.add('fade');
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
               
        })
    
    });
    
  });
  


document.addEventListener('DOMContentLoaded', function(){
   scrollNav();


   navegacionFija();

});
//Intersection Observer
const barra = document.querySelector('.header')
function navegacionFija(){
    const observer = new IntersectionObserver( function(entries){
        if (entries[0].isIntersecting){
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    })
    observer.observe(document.querySelector('.palfijo'));
};

// Scroll Indice
function scrollNav(){
    const enlaces = document.querySelectorAll('.nav-links a');

    enlaces.forEach(function (enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();
            
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth',
            })
        });
    });
};