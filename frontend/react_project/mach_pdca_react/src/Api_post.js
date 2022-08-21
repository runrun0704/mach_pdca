import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiPost() {
    const [pdca,setPdcaes] = useState([])
    /* 
    import React, { useState } from "react";
    import axios from "axios";

    const App = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
        ...data,
        [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
        email: data.email,
        password: data.password
        };
        axios.post("https://reqres.in/api/login", userData).then((response) => {
        console.log(response.status);
        console.log(response.data.token);
        });
    };

    return (
        <div>
        <h1>Login Account</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
            Email
            <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            </label>
            <label htmlFor="password">
            Password
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Login</button>
        </form>
        </div>
    );
    }; */
    
    useEffect(() => {
        //POSTメソッドでフォームを作成可能な気がする。
        //GETメソッドでデータを取得して変数に代入。その後POSTメソッドでデータを加工する。
        axios.post('http://localhost:8000/api/pdcaes/',{
            //URLの最後に"/"を入れるとPOSTメソッドが通った。
            id:4,
            title:"post_test_2",
            goal:"post_test_2",
            p:"post_test_2",
            weight:2,
            deadline:"2022-07-19"
        })
        .then(res => {
            setPdcaes(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])

    return(
        <div>
            <h2>Api_post</h2>
            <div>
                
            </div>
        </div>
    )
    
}
export default ApiPost;