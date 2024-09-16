import "./TileFruit.css";
import React from "react";

// const [count, setCount] = React.useState(0);

// function handleOnClick() {
//     setCount(count + 1);
// }

function TileFruit({imageUrl, imageAlt,fruitName}) {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count !== 0)
            setCount(count - 1);
    };

    return (
        <>
            <div className={"wrapper"}>
                <div className={"tile-fruit"}>
                    <img src={imageUrl} alt={imageAlt}/>
                    <span>{fruitName}</span>
                    <button onClick={handleDecrement} className={"minus"}>-</button>
                    <input className={"input-counter"} type="text" value={count}/>
                    <button onClick={handleIncrement} className={"addition"}>+</button>
                </div>
            </div>
        </>
    )
}

export default TileFruit;