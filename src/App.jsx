
import './App.css'
import TileFruit from "./components/TileFruit.jsx";

function App() {

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>

        <TileFruit
            imageUrl={"./assets/images/logo.png"}
            imageAlt={"Aarbeien image"}
            fruitName={"Aarbeien"}
        />
    </>
  )
}

export default App
