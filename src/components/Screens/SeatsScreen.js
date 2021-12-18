import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from "../Screen components/Button";
import ScreenFooter from "../Screen components/ScreenFooter";
import ScreenHeader from "../Screen components/ScreenHeader";
import Seat from "../Screen components/Seat";


export default function SeatsScreen() {
  const { id } = useParams();
  const [serverData, setServerData] = useState();

  const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);
  const [selectedSeatsNames, setSelectedSeatsNames] = useState([]);

  const [nameInput, setNameInput] = useState('');
  const [cpfInput, setcpfInput] = useState('');

  let navigate = useNavigate();

  let selectedSeatsObject = {
    ids: selectedSeatsIds,
    name: "Fulano",
    cpf: "12345678900"
  }

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)
      .then((serverAnswer) => {
        setServerData(serverAnswer.data);
      })
  }, [id]);

  if (serverData === undefined) return <h1>Carregando...</h1>;

  return (
    <div className="SeatsScreenContainer">
      <ScreenHeader>
        Selecione o(s) assento(s)
      </ScreenHeader>

      <div className="seats">
        {serverData.seats.map((seat) =>
          <Seat key={seat.id}>
            {seat.id}
            {seat.name}
            {seat.isAvailable}
            {selectedSeatsIds}
            {setSelectedSeatsIds}
            {selectedSeatsNames}
            {setSelectedSeatsNames}
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

      <div className="inputs">
        <span>Nome do comprador</span>
        <input type="text" placeholder="Digite seu nome..."
          onChange={(event) => { setNameInput(event.target.value) }} value={nameInput} />

        <span>CPF do comprador</span>
        <input type="number" placeholder="Digite seu CPF..."
          onChange={(event) => { setcpfInput(event.target.value) }} value={cpfInput} />
      </div>

      <Button>
        {""}
        {"Reservar assento(s)"}
        {() => {
          if (selectedSeatsIds.length !== 0) {
            axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", selectedSeatsObject)
              .then((serverAnswer) => {
                navigate('/success', {
                  state: {
                    title: serverData.movie.title,
                    weekday: serverData.day.weekday,
                    date: serverData.day.date,
                    showtime: serverData.name,
                    seats: selectedSeatsNames,
                    buyersName: nameInput,
                    buyersCpf: cpfInput,
                  }
                });
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