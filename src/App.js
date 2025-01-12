import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/HomeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Details from "./pages/Details/Details";
import PageNotFound from "./pages/404/Page404";
import SearchResult from "./pages/SearchResult/SearchResult";
import Explore from "./pages/Explore/Explore";
import Header from "./Component/header/Header";
import Footer from "./Component/footer/Footer";
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log("Total Pages:", url);

  useEffect(() => {
    fetchApiConfiguration();
    genresCall();
  }, []);
  const fetchApiConfiguration = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promise = [];
    let endpoints = ["tv", "movie"];
    let allGeners = {};
    endpoints.forEach((url) => {
      promise.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promise);
    data.map(({ genres }) => {
      return genres.map((item) => (allGeners[item.id] = item));
    });
    dispatch(getGenres(allGeners));
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:mediaType/:id" element={<Details />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/search/:query" element={<SearchResult />}></Route>
          <Route path="/explore/:mediaType" element={<Explore />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
