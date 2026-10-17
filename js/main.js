const thumbnails = document.querySelectorAll('.thumbnail-card');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoUrl = thumbnail.getAttribute('data-video');
        const title = thumbnail.getAttribute('data-title');
        const description = thumbnail.getAttribute('data-description');

        // Cambiar video
        videoPlayer.src = videoUrl + "?autoplay=1";

        // Cambiar título y descripción
        videoTitle.textContent = title;
        videoDescription.textContent = description;

        // Quitar clase active de todas las miniaturas
        thumbnails.forEach(item => {
            item.classList.remove('active');
        });

        // Agregar clase active a la miniatura seleccionada
        thumbnail.classList.add('active');
    });
});
