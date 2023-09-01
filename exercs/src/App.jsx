import React from "react"
export default () => {
    return (
     <div className="flex">
        <div className ={ `w-20 h-screen bg-Orange p-5 pt-8`}>
        <img
        src=".\src\assets\Logo vertical mono negativo.png"
        class="h-auto max-w-full"
        alt="..."
        />
        </div>
        <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
            <h1>Pagina principal</h1>
        </div>
    </div>
    );
}