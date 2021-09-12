import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "@fontsource/roboto";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./redux/actions";
import { Landing } from "./views/Landing";
import { Forbidden } from "./views/Forbidden";
import { Main } from "./views/Main";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authorized);
  const history = useHistory();
  const userToken = localStorage.getItem("token");
  console.log(userToken);
  useEffect(() => {
    dispatch(fetchStats(userToken));
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      {auth ? (
        <Route exact path="/app" component={Main} />
      ) : (
        <Route path="/app" component={Forbidden} />
      )}
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
