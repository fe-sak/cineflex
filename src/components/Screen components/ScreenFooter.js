export default function ScreenFooter({ children: [img, title, showtime] }) {

  return (
    <div className="ScreenFooter">
      <div>
        <img src={img} alt={title} />
      </div>
      <span>
        {title}
        <br />
        {showtime}
      </span>
    </div>
  )
}   