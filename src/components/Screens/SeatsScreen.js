import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from "../Screen components/Button";
import Loading from "../Screen components/Loading";
import ReturnInputs from "../Screen components/ReturnInputs";
import ScreenFooter from "../Screen components/ScreenFooter";
import ScreenHeader from "../Screen components/ScreenHeader";
import Seat from "../Screen components/Seat";


export default function SeatsScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serverData, setServerData] = useState();

  const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);
  const [selectedSeatsNames, setSelectedSeatsNames] = useState([]);

  let buyers = [];

  let selectedSeatsObject = {
    ids: selectedSeatsIds,
    compradores: []
  }

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)
      .then((serverAnswer) => {
        setServerData(serverAnswer.data);
      })
  }, [id]);

  if (serverData === undefined) return <Loading />

  return (
    <div className="seatsScreenContainer">
      <ScreenHeader>
        Selecione o(s) assento(s)
      </ScreenHeader>

      <div className="seats">
        {serverData.seats.map((seat) =>
          <Seat key={seat.id} >
            {seat.id}
            {seat.name}
            {seat.isAvailable}
            {selectedSeatsIds}
            {setSelectedSeatsIds}
            {selectedSeatsNames}
            {setSelectedSeatsNames}
            {buyers}
          </Seat>

        )}
        <div className="legend">
          <div>
            <div className="seat selected"></div>
            <span>Selecionado</span>
          </div>
          <div>
            <div className="seat"></div>
            <span>Disponível</span>
          </div>
          <div>
            <div className="seat unavailable"></div>
            <span>Indisponível</span>
          </div>
        </div>
      </div>


      <ReturnInputs >
        {selectedSeatsIds}
        {selectedSeatsNames}
        {buyers}
      </ReturnInputs>

      <Button>
        {""}
        {"Reservar assento(s)"}
        {() => {
          if (selectedSeatsIds.length !== 0) {
            axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", selectedSeatsObject)
              .then((serverAnswer) => {
                setTimeout(() => {
                  navigate('/success', {
                    state: {
                      title: serverData.movie.title,
                      weekday: serverData.day.weekday,
                      date: serverData.day.date,
                      showtime: serverData.name,
                      seats: selectedSeatsNames,
                      buyers: buyers
                    }
                  })
                }, 50);
              })
              .catch(() => {
                alert(`Algo deu errado :(
                Tente novamente`)
              });
          }
        }}
      </Button>

      <ScreenFooter>
        {serverData.movie.posterURL}
        {serverData.movie.title}
        {`${serverData.day.weekday} ${serverData.name}`}
      </ScreenFooter>
    </div>
  )
}