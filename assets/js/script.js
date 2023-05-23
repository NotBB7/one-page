  function createGallery(numImages) {
    var galleryContainer = document.querySelector('.gallery-container');
  
    for (var i = 0; i < numImages; i++) {
      var imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
  
      var randomId = Math.floor(Math.random() * 200); // Générer un ID aléatoire pour chaque image
  
      var imageLink = document.createElement('a');
      imageLink.setAttribute('href', 'https://picsum.photos/id/' + randomId + '/800/600'); // Utilisez la source d'images de Picsum ici
      imageLink.setAttribute('data-lightbox', 'gallery');
  
      var image = document.createElement('img');
      image.src = 'https://picsum.photos/id/' + randomId + '/200';
      image.alt = 'Image ' + (i + 1);
  
      imageLink.appendChild(image);
      imageContainer.appendChild(imageLink);
      galleryContainer.appendChild(imageContainer);
    }
  
    lightbox.init(); // Initialisation de Lightbox2
  }
  
  createGallery(12); // Appel de la fonction avec le nombre d'images souhaité