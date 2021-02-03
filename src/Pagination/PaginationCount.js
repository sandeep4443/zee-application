import React from "react";
const PaginationCount = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
                  
      <ul className="pagination">
                        
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className="page-item"
              onClick={() => paginate(number)}
            >
                                          
              <a href="" className="page-link">
                {number}
              </a>
                                                             
            </li>
          );
        })}
                    
      </ul>
              
    </nav>
  );
};
export default PaginationCount;
