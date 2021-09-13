import {useState} from "react";
import "./GuestList.css";
import GuestForm from "./GuestForm";
import GuestRow from "./GuestRow";
import Guest from "../models/Guest";

export default function GuestList() {
    const [guestList, setGuestList] = useState<Guest[]>([
        {name: "Jim", dish: "Hamburgers"},{name: "Kerri", dish: "Hot Dogs"}
    ]);

    function onSubmit(guest: Guest) {
        let newList = [...guestList];
        newList.push(guest);
        setGuestList(newList);
    }

    function clearList() {
        setGuestList([]);
    }

    return (
        <div className="guestlist">
            <button className="btnClear" onClick={clearList}>Clear List</button>
            <GuestForm onSubmit={onSubmit} />
            <table>
                <thead>
                    <tr>
                        <td className="colHeading">Name</td>
                        <td className="colHeading">Bringing</td>
                    </tr>
                </thead>
                <tbody>
                    {guestList.map((item, index) => <GuestRow key={index} name={item.name} dish={item.dish} />)}
                    
                </tbody>
            </table>
        </div>
    )
}