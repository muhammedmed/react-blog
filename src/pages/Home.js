import { useState, useEffect } from "react";
import Category from "../components/category/Category";
import BlogList from "../components/bloglist/BlogList";
import items from "../data/getData";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [blogItems, setBlogItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setBlogItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setBlogItems(newItems);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="home">
      {loading ? (
        <div className="full">
          <PacmanLoader
            css={override}
            size={30}
            color={"#080808"}
            loading={loading}
          />
        </div>
      ) : (
        <header className="nav">
          <Header />
          <Slider />
          <Category categories={categories} filterItems={filterItems} />
          <BlogList items={blogItems} />
          <Footer />
        </header>
      )}
    </div>
  );
};

export default Home;
