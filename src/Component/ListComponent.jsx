import { useState } from "react"

export default function ListComponent() {

    const mangaList = ["Naruto", "One Piece", "Buonanotte Punpun", "BillyBat"]

    const [manga, setManga] = useState(mangaList)
    const [newManga, setNewManga] = useState("")

    const addManga = e => {
        e.preventDefault();
        /* Array copia da stampare ad ogni aggiunta elemento*/

        const updateMangaList = [...manga, newManga];
        setManga(updateMangaList)
        setNewManga("")
    }

    const removeManga = i => {
        const updateMangaList = manga.filter((manga, mangaIndex) => {
            return mangaIndex !== i
        })
        setManga(updateMangaList)
    }

    return (
        <>
        <form onSubmit={addManga}>
            <input type="text" 
            placeholder="Aggiungi Manga"
            value={newManga}
            onChange={(e) => { setNewManga(e.target.value)}}
            />
        </form>

        {/* Lista dei manga in pagina */}
        <ul>
            {manga.map((manga, i) => 
            <li key={i}>
                {manga}
                <button onClick={() => removeManga(i)}>X</button>
            </li>
            )}
        </ul>
        </>
    )
}