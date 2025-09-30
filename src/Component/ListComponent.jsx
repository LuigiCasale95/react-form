import { useState } from "react"

export default function ListComponent() {

    const mangaList = ["Naruto è finito davverò così male? ASSOLUTAMENTE SI", "Uscita ultimo capitolo di One Piece prevista per 2125", "In uscita la nuova edizione di Buonanotte Punpun", "Ristampa dei volumi 1, 2, 3 di BillyBat"]

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
            <li className="listManga" key={i}>
                 {manga} 
                <button className="removeBTN" onClick={() => removeManga(i)}><i class="fa-solid fa-xmark"></i></button>
            </li>
            )}
        </ul>
        </>
    )
}