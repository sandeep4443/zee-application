

const DropDowns = ({ dropDown }) => {
    return (
        <div style ={{margin: 30 +'px'}}>
            <input
                type="button"
                class="btn btn-success"
                value="Move to DropDowns"
                onClick={() => dropDown()}
            />
        </div>
    );
};
 export default DropDowns;
