import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // API URL https://swapi.dev/api/
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
           state.actions.updatePeople('https://www.swapi.tech/api/people?page=1&limit=9');
           state.actions.updatePlanets('https://www.swapi.tech/api/planets?page=1&limit=9');
           state.actions.updateSpecies('https://www.swapi.tech/api/species/?page=1&limit=9');
           state.actions.updateVehicles('https://www.swapi.tech/api/vehicles/?page=1&limit=9');
           state.actions.updateStarships('https://www.swapi.tech/api/starships/?page=1&limit=9');
           state.actions.updateFilms('https://www.swapi.tech/api/films/?page=1&limit=9');
        }, [])

        return (
            <Context.Provider value={state}>
                <PassedComponent  {...props} />
            </Context.Provider>
        )
    }
    return StoreWrapper;
}

export default injectContext;