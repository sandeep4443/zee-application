import React, { useState } from 'react'

const AddElements = () => {
    const [inputValues, setValues] = useState([{ firstName: '', mail: '' }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputValues];
        list[index][name] = value;
        setValues(list);
        for (let i = 0; i < inputValues.length; i++) {
            for (let j = i + 1; j < inputValues.length; j++) {
                if (inputValues.length > 1) {
                    if ((list[i].firstName !== '' && list[j].firstName !== '') && (list[i].mail !== '' && list[j].mail !== '')) {
                        if ((list[i].firstName === list[j].firstName) && (list[i].mail === list[j].mail)) {
                            alert(`both First Name && Mail cannot be same`)
                        }
                    }
                }
            }
        }
    };

    const removeElement = index => {
        const list = [...inputValues];
        list.splice(index, 1);
        setValues(list);
        /*
           if (inputValues.length === 1) {
                var confirmDelete = confirm("Are you sure you want to delete ? Deleting now will loose all the information. You still want to continue ?");
                if (confirmDelete) {
                    const list = [...inputValues];
                    list.splice(index, 1);
                    setValues(list);
                }
            } else {
                return null;
            }
        **/

    };

    const addElement = () => {
        setValues([...inputValues, { firstName: "", mail: "" }]);
    };
    return (
        <div style={{ margin: 30 + 'px' }}>
            {inputValues.map((val, i) => {
                return (
                    <div className="row">
                        <div className="col-md-3">
                            <label>Enter Name:</label>
                            <input
                                name="firstName"
                                placeholder="Enter First Name"
                                value={val.firstName}
                                onChange={e => handleInputChange(e, i)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Enter Mail:</label>
                            <input
                                name="mail"
                                placeholder="Enter mail id"
                                value={val.mail}
                                onChange={e => handleInputChange(e, i)}
                            />
                        </div>
                        <div className="col-md-3" style={{ marginTop: 30 + 'px' }}>
                            {inputValues.length != 1 &&
                                <input
                                    type="button"
                                    className="removeButton"
                                    value="Remove"
                                    onClick={() => removeElement(i)}
                                />
                            }
                        </div>
                        <div className="col-md-3" style={{ marginTop: 30 + 'px' }}>
                            <input
                                type="button"
                                className="addButton"
                                value="Add"
                                onClick={addElement}
                            />
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default AddElements
