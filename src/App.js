import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Landing } from "./views/Landing";


function App() {

  return (
    <div className="App">
      <Route exact path = '/' component = {Landing}/>
    </div>
  );
}

export default App;

/* 
  axios requests examples

    console.log("click");
    axios
      .post("https://vast-basin-26481.herokuapp.com/auth/signup", {
        data: {
          username: "maxfer12345",
          password: "123456",
        },
      })
      .then((res) => {
        console.log(res);
      });



    axios.get('https://vast-basin-26481.herokuapp.com/stats/all', {
      headers: {
        "X-JWT-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6Im1heCIsImRhdGVDcmVhdGVkIjoxNjMxNDUyNDQ3NzA4LCJpc3N1ZWQiOjE2MzE0NTI0NDc3MDgsImV4cGlyZXMiOjE2MzE0NTMzNDc3MDh9.7kNV2EAijwEVpUNvJbb3sM1-UMBTkRK7NVNZugqHmRBrNivQ766mnyBsIHagAQ7Ik5fk3npZMaewh8f98hGFLQ"
      }
    })
    .then(res => console.log(res))


*/
