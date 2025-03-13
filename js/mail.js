// $(document).ready(function() {
//     $("#contact-form").submit(function(e) {
//         e.preventDefault(); // Empêche le rechargement de la page

//         let formData = new FormData(this);

//         $.ajax({
//             url: "sendMail.php",
//             type: "POST",
//             data: formData,
//             processData: false,
//             contentType: false,
//             dataType: "json",
//             success: function(response) {
//                 if (response.status === "success") {
//                     $("#response-message").text("Message envoyé avec succès !");
//                     $("#contact-form")[0].reset(); // Réinitialiser le formulaire
//                 } else {
//                     $("#response-message").text("Erreur lors de l'envoi du message.");
//                 }
//             },
//             error: function() {
//                 $("#response-message").text("Une erreur est survenue.");
//             }
//         });
//     });
// });
