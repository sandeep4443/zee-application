import React from "react";
import { useFetch } from "./UseFetch";

const DataLoader = () => {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
    console.log("data is", data);
    return (
        <div style={{ textAlign: "center", margin: "30px" }}>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map(content => {
                        return (
                            <tr key={content.id}>
                                <td style={{ paddingTop: "10px" }}>{content.userId}</td>
                                <td style={{ paddingTop: "10px" }}>{content.title}</td>
                            </tr>
                        );
                    }) : ''}
                </tbody>
            </table>
        </div>
    );
};

export default DataLoader;