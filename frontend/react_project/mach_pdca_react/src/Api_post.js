import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function ApiPost() {
    const [pdca,setPdcaes] = useState({
        title:"",
        goal:"",
        p:"",
        weight:"",
        deadline:""
    })


    const handleChange = (e) =>{
        const value = e.target.value;
        setPdcaes({
            ...pdca,
            [e.target.name]: value,
        })
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const pdcaData = {
            title: pdca.title,
            goal: pdca.goal,
            p: pdca.p,
            weight: pdca.weight,
            deadline: pdca.deadline
        };
        axios.post('http://localhost:8000/api/pdcaes/',pdcaData)
        .then(res => {
            setPdcaes(res.data)
        })
        .catch(function(error){
            console.log(error)
        });
        navigate('/');
    }

    return(
        <div>
            <h1>ApiPost</h1>
            <form onSubmit={handleSubmit}>
                <li htmlFor="title">
                Title
                <input
                    type="title"
                    name="title"
                    value={pdca.title}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="goal">
                Goal
                <input
                    type="goal"
                    name="goal"
                    value={pdca.goal}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="p">
                P
                <input
                    type="p"
                    name="p"
                    value={pdca.p}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="weight">
                Weight
                <input
                    type="weight"
                    name="weight"
                    value={pdca.weight}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="deadline">
                Deadline
                <input
                    type="deadline"
                    name="deadline"
                    value={pdca.deadline}
                    onChange={handleChange}
                />
                </li>
                <button type="submit">Update</button>
            </form>
        </div>
    )

}
export default ApiPost;
