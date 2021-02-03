import React, { useState } from "react";
import Posts from "./Posts";
import PaginationCount from "./PaginationCount";
import "../App.css";
import MoviesList from "../movies.json";
const Pagination = (props) => {
  const [posts] = useState(MoviesList.slice(0, 1000));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); //get current posts  const indexOfLastPost = currentPage * postsPerPage;  const indexOfFirstPost = indexOfLastPost - postsPerPage;  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
            
      <Posts posts={currentPosts} />
            
      <PaginationCount
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
          
    </div>
  );
};
export default Pagination;
