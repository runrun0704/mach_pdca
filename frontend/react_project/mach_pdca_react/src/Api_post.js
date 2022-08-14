import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiPost() {
    const [pdca,setPdcaes] = useState([])

    useEffect(() => {
        //POSTメソッドでフォームを作成可能な気がする。
        //GETメソッドでデータを取得して変数に代入。その後POSTメソッドでデータを加工する。
        axios.post('http://localhost:8000/api/pdcaes',{
            p:"test"
        })
        .then(res => {
            setPdcaes(res.data)
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