
import './App.css'
import TileFruit from "./components/TileFruit.jsx";
import React from "react";


function App() {

    // const [count, setCount] = React.useState(0);
    //
    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>

        <div>
        <TileFruit
            imageUrl={"./src/assets/strawberry.png"}
            imageAlt={"Aarbeien image"}
            fruitName={"Aarbeien"}
        />

            {/*<p>{count}</p>*/}
            {/*<button onClick={handleIncrement}></button>*/}
        {/*<button*/}
        {/*    onClick={() => setCount((count) => count + 1)}*/}
        {/*    className={"addition"}>*/}
        {/*    +*/}
        {/*</button>*/}
        </div>

        <TileFruit
            imageUrl={"./src/assets/banana.png"}
            imageAlt={"Bananen image"}
            fruitName={"Bananen"}
        />
        <TileFruit
            imageUrl={"./src/assets/apple.png"}
            imageAlt={"Appels image"}
            fruitName={"Appels"}
        />
        <TileFruit
            imageUrl={"./src/assets/kiwi.png"}
            imageAlt={"Kiwi's image"}
            fruitName={"Kiwi's"}
        />

        <button>RESET</button>
    </>
  )
}

export default App
