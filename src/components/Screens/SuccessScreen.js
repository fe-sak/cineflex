import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Screen components/Button";
import ScreenHeader from "../Screen components/ScreenHeader";

export default function SuccessScreen() {
  const location = useLocation()
  const state = location.state
  console.log(location)
  return (
    <div className="successScreenContainer">
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
            <Fragment key={seat}>
              <span >Assento {seat}</span>
              <br />
            </Fragment>
          )
        })}
      </div>

      <div>
        <h1>Comprador</h1>
        {state.buyers.map((buyer) => {
          return (
            <Fragment key={buyer.idAssento}>
              <span>Nome: {buyer.nome}</span>
              <br />
              <span>CPF: {buyer.cpf}</span>
              <br />
              <br />
            </Fragment>
          )
        })}
      </div>

      <Button>
        {"/"}
        {"Voltar para Home"}
      </Button>
    </div>

  )
}