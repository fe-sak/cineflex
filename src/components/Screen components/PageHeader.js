import { useLocation, useNavigate } from "react-router-dom"

export default function PageHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  function ReturnButton() {
    return (
      <ion-icon name="arrow-back" onClick={() => navigate(-1)}></ion-icon>
    )
  }


  console.log(location);
  return (
    <header>
      {location.pathname === '/' ? '' : <ReturnButton />}
      <span>cineflex</span>
    </header>
  )
}