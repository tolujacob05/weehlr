import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./css/App.css";
import Home from "./Home";
import Logo from "./Logo";
import Pages from "./Pages";
import Spinner from "./Spinner";

const BASE_URL = "https://techcrunch.com/wp-json/wp/v2/posts";
const per_page = 10;

function App() {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function timeAgo(input) {
    const date = input instanceof Date ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat("en");
    const ranges = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    for (let key in ranges) {
      if (ranges[key] < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / ranges[key];
        return formatter.format(Math.round(delta), key);
      }
    }
  }

  const { id } = useParams;
  // const [per_page] = useState(2);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/?${id}?${per_page}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (isLoading) return <Spinner />;

  // const getRead = console.log(blog);

  return (
    <>
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home isLoading={isLoading} blog={blog} timeAgo={timeAgo} />
            }
          />
          <Route
            path="pages/:id"
            element={
              <Pages
                isLoading={isLoading}
                blog={blog}
                setIsLoading={setIsLoading}
                timeAgo={timeAgo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
