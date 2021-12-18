import { useLocation } from "react-router-dom";
import Button from "../Screen components/Button";
import ScreenHeader from "../Screen components/ScreenHeader";

export default function SuccessScreen() {
  const location = useLocation()
  const state = location.state
  console.log(location)
  return (
    <div className="SuccessScreenContainer">
      <ScreenHeader>
        {"Pedido feito com sucesso!"}
      </ScreenHeader>

      <div>
        <h1>Filme e sessão</h1>
        <span>
          {state.title}
          <br />
          {state.date} {state.showtime}
        </span>
      </div>

      <div>
        <h1>Ingressos</h1>
        {state.seats.map((seat) => {
          return (
            <span key={seat}>Assento {seat}</span>
          )
        })}
      </div>

      <div>
        <h1>Comprador</h1>
        <span>Nome: {state.buyersName}</span>
        <br />
        <span>CPF: {state.buyersCpf}</span>
      </div>

      <Button>
        {"/"}
        {"Voltar para Home"}
      </Button>
    </div>

  )
}