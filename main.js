import './style.css';
import fetchApi from './scripts/fetchApi';
import fetchPrevNext from './scripts/fetchPrevNext';
import renderPokemon from './scripts/renderPokemon';

const getDiv = document.querySelector('#pokemons');
const getPrevBtn = document.querySelector('#prev');
const getNextBtn = document.querySelector('#next');

let url = 'https://pokeapi.co/api/v2/pokemon/';

const checkButton = async () => {
  const data = await fetchPrevNext(url);
  const { previous, next } = data;

  if (previous === null) getPrevBtn.disabled = true;
  else getPrevBtn.disabled = false;

  if (next === null) getNextBtn.disabled = true;
  else getNextBtn.disabled = false;
};

const renderNewPokemons = async (param) => {
  const res = await fetchApi(param);
  renderPokemon(res, getDiv);
  await checkButton();
};

const handlePrev = () => {
  getPrevBtn.addEventListener('click', async () => {
    const dataClick = await fetchPrevNext(url);
    const { previous } = dataClick;
    url = previous;
    getDiv.innerHTML = '';

    await renderNewPokemons(previous);
  });
};

const handleNext = () => {
  getNextBtn.addEventListener('click', async () => {
    const dataClick = await fetchPrevNext(url);
    const { next } = dataClick;
    url = next;
    getDiv.innerHTML = '';

    await renderNewPokemons(next);
  });
};

window.onload = async () => {
  const data = await fetchApi(url);
  handlePrev();
  handleNext();
  await checkButton();
  renderPokemon(data, getDiv);
};
