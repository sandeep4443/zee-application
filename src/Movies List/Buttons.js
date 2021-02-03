const Buttons = ({ logout, pagination }) => {
  return (
    <>
              
      <div>
                
        <input
          type="button"
          class="btn btn-info export"
          value="Next"
          onClick={() => logout()}
        />
              
      </div>
            
      <div>
                
        <input
          type="button"
          class="btn btn-info export"
          value="Pagination"
          onClick={() => pagination()}
        />
              
      </div>
            
    </>
  );
};
export default Buttons;
