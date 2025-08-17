async function getPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data = await response.json()
 
  document.getElementById("output").textContent = JSON.stringify(data, null,2);
}
 
getPokemonData('ditto');
