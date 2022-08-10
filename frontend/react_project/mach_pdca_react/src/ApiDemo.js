import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiDemo() {
    const [pdca,setPdcaes] = useState([])

    useEffect(() => {
        //POSTメソッドでフォームを作成可能な気がする。
        //GETメソッドでデータを取得して変数に代入。その後POSTメソッドでデータを加工する。
        axios.get('http://localhost:8000/api/pdcaes')
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    return(
        <div>
            <h2>APIのdemoを表示したい</h2>
            <div>
                {pdca.map(item => (
                    <div>
                        <p>{item.p}</p>
                        <p>{item.d}</p>
                        <p>{item.c}</p>
                        <p>{item.a}</p>
                        <p>{item.title}</p>
                        <p>{item.goal}</p>
                        <p>{item.weight}</p>
                        <p>{item.comment}</p>
                        <p>{item.condition}</p>
                        <p>{item.tag_name}</p>
                        <p>{item.user_name}</p>
                        <p>{item.created}</p>
                        <p>{item.updated}</p>
                        <h3>〆</h3>
                    </div>
                ))}
            </div>
        </div>
    )
    
}
export default ApiDemo;