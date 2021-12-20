import Inputs from "./Inputs";

export default function ReturnInputs({ children: [selectedSeatsIds, selectedSeatsNames, buyers] }) {

  return (
    <>
      {selectedSeatsIds.map((id, index) => {
        return <Inputs key={id}>
          {id}
          {selectedSeatsNames}
          {index}
          {buyers}
        </Inputs>
      })}
    </>
  )

}