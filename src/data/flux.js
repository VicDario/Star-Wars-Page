const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
        },
        actions: {
            getUsers: (url) => {
                fetch(url)
                    .then((response) => { })
                    .then((data) => { })
                    .catch((error) => { });
            },
            updateName: (name, lastname) => {
                setStore({
                    name,
                    lastname
                })
            }
        }
    }
}

export default getState;