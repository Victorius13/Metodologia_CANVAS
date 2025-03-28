    // Animaciones JS
        document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, h2');
    
    elements.forEach(el => {
        // Preservar espacios y saltos de línea originales
        const text = el.innerHTML
            .replace(/<br>/g, '\n')  // Manejar saltos de línea HTML
            .replace(/&nbsp;/g, ' '); // Manejar espacios no-breaking
        
        el.innerHTML = ''; // Limpiar contenido
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                // Agregar caracteres preservando espacios
                el.innerHTML += text[i] === ' ' ? '&nbsp;' : text[i];
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        typeWriter();
    });
});

            // Efecto Matrix para bordes
            const borders = document.querySelectorAll('.matrix-border');
            borders.forEach(border => {
                let angle = 0;
                setInterval(() => {
                    border.style.boxShadow = `
                        ${Math.cos(angle) * 15}px ${Math.sin(angle) * 15}px 15px #0f03,
                        ${Math.cos(angle + Math.PI) * 15}px ${Math.sin(angle + Math.PI) * 15}px 15px #0f03
                    `;
                    angle += 0.02;
                }, 50);
            });
        });
