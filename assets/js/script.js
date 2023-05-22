function createGallery(numImages) {
    var galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery-container';
  
    for (var i = 0; i < numImages; i++) {
      var imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
  
      var image = document.createElement('img');
      image.src = 'https://picsum.photos/200'; // Utilisez la source d'images de Picsum ici
      image.alt = 'Image ' + (i + 1);
  
      imageContainer.appendChild(image);
      galleryContainer.appendChild(imageContainer);
  
      if ((i + 1) % 10 === 0) {
        imageContainer.style.marginRight = '0'; // Supprime la marge à droite pour le dernier élément de chaque ligne
      }
    }
  
    document.body.appendChild(galleryContainer);
  }
  
  createGallery(4); // Appel de la fonction avec le nombre d'images souhaité
  