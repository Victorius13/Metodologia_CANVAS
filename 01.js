        // Animación de escritura Matrix
        document.addEventListener('DOMContentLoaded', () => {
            const titles = document.querySelectorAll('h1, h2');
            titles.forEach(title => {
                const text = title.innerText;
                title.innerHTML = '';
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        title.innerHTML += text[i++];
                        setTimeout(typeWriter, 50);
                    }
                };
                typeWriter();
            });

            // Efecto hover para cajas
            document.querySelectorAll('.canvas-box').forEach(box => {
                box.addEventListener('mouseover', () => {
                    box.style.backgroundColor = 'rgba(0, 80, 0, 0.3)';
                });
                box.addEventListener('mouseout', () => {
                    box.style.backgroundColor = 'rgba(0, 50, 0, 0.2)';
                });
            });
        });
