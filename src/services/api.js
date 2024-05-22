const getDataFromApi = () => {

    return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {       
        const newArray = data.results.map((character) => {
            return {
                image: character.image,
                id: character.id,
                name: character.name,
                specie: character.species,
            };
        });
        return newArray;
    })
}

export default getDataFromApi;