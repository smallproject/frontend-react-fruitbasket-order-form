import "./Formulier.css";
import {useState} from "react";

function Formulier() {
    // const [firstname, setfirstname] = useState("");
    // const [lastname, setlastname] = useState("");
    // const [word, setWord] = useState("");
    // const [word, setWord] = useState("");
    // const [word, setWord] = useState("");

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: '',
        postcode: '',
        frequency: '',
        timeofday: '',
        comments: '',
        agreement: ''
    })

    const handleSubmit = () => {
        console.log(formData)
    }

    const handleChange = (e) => {
        // switch (e.)
        // setfirstname(e.target.value);

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // function logSelectedValue() {
    //     const selectElement = document.getElementById('frequency');
    //
    //     const selectedValue = selectElement.value;
    //
    //     handleChange(selectedValue);
    // }

    return (
        <>
            <div className={"form-wrapper"}>
                <div className={"firstname"}>
                    <label htmlFor="">Voornaam </label>
                    <input
                        type="text"
                        name={"firstname"}
                        value={formData.firstname}
                        onChange={handleChange}/>
                </div>

                <div className={"lastname"}>
                    <label htmlFor="">Achternaam</label>
                    <input
                        type="text"
                        name={"lastname"}
                        value={formData.lastname}
                        onChange={handleChange}/>
                </div>

                <div className={"leeftijd"}>
                    <label htmlFor="">Leeftijd</label>
                    <input
                        type="text"
                        name={"age"}
                        value={formData.age}
                        onChange={handleChange}/>
                </div>

                <div className={"postcode"}>
                    <label htmlFor="">Postcode</label>
                    <input
                        type="text"
                        name={"postcode"}
                        value={formData.postcode}
                        onChange={handleChange}/>
                </div>

                <div className={"bezorgfrequentie"}>
                    <label htmlFor="">Bezorgfrequentie</label>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name={"frequency"}*/}
                    {/*    value={formData.frequency}*/}
                    {/*    onChange={handleChange}/>*/}
                    <select name="frequency" id="frequency"
                            value={formData.frequency}
                            onChange={handleChange}>
                        <option value="weekly">Iedere week</option>
                        <option value="monthly">Iedere maand</option>
                        <option value="twotimespermonth">Twee kee per maand</option>
                    </select>
                </div>

                <div className={"time-of-day"}>
                    <div>
                        <input type="radio"
                               name={"timeofday"}
                               value={"overdag"}
                               onChange={handleChange}/>
                        <label htmlFor="">Overdag</label>
                    </div>
                    <div>
                        <input type="radio"
                               name={"timeofday"}
                               value={"savonds"}
                               onChange={handleChange}/>
                        <label htmlFor="">'s Avonds'</label>
                    </div>
                </div>

                <div className={"comments"}>
                    <label htmlFor="">Opmerking</label>
                    <textarea
                        type="text"
                        name={"comments"}
                        value={formData.comments}
                        onChange={handleChange}
                        id="" cols="30" rows="10"
                    ></textarea>
                </div>

                <div className={"agreement"}>
                    <div>
                    <input type="checkbox" id={""}
                           name={"agreement"}
                           value={formData.agreement}
                           onChange={handleChange}/>
                    <label htmlFor="">Ik ga akkoord met de voorwaarden</label>
                    </div>
                </div>

                <button onClick={handleSubmit}>Verzend</button>

            </div>
        </>
    )
}

export default Formulier