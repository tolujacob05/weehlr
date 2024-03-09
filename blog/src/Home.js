import React, { useState } from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

// const BASE_URL = "https://techcrunch.com/wp-json/wp/v2/posts";

const per_page = 6;

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Home({ isLoading, blog, timeAgo }) {
  const [page, setPage] = useState(per_page);
  // const [reload, setReload] = useState

  const loadMore = () => {
    setPage((prev) => prev + 4);
    if (isLoading) return <Spinner />;
  };

  const navigate = useNavigate();

  function load(id) {
    // window.location.reload(true);
    navigate(`/pages/${id}`);
    window.location.reload(false);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="container">
      <section className="blog">
        {blog.slice(0, page).map((item) => (
          <div className="blog-1" key={item.id} onClick={() => !load(item.id)}>
            <div className="span">
              <span>
                {item.yoast_head_json.twitter_misc["Est. reading time"]}
              </span>
              <span>{item.yoast_head_json?.og_type}</span>
            </div>
            <div className="blog-img">
              <img src={item.yoast_head_json?.og_image[0].url} alt="" />
            </div>
            <div className="blog-mini">
              <div className="blog-span">
                <p>{item.primary_category?.name}</p>
                <p>{timeAgo(item?.date)}</p>
              </div>
              <h1>{item.yoast_head_json.og_title}</h1>
              <p>{item.yoast_head_json?.description}</p>
              <div className="blog-author">
                <div className="auth-name">
                  <p>{item.yoast_head_json?.author}</p>
                  <p>{formatDate(item.date)}</p>
                </div>

                <div className="btn" onClick={() => load(item.id)}>
                  <button>full read &rarr;</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="button">
        {page <= 10 ? (
          <Button onClick={loadMore} disabled={isLoading}>
            LOAD MORE
          </Button>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
