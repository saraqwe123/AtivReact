import {FilhoIndireta} from "./FilhoIndireta"
import { useState } from "react"

export function PaiIndireta() {
    const [nome, setNome] = useState("")
    function alterarNome(n) {
        setNome(n)
    }
    return (
        <div className={"w-full flex flex-col items-center p-7 rounded-md bg-custom-gray text-custom-white"}>
            <div className="flex gap-3">

                <span className="text-4lx text-white gap-4">{nome}</span>

                <FilhoIndireta alterar={alterarNome}/>
            </div>
        </div>
    )
}