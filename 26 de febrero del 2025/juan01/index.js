const option = {
    headers: {},
    method: 'GET',
    params: {}
};

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/raichu'),
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
])
.then(responses => {
    return Promise.all(responses.map(response => response.json()));
})
.then(data => {
    per(data);
})
.catch(error => {
    console.error(error);
});

function per(data) {
    const nombrePokemon = data[0].name; 
    document.getElementById('pk').innerText = nombrePokemon;

    const nombrePokemon1 = data[1].name;
    document.getElementById('p1').innerText = nombrePokemon1;

    const nombrePokemon2 = data[2].name;
    document.getElementById('p2').innerText = nombrePokemon2;
}
