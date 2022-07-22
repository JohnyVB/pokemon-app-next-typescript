import axios from 'axios';

const pokeApiUrlV2 = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokeApiUrlV2;