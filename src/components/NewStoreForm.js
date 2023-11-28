import React, { useState, useEffect } from "react"

function NewStoreForm({addStore }) {

    const formOutline = {
        name: '',
        image: '',
        season: 0,
        episode: 0
    }

    const[form, setForm] = useState(formOutline)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addStore(form)
        setForm(formOutline)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={form.name} type="text" id="name" placeholder="Store Name" />
            <input onChange={handleChange} value={form.image} type="text" id="image" placeholder="Image URL" />
            <input onChange={handleChange} value={form.season} type="number" id="season" placeholder="Season" step="1" />
            <input onChange={handleChange} value={form.episode} type="number" id="episode" placeholder="Episode" step="1" />
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;



// useEffect(() =>
//     functionForFetch()
// )

// const functionForFetch = () => {
//     fetch(url, {
//         method: 'post',
//         header: { 'accept': 'application/json' },
//         body: JSON.stringify(newStore)
//     })
// }

// const url = "http://localhost:8085/stores"
// function handleSubmit(e) {
//     e.preventDefault()
//     setNewStore(() => {
//         return {
//             name: newStore.name,
//             image: newStore.image,
//             season: newStore.season,
//             episode: newStore.episode
//         }
//     })
//     updateStore()
// }

// function updateStore() {
//     setStores([...stores, newStore])
// }

// function handleChange(e) {
//     setNewStore(newStore[e.id] = e.target.value)
// }