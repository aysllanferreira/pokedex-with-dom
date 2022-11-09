const renderPokemon = (res, getDiv) => {
  res.map(({ name, sprites }) => {
    const div = document.createElement('div');

    div.className = 'pokemon';
    div.innerHTML = `
      <img src="${sprites.front_default}" alt="${name}">
      <h2>${name}</h2>
    `;

    return getDiv.appendChild(div);
  });
};

export default renderPokemon;
