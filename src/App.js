import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Card from "./components/Card";
import HiddenText from "./components/HiddenText";
import ScrollBar from "./components/ScrollBar";
import Pagination from "./components/Pagination";
import Rating from "./components/Rating";
import Header from "./components/Header";

const cards = [
  { id: 1, text: "Карточка 1" },
  { id: 2, text: "Карточка 2" },
  { id: 3, text: "Карточка 3" },
  { id: 4, text: "Карточка 4" },
  { id: 5, text: "Карточка 5" },
  { id: 6, text: "Карточка 6" },
];

const texts = ["WINTER", "IS", "COMING"];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cards" element={<Card cards={cards} />} />
        <Route path="/hidden-text" element={<HiddenText texts={texts} />} />
        <Route path="/scroll-bar" element={<ScrollBar />} />
        <Route
          path="/pagination"
          element={
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          }
        />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </>
  );
};
export default App;
