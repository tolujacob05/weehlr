import React, { useEffect, useState } from "react";
import Button from "./Button";
// import Logo from "./Logo";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Home() {
  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  // const [per_page] = useState(2);
  const [url, setUrl] = useState(
    // ` https://techcrunch.com/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}`
    "https://techcrunch.com/wp-json/wp/v2/posts"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        // setUrl("https://techcrunch.com/wp-json/wp/v2/posts");
        setBlog(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  console.log(blog);

  const loadMore = () => {
    setPage((prev) => prev + 3);
  };

  // if (isLoading) return <Spinner />;

  return (
    <div className="container">
      <section className="blog">
        {blog.slice(0, page).map((item) => (
          <div className="blog-1" key={item.id}>
            <div className="span">
              <span>{}</span>
              <span>{item.yoast_head_json?.og_type}</span>
            </div>
            <div className="blog-img">
              <img src={item.yoast_head_json?.og_image[0].url} alt="" />
            </div>
            <div className="blog-mini">
              <div className="blog-span">
                <p>{item.primary_category?.name}</p>
                <p>{formatDate(item.meta.apple_news_api_created_at)}</p>
              </div>
              <h1>{item.yoast_head_json?.og_title}</h1>
              <p>{item.yoast_head_json?.description}</p>
              <div className="blog-author">
                <div className="auth-btn">
                  <div className="blog-img--2">
                    <img
                      src={item.yoast_head_json.schema.graph?.author.id}
                      alt=""
                    />
                  </div>
                  <div className="auth-name">
                    <p>{item.yoast_head_json.author}</p>
                    <p>{formatDate(item.date)}</p>
                  </div>
                </div>

                <a href="#" className="btn">
                  Full read
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="button">
        <Button onClick={loadMore} disabled={isLoading}>
          LOAD MORE
        </Button>
        {/* <Spinner />; */}
      </div>
    </div>
  );
}

export default Home;
