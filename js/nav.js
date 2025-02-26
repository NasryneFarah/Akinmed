$(document).ready(function () {
    // Fonction pour afficher ou cacher le menu mobile
    $(".hamburger").click(function () {
      $("nav ul").toggleClass("active");
    });
  
    // Afficher ou cacher le sous-menu au survol du parent
    $(".dropdown").click( function (e) {
        $(this).children(".submenu").stop(true, true).slideToggle(200);  // Utiliser slideToggle pour alterner l'affichage
      });
  });
  