import React, { useEffect, useState } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Home() {
  const [blog, setBlog] = useState([]);
  const [url, setUrl] = useState("https://techcrunch.com/wp-json/wp/v2/posts");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // setUrl("https://techcrunch.com/wp-json/wp/v2/posts");
        setBlog(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [url]);

  console.log(blog);

  return (
    <>
      <section className="blog">
        {blog.map((item) => (
          <div className="blog-1" key={item.id}>
            <div className="span">
              <span>w</span>
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

                <div className="btn">Read More</div>
              </div>
            </div>
          </div>
        ))}

        {/*
        <div className="container">
          <div className="blog-2">
            <div className="blog-2--img">
              <img />
            </div>
            <div className="blog-2--mini">
              <div className="blog-2--span">
                <p>Sales</p>
                <p>Sales</p>
              </div>
              <h1>HACKEEM</h1>
              <div className="blog-author">
                <div className="auth-btn">
                  <div className="blog-img--2">
                    <img />
                  </div>
                  <div className="auth-name">
                    <p>James</p>
                    <p>Date</p>
                  </div>
                </div>

                <div className="btn">Read More</div>
              </div>
            </div>
          </div>

          <div className="blog-2">
            <div className="blog-2--img">
              <img />
            </div>
            <div className="blog-2--mini">
              <div className="blog-2--span">
                <p>Sales</p>
                <p>Sales</p>
              </div>
              <h1>HACKEEM</h1>
              <div className="blog-author">
                <div className="auth-btn">
                  <div className="blog-img--2">
                    <img />
                  </div>
                  <div className="auth-name">
                    <p>James</p>
                    <p>Date</p>
                  </div>
                </div>

                <div className="btn">Read More</div>
              </div>
            </div>
          </div>

          <div className="blog-2">
            <div className="blog-2--img">
              <img />
            </div>
            <div className="blog-2--mini">
              <div className="blog-2--span">
                <p>Sales</p>
                <p>Sales</p>
              </div>
              <h1>HACKEEM</h1>
              <div className="auth-name--2">
                <p>James</p>
                <span>Date</span>
              </div>{" "}
              <div className="blog-author">
                <div className="auth-btn">
                  <div className="blog-img--2">
                    <img />
                  </div>
                  <div className="auth-name">
                    <p>James</p>
                    <p>Date</p>
                  </div>
                </div>

                <div className="btn">Read More</div>
              </div>
            </div>
          </div>

          <div className="blog-2">
            <div className="blog-2--img">
              <img />
            </div>
            <div className="blog-2--mini">
              <div className="blog-2--span">
                <p>Sales</p>
                <p>Sales</p>
              </div>
              <h1>HACKEEM</h1>
              <div className="blog-author">
                <div className="auth-btn">
                  <div className="blog-img--2">
                    <img />
                  </div>
                  <div className="auth-name">
                    <p>James</p>
                    <p>Date</p>
                  </div>
                </div>

                <div className="btn">Read More</div>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>
    </>
  );
}

export default Home;
