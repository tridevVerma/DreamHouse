import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllNews } from "../../actions/loadAllNews";

import { Container } from "@material-ui/core";
import NewsSlider from "../slider/newsSlider/NewsSlider";

const NewsSection = ({ backgroundColor, heading, subHeading }) => {
  let allNews = useSelector((state) => state.allNews.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  if (allNews.length > 5) {
    allNews = allNews.slice(0, 5);
  }
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: backgroundColor,
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <Container maxWidth="lg">
        <NewsSlider heading={heading} subHeading={subHeading} data={allNews} />
      </Container>
    </div>
  );
};

export default NewsSection;
