const getState = ({ getStore, getActions , setStore}) => {
    return {
        store: {
            people: null,
            planets: null,
            species: null,
            vehicles: null,
            films: null,
            starships: null
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
            getElement: async (url, element) => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (response.status !== 200) throw new Error("Error API");
                    const data = await response.json();
                    setStore({ element: data });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            }
        }
    }
}

export default getState;