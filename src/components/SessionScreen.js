import { useParams } from "react-router-dom"

export default function SessionScreen() {
    const { id } = useParams();


    console.log(id);
    return (
        <div>{id}</div>
    )
}