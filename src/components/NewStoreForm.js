import React, { useEffect } from "react"

function NewStoreForm({ newStore, setNewStore, stores, setStores }) {
    const functionForFetch = () => {
        fetch(url, {
            method: 'post',
            header: { 'accept': 'application/json' },
            body: JSON.stringify(newStore)
        })
    }

    const url = "http://localhost:8085/stores"
    function handleSubmit(e) {
        e.preventDefault()
        setNewStore(() => {
            return {
                name: newStore.name,
                image: newStore.image,
                season: newStore.season,
                episode: newStore.episode
            }
        })

        // Post request goes here

        useEffect(() =>
            functionForFetch()
        )
        update state of stores


    }

    function handleChange(e) {
        setNewStore(newStore[e.id] = e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={newStore.name} onChange={handleChange} />
            <input type="text" id="image" placeholder="Image URL" value={newStore.image} onChange={handleChange} />
            <input type="number" id="season" placeholder="Season" step="1" value={newStore.season} onChange={handleChange} />
            <input type="number" id="episode" placeholder="Episode" step="1" value={newStore.episode} onChange={handleChange} />
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;