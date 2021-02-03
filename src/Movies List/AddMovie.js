const AddMovie = ({ findGetValue, addMovie }) => {
  return (
    <>
                  
      <div>
                        
        <div>
                              <label>Enter Title:</label>                    
          <input type="text" id="Title" onChange={findGetValue} />
                              
          <br />
                          
        </div>
                        
        <div>
                              <label>Enter Release_Date:</label>
                              
          <input type="text" id="Release_Date" onChange={findGetValue} />
                              
          <br />
                          
        </div>
                        
        <div>
                              <label>Enter Distributor:</label>
                              
          <input type="text" id="Distributor" onChange={findGetValue} />
                              
          <br />
                          
        </div>
                        
        <div>
                              <label>Enter Major_Genre:</label>
                              
          <input type="text" id="Major_Genre" onChange={findGetValue} />
                              
          <br />
                          
        </div>
                        
        <div>
                              <label>Enter Director:</label>                    
          <input type="text" id="Director" onChange={findGetValue} />
                              
          <br />
                          
        </div>
                    
      </div>
                  
      <button class="btn btn-primary" onClick={addMovie}>
        ADD MOVIE
      </button>
              
    </>
  );
};
export default AddMovie;
