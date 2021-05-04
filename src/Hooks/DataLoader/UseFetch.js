import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
    loading: "",
    error: "",
    data: []
};

const apiReducer = (state, action) => {
    switch (action.type) {
        case "DATA_FETCH_START":
            return { ...state, loading: "yes" };
        case "DATA_FETCH_FAILURE":
            return { ...state, loading: "", error: action.payload };
        case "DATA_FETCH_SUCCESS":
            return { ...state, loading: "", data: action.payload };
        default:
            return state;
    }
}

/**
"Warning: An Effect function must not return anything besides a function,
which is used for clean-up." Followed by a complete explanation of what I was doing wrong. How nice!
Turns out you cannot return a Promise from useEffect.
JavaScript async functions always return a promise and useEffect should exclusively return another function, 
which is used for cleaning up the effect.
That is, if you were to start setInterval in useEffect you would return a function for cleaning up the interval to avoid memory leaks.
 */

export const useFetch = endpoint => {
    const [data, dispatch] = useReducer(apiReducer, initialState);
    async function getData() {
        await axios.get(endpoint)
            .then(response => {
                return response;
            })
            .then(json => {
                dispatch({ type: "DATA_FETCH_SUCCESS", payload: json });
            })
            .catch(error => {
                dispatch({ type: "DATA_FETCH_FAILURE", payload: error.message });
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return data;
}


