import loading from '../../assets/img/Spinner-1s-200px.gif'

export default function Loading() {

  return (
    <div className="loadingContainer">
      <img src={loading} alt="loading icon" />
    </div>
  )
}