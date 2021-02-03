const TableList = ({
  movieinfo,
  editMovie,
  deleteMovies,
  booleanValue,
  moviesCount,
  findMovies,
}) => {
  return (
    <div style={{ margin: 20 + "px" }}>
            
      <div>
                <label>Enter Title:</label>        
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={findMovies}
        ></input>
              
      </div>
            {booleanValue && <h3>{moviesCount} results found</h3>}      
      <table id="t01">
                
        <thead>
                    
          <tr>
                        <th>Title</th>            <th>Director</th>            
            <th>Release_Date</th>            <th>Distributor</th>            
            <th>Major_Genre</th>            <th>Edit Movie</th>            
            <th>Delete Movie</th>          
          </tr>
                  
        </thead>
                
        <tbody>
                    
          {movieinfo.map((details, index) => {
            return (
              <tr>
                                <td>{details.Title} </td>                
                <td>{details.Director} </td>                
                <td>{details.Release_Date} </td>                
                <td>{details.Distributor} </td>                
                <td>{details.Major_Genre} </td>                
                <td>
                                    
                  <button
                    onClick={() => {
                      editMovie(index);
                    }}
                  >
                                        Edit                    
                  </button>
                                  
                </td>
                                
                <td>
                                    
                  <button
                    onClick={() => {
                      deleteMovies(index);
                    }}
                  >
                                        Delete                    
                  </button>
                                  
                </td>
                              
              </tr>
            );
          })}
                  
        </tbody>
              
      </table>
          
    </div>
  );
};
export default TableList;
