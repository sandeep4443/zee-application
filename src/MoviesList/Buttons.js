const Buttons = ({ logout }) => {
    return (
        <div style ={{margin: 30 +'px'}}>
            <input
                type="button"
                class="btn btn-success"
                value="Move to Checkboxes"
                onClick={() => logout()}
            />
        </div>
    );
}; export default Buttons;