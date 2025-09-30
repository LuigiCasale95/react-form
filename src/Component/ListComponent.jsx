import { useState } from "react"

export default function ListComponent() {

    const mangaList = ["Naruto", "One Piece", "Buonanotte Punpun", "BillyBat"]

    const [manga, setManga] = useState(mangaList)
    const [newManga, setNewManga] = useState("")

    const addManga = e => {
        e.preventDefault();
        /* Array copia da stampare ad ogni aggiunta elemento*/

        const updateMangaList = [...manga, newManga];
    }

    return (
        <h1>AAAAAAAAA</h1>
    )
}