import React from 'react'

function NewRealease({ img, id, name, description, episode, onClick }) {
    return (
        <div style={{ position: "relative" }} onClick={onClick}>
            <div>
                <img src={img} style={{ width: "200px", height: "370px", filter: "brightness(0.65)" }} />
            </div>

            <div style={{ position: "absolute", bottom: "20%", left: "22%" }}>
                <p style={{ color: "whitesmoke" }}>Episode {episode}</p>
            </div>
            <div>
                <p style={{ maxWidth: "200px", color: "whitesmoke", fontFamily:"cursive" }}>{name}</p>
            </div>
        </div>

    )
}

export default NewRealease