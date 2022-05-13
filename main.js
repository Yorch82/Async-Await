const pizarra = document.querySelector(".canvas");
const pokemonRandom = document.getElementById("pokemonRandom");

pokemonRandom.addEventListener('click', (e) =>{
    e.preventDefault();
    nombrePokemonRandom();
})

async function nombrePokemonRandom() {
    try {
        const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1126");        
        let pokeRandom = resultado.data.results[Math.floor(Math.random() * resultado.data.results.length)];
        let nombreRandom = pokeRandom.name;        
        imagenPokemonRandom(nombreRandom);
    } catch (error){
        console.log(error);
    }
}

async function imagenPokemonRandom(nombreRandom) {
    try {
        const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombreRandom}`);
        let imagenPokemon = resultado.data.sprites["front_default"];
        pintarPokemon (nombreRandom, imagenPokemon);
    } catch (error) {
        console.log(error);
    }
}

function pintarPokemon (nombreRandom, imagenPokemon) {
    pizarra.innerHTML = ""
    pizarra.innerHTML += `<div class="card" style="width:400px">
    <img class="card-img-top" src="${imagenPokemon}" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title text-center">${nombreRandom}</h4>          
    </div>
    </div>
    <br>  
    </div>`
}