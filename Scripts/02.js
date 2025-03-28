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

    // Efecto hover para tablas
    document.querySelectorAll('tr').forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#002200';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = 'transparent';
        });
    });
});