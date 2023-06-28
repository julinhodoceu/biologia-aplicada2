window.addEventListener('scroll', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    
    for (var i = 0; i < fadeInElements.length; i++) {
        var element = fadeInElements[i];
        var position = element.getBoundingClientRect().top;
        
        // Verificar se o elemento está visível na janela
        if (position < window.innerHeight - 70) {
            element.classList.add('visible');
        }
    }
});