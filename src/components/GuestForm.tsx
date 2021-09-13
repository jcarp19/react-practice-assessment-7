import{useState} from "react";
import "./GuestForm.css";
import Guest from "../models/Guest";

interface Props {
    onSubmit: (guest: Guest) => void
}

export default function GuestForm({onSubmit}: Props) {
    const [name, setName] = useState("");
    const [dish, setDish] = useState("");
    return (
        <form onSubmit={(event => {
            event.preventDefault();
            onSubmit({name, dish});
            setName("");
            setDish("");
            document.querySelectorAll("input").forEach(input => input.value = "");
            document.querySelector("input")?.focus();
        })}>
            <label htmlFor="name">Name
                <input type="text" name="name" id="name" placeholder="Name" required onChange={(event) => {setName(event.target.value)}} />
            </label>
            <label htmlFor="dish">Dish Bringing
                <input type="text" name="dish" id="dish" placeholder="Dish" required onChange={(event) => {setDish(event.target.value)}} />
            </label>
            <button className="btnSubmit" type="submit">Submit</button>
        </form>
    )
}