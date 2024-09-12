import "./TileFruit.css";

function TileFruit({imageUrl, imageAlt,fruitName}) {
    return (
        <>
            <div className={"wrapper"}>
                <div className={"tile-fruit"}>
                    <img src={imageUrl} alt={imageAlt}/>
                    <span>{fruitName}</span>
                    <button className={"minus"}>-</button>
                    <input className={"input-counter"} type="text" value={"0"}/>
                    <button className={"addition"}>+</button>
                </div>
            </div>
        </>
    )
}

export default TileFruit;