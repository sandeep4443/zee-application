import React from "react";
import { useFetch } from "./UseFetch";
import Spinner from '../../Utilities/Spinner';

const DataLoader = () => {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
    const value = ((data && data.data) && (data.data.data));

    return value === null ?
        (
            <Spinner />
        ) : (
            <div style={{ textAlign: "center", margin: "30px" }}>
                <table id="t01">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value ? value.map(({ id, userId, title }) => {
                            return (
                                <tr key={id}>
                                    <td style={{ paddingTop: "10px" }}>{userId}</td>
                                    <td style={{ paddingTop: "10px" }}>{title}</td>
                                </tr>
                            );
                        }) : ''}
                    </tbody>
                </table>
            </div>
        );
};

export default DataLoader;