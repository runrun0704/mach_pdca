import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiPut() {
    const [pdca,setPdcaes] = useState([])

    useEffect(() => {
        //
        axios.get('http://localhost:8000/api/pdcaes/1')
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    return(
        <div>
            <h2>Api_Put</h2>
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
            </div>
        </div>
    )
    
}
export default ApiPut;