import { useParams } from "react-router-dom";
import Home from "./Home";
import Spinner from "./Spinner";
import "./css/App.css";
import { useEffect, useState } from "react";
// import Logo from "./Logo";

function Pages({ isLoading, blog, setIsLoading, timeAgo }) {
  const { id } = useParams();
  console.log(id);

  const [useBlog, setUseBlog] = useState();

  useEffect(
    function () {
      setIsLoading(true);
      const newBlog = blog.find((item) => String(item.id) === id);
      setUseBlog(newBlog);
      setIsLoading(false);
    },
    [blog, id, setIsLoading]
  );

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="page-container" key={useBlog?.id}>
        <div className="full_auth">
          <p>{useBlog?.yoast_head_json?.author}</p>
          <p>{timeAgo(useBlog?.date)}</p>
        </div>
        <h1>{useBlog?.yoast_head_json.og_title}</h1>

        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: useBlog?.content.rendered }}
        />
      </section>

      <section className="cont-2">
        <h3>More articles</h3>
        <Home isLoading={isLoading} blog={blog} timeAgo={timeAgo} />
      </section>
    </>
  );
}

export default Pages;
