import React from "react";
const Posts = ({ posts }) => {
  return (
    <ul className="list-group mb-4">
                 
      {posts.map((post, index) => {
        return (
          <li key={index} className="list-group-item">
                               {post.Title}               
          </li>
        );
      })}
             
    </ul>
  );
};
export default Posts;
