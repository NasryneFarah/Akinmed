$(document).ready(function () {
  // Vérifier si le modal s'ouvre dès le chargement
  $("#videoModal").hide(); // S'assurer qu'il est caché au démarrage
  //Ouvrir le modal
  function openModal() {
    $("#videoModal").fadeIn(500);
  }

  // Fermer le modal et arrêter la vidéo
  function closeModal() {
    $("#videoModal").fadeOut(500, function () {
      // Arrêter la vidéo à la fermeture du modal
      var iframe = $("#videoModal iframe");
      var src = iframe.attr("src");
      iframe.attr("src", ""); // Stopper la vidéo
      iframe.attr("src", src); // Relancer la vidéo si besoin lors de l'ouverture suivante
    });
  }

  // Gestion de l'ouverture du modal
  $(".recap-btn").on("click", function () {
    openModal();
  });

  // Gestion du clic sur le bouton de fermeture du modal
  $(".close").on("click", function () {
    closeModal();
  });

  // Fermer le modal si l'utilisateur change de page
  $(window).on("pagehide", function () {
    closeModal();
  });
});
