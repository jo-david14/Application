document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Envoi de l'e-mail avec EmailJS
    emailjs.send("service_ue9nyqd", "template_25r8rqi", {
        from_name: name,
        message: comment,
    }).then(function(response) {
        console.log('E-mail envoyé avec succès!', response.status, response.text);
        alert('Merci pour votre commentaire !'); // Message de confirmation
        document.getElementById('comment-form').reset(); // Réinitialise le formulaire
    }, function(error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        alert('Une erreur est survenue. Veuillez réessayer.'); // Message d'erreur
    });
});

// Initialisation d'EmailJS (remplacez YOUR_PUBLIC_KEY par votre clé publique)
(function() {
    emailjs.init("do3UYaH4HzUrIElUH");
})();