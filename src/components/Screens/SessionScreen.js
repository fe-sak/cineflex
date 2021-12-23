import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ScreenFooter from "../Screen components/ScreenFooter";
import ScreenHeader from "../Screen components/ScreenHeader";
import Button from "../Screen components/Button"
import Loading from "../Screen components/Loading";

export default function SessionScreen() {
  const { id } = useParams();
  const [sessions, setSessions] = useState();

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`)
      .then((serverAnswer) => setSessions(serverAnswer.data))
  }, [id])

  if (sessions === undefined) return <Loading />

  return (
    <div className="sessionScreenContainer">
      <ScreenHeader>
        Selecione o horário
      </ScreenHeader>
      <div className="sessions">
        {sessions.days.map((day) => {
          return (
            <div className="session" key={day.id}>
              <div className="day">
                {`${day.weekday} - ${day.date}`}
              </div>
              <div className="showtimes">
                {day.showtimes.map((showtime) => {
                  return (
                    <Button key={showtime.id}>
                      {`/assentos/${showtime.id}`}
                      {showtime.name}
                    </Button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <ScreenFooter>
        {sessions.posterURL}
        {sessions.title}
      </ScreenFooter>

    </div>
  )
}