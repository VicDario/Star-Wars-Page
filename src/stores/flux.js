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
            }
        }
    }
}

export default getState;