import { useState } from "react";

export default function Seat({ children: [id, name, isAvailable, selectedSeatsIds,
  setSelectedSeatsIds, selectedSeatsNames, setSelectedSeatsNames, buyers] }) {
  const [seatState, setSeatState] = useState();

  return (
    <div className={`seat ${isAvailable ? '' : 'unavailable'} ${seatState}`} onClick={() => {

      if (!isAvailable) alert("Esse assento não está disponível");
      else {
        if (seatState === undefined) {
          setSeatState("selected");
          setSelectedSeatsIds([...selectedSeatsIds, id]);
          setSelectedSeatsNames([...selectedSeatsNames, name]);
        }
        else {
          let currentBuyer = buyers.filter((buyer) => buyer.idAssento === id);
          if (currentBuyer[0].nome.length !== 0 || currentBuyer[0].cpf.length !== 0) {
            if (window.confirm("Deseja desselecionar este assento? Os dados preenchidos serão perdidos!")) {
              setSeatState();
              setSelectedSeatsIds(selectedSeatsIds.filter((selectedSeat) => selectedSeat !== id));
              setSelectedSeatsNames(selectedSeatsNames.filter((selectedSeat) => selectedSeat !== name));
            }
          }
          else {
            setSeatState();
            setSelectedSeatsIds(selectedSeatsIds.filter((selectedSeat) => selectedSeat !== id));
            setSelectedSeatsNames(selectedSeatsNames.filter((selectedSeat) => selectedSeat !== name));
          }
        }
      }
    }}>
      <span>{name}</span>
    </div>
  )
}