import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


function ApiPut() {
    const [pdca,setPdcaes] = useState({
        title:"",
        goal:"",
        p:"",
        d:"",
        c:"",
        a:"",
        weight:"",
        deadline:"",
        comment:"",
        condition:"",
        tag_name:""
    })

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pdcaes/${id}`)
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    const handleChange = (e) =>{
        const value = e.target.value;
        setPdcaes({
            ...pdca,
            [e.target.name]: value
        })
    }

    const navigate = useNavigate();

    const handlePutSubmit = (e) => {
        e.preventDefault();
        const pdcaData = {
            title: pdca.title,
            goal: pdca.goal,
            p: pdca.p,
            d: pdca.d,
            c: pdca.c,
            a: pdca.a,
            weight: pdca.weight,
            deadline: pdca.deadline,
            comment: pdca.comment,
            condition: pdca.condition,
            tag_name: pdca.tag_name
        };
        axios.put(`http://localhost:8000/api/pdcaes/${id}/`,pdcaData)
        .then(res => {
            setPdcaes(res.data)
            navigate(`/pdca/${id}`)
        })
        .catch(function(error){
            console.log(error)
        })

    }


    return(
        <div>
            <h2>Api_Put</h2>
            <form onSubmit={handlePutSubmit}>
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
                <li htmlFor="d">
                D
                <input
                    type="d"
                    name="d"
                    value={pdca.d}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="c">
                C
                <input
                    type="c"
                    name="c"
                    value={pdca.c}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="a">
                A
                <input
                    type="a"
                    name="a"
                    value={pdca.a}
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
                <li htmlFor="comment">
                Comment
                <input
                    type="comment"
                    name="comment"
                    value={pdca.comment}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="condition">
                Condition
                <input
                    type="condition"
                    name="condition"
                    value={pdca.condition}
                    onChange={handleChange}
                />
                </li>
                <li htmlFor="tag_name">
                TagName
                <input
                    type="tag_name"
                    name="tag_name"
                    value={pdca.tag_name}
                    onChange={handleChange}
                />
                </li>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default ApiPut;
