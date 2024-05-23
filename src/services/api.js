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
                origin: character.origin.name,
                episode: character.episode,
                status: character.status
            };
        });
        return newArray;
    })
}

export default getDataFromApi;