import {NavLink,useParams,} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from './baseURL';

function ApiDetail(){
    const {id} = useParams();

    const [pdca,setPdcaes] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/${id}`)
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    return (
        <div>
            <div>
                <p>{pdca.id}</p>
                <p>{pdca.p}</p>
                <p>{pdca.d}</p>
                <p>{pdca.c}</p>
                <p>{pdca.a}</p>
                <p>{pdca.title}</p>
                <p>{pdca.goal}</p>
                <p>{pdca.weight}</p>
                <p>{pdca.comment}</p>
                <p>{pdca.condition}</p>
                <p>{pdca.tag_name}</p>
                <p>{pdca.user_name}</p>
                <p>{pdca.created}</p>
                <p>{pdca.updated}</p>

            </div>
            <div>
                <NavLink to={`/pdca/${id}/update`}>Update</NavLink>
                <NavLink to={`/pdca/${id}/delete`}>Delete</NavLink>
                <NavLink to={'/'}>Back</NavLink>
            </div>
        </div>
    );
}

export default ApiDetail;
