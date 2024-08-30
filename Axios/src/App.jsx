import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
const [data, newdata] = useState([])
const [iserror, seterror] = useState("")

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => newdata(res.data))
    .catch((error) => seterror(error.message))
  }, [])
  return (
    <>
      <p>This is an Axios Tutorial</p>
      {iserror !== "" && <h2>{iserror}</h2>}

      {data.map((post) =>{
        const {id, title, body} = post
        return <div className="card" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>

      })}
    </>
  );
}

export default App;
