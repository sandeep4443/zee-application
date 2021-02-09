const Buttons = ({ logout }) => {
    return (
        <>
            <input
                type="button"
                class="btn btn-success"
                value="Move to Checkboxes"
                onClick={() => logout()}
            />
        </>
    );
}; export default Buttons;