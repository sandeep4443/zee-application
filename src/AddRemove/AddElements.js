import React, { useState } from 'react'

const AddElements = () => {
    const [inputValues, setValues] = useState([
        {
            firstName: '',
            mail: '',
            error: false,
            errorMessage: ''
        }
    ]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputValues];
        list[index][name] = value;
        for (let i = 0; i < inputValues.length; i++) {
            for (let j = i + 1; j < inputValues.length; j++) {
                if (inputValues.length > 1) {
                    if ((list[i].firstName !== '' && list[j].firstName !== '') && (list[i].mail !== '' && list[j].mail !== '')) {
                        if ((list[i].firstName === list[j].firstName) && (list[i].mail === list[j].mail)) {
                            list[i].error = true;
                            list[i].errorMessage = "Duplicate Entries";
                            list[j].error = true;
                            list[j].errorMessage = "Duplicate Entries";
                        } else {
                            list[i].error = false;
                            list[i].errorMessage = '';
                            list[j].error = false;
                            list[j].errorMessage = '';
                        }
                    }
                }
            }
        }
        setValues(list);
    };

    const removeElement = index => {
        const list = [...inputValues];
        list.splice(index, 1);
        setValues(list);
    };

    const addElement = () => {
        setValues([...inputValues, { firstName: "", mail: "" }]);
    };
    return (
        <div style={{ margin: 30 + 'px' }}>
            {inputValues.map((val, i) => {
                return (
                    <div>
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
                            <div className="col-md-1">
                                <input
                                    type="button"
                                    className="addButton"
                                    value="Add"
                                    onClick={addElement}
                                />
                            </div>
                            <div className="col-md-2">
                                {inputValues.length != 1 &&
                                    <input
                                        type="button"
                                        className="removeButton"
                                        value="Remove"
                                        onClick={() => removeElement(i)}
                                    />
                                }
                            </div>
                        </div>
                        <div>
                            {val.error && <strong style={{ color: 'red' }}>{val.errorMessage}</strong>}
                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default AddElements;
