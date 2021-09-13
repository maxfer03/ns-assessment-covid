import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./redux/actions";
import { Landing } from "./views/Landing";
import { Forbidden } from "./views/Forbidden";
import { Main } from "./views/Main";
import { Detail } from "./components/Detail";
import { NavBar } from "./components/NavBar";
import { Edit } from "./components/Edit";
import { NavBarSpace } from "./components/NavBarSpace";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authorized);
  const userToken = localStorage.getItem("token");
  console.log(userToken);
  useEffect(() => {
    dispatch(fetchStats(userToken));
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      {auth ? (
        <>
          <Route path="/app" component={NavBar} />
          <Route path="/app" component={NavBarSpace} />
          <Route exact path="/app" component={Main} />
          <Route
            exact
            path="/app/:country"
            render={({ match }) => <Detail countryUrl={match.params.country} />}
          />
          <Route
            exact
            path="/app/:country/edit"
            render={({ match }) => <Edit countryUrl={match.params.country} />}
          />
        </>
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
