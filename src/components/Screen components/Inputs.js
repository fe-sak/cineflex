import { useState } from "react/cjs/react.development";

export default function Inputs({ children: [id, selectedSeatsNames, index, buyers] }) {
  const [nameInput, setNameInput] = useState('');
  const [cpfInput, setcpfInput] = useState('');

  console.log('buyers: ');
  console.log(buyers);

  for (let i = 0; i < buyers.length; i++) {
    if (buyers[i].idAssento === id) buyers.splice(i, 1);
  }

  buyers.push({
    idAssento: id,
    nome: nameInput,
    cpf: cpfInput
  });

  return (
    <div className="inputs">
      <span>Poltrona {selectedSeatsNames[index]}</span>
      <span>Nome do comprador</span>
      <input type="text" placeholder="Digite seu nome..."
        onChange={(event) => { setNameInput(event.target.value) }} value={nameInput} />

      <span>CPF do comprador</span>
      <input type="number" placeholder="Digite seu CPF..."
        onChange={(event) => { setcpfInput(event.target.value) }} value={cpfInput} />
    </div>
  )
}