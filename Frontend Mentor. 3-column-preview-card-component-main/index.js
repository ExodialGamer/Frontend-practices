const columnas = document.querySelectorAll('.columna');

columnas.forEach((columna) => {
  columna.addEventListener('click', () => {
    // Verificar si la columna actual está expandida
    const estaExpandida = columna.classList.contains('expandido');

    // Contraer la columna expandida anterior (si la hay)
    const expandido = document.querySelector('.expandido');
    if (expandido) {
      expandido.classList.remove('expandido');
    }

    // Expandir o contraer la columna actual
    if (!estaExpandida) {
      columna.classList.add('expandido');
    }
  });
});