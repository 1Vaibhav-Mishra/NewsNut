import "./App.css";
import React , {useState}   from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App =()=> {
  const pagesize = 12;
  const apiKey= process.env.REACT_APP_NEWS_API
   
  const [progress, setProgress] = useState(0)
   
  
    return (
      <div>
        <Router>
          <NavBar />
           <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
             
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="general"
                  pageSize={ pagesize}
                  country="in"
                  category="general"
                />
              }
            >
              
            </Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="business"
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={ setProgress}
                apiKey={ apiKey}
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            >
               
            </Route>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;