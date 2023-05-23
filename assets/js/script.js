$(document).ready(function() {
  var galleryContainer = $('.gallery-container');
  var loadedImages = 8;
  var imagesPerPage = 20;

  // Fonction pour charger des images supplémentaires
  function loadMoreImages() {
    for (var i = 0; i < imagesPerPage; i++) {
      var randomId = Math.floor(Math.random() * 1000);

      var imageLink = $('<a>', {
        href: 'https://picsum.photos/id/' + randomId + '/800/600',
        'data-lightbox': 'gallery',
        'data-title': 'Image ' + (loadedImages + i + 1)
      });

      var image = $('<img>', {
        src: 'https://picsum.photos/id/' + randomId + '/200',
        alt: 'Image ' + (loadedImages + i + 1)
      });

      imageLink.append(image);
      galleryContainer.append(imageLink);
    }

    loadedImages += imagesPerPage;
  }

  // Chargement initial des images
  loadMoreImages();

  // Fonction pour vérifier si l'utilisateur a atteint le bas de la page
  function checkScroll() {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= documentHeight - windowHeight) {
      loadMoreImages();
    }
  }

  // Événement de scroll
  $(window).scroll(checkScroll);
});

