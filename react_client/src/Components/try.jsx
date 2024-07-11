// Filename - App.js
 
// Importing modules
import React, { useState, useEffect } from "react";
 
function Try() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: ""
    });
 
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/").then(async (res)  =>
            await res.json().then((data) => {
                // Setting a data from api
                console.log(data)
                setdata({
                    name: data
                });
            })
        );
    }, []);
 
    return (
        <div>
            <header>
                <p>{data.name}</p>
                {console.log(data.name)}
            </header>
        </div>
    );
}
 
export default Try;