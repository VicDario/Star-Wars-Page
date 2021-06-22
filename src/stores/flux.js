const getState = ({ getStore, getActions , setStore}) => {
    return {
        store: {
            people: null,
            planets: null,
            species: null,
            vehicles: null,
            films: null,
            starships: null,
            character: null,
            specie: null,
            planet: null,
            starship: null,
            vehicle: null,
            favorites: [],
        },
        actions: {
            updatePeople: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ people: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            updatePlanets: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ planets: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            updateSpecies: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ species: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            updateVehicles: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ vehicles: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            updateStarships: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ starships: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            updateFilms: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ films: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getCharacter: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();

                    let getHome = async (url) => {
                        try {
                            const response = await fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            });
                            if (response.status !== 200) throw new Error("Error API");
                            const data = await response.json();
                            return data;
                        } catch (error) {
                            setStore({
                                error: error.message
                            })
                        }
                    }
                    let home = await getHome(data.result.properties.homeworld);
                    setStore({ 
                        character : {data: data, planet: home}
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getSpecie: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();

                    let getHome = async (url) => {
                        try {
                            const response = await fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            });
                            if (response.status !== 200) throw new Error("Error API");
                            const data = await response.json();
                            return data;
                        } catch (error) {
                            setStore({
                                error: error.message
                            })
                        }
                    }
                    let home = await getHome(data.result.properties.homeworld);
                    setStore({ 
                        specie : {data: data, planet: home}
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getPlanet: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ 
                        planet: data
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getStarship: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ 
                        starship: data
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getVehicle: async (url) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ 
                        vehicle: data
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            addFavorite: (element) => {
                let { favorites } = getStore();
                favorites.push(element);
                setStore({favorites})
            },
            deleteFavorite: (element) => {
                let { favorites } = getStore();
                let  newlist = favorites.filter(item => item !== element);
                setStore({favorites: newlist})
            }
        }
    }
}

export default getState;