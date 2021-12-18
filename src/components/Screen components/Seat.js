import { useState } from "react/cjs/react.development";

export default function Seat({ children: [id, name, isAvailable, selectedSeatsIds, setSelectedSeatsIds, selectedSeatsNames, setSelectedSeatsNames] }) {
  const [seatState, setSeatState] = useState();
  return (
    <div className={`seat ${isAvailable ? '' : 'unavailable'} ${seatState}`} onClick={() => {

      if (!isAvailable) alert("Esse assento não está disponível");
      else {
        if (seatState === undefined) {
          setSeatState("selected");
          setSelectedSeatsIds([...selectedSeatsIds, id]);
          setSelectedSeatsNames([...selectedSeatsNames, name])

        }
        else {
          setSeatState();
          setSelectedSeatsIds(selectedSeatsIds.filter((selectedSeat) => selectedSeat !== id));
          setSelectedSeatsNames(selectedSeatsNames.filter((selectedSeat) => selectedSeat !== name));
        }
      }


    }}>
      <span>{name}</span>
    </div>
  )
}