import React, {useState, useEffect} from 'react';
// import axios from 'axios';

function ApiCalls() {

    const [data, setData] = useState([]);

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(console.error)
    }, []);

    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <div className="row">
            {
                // console.log(data)
                data.map((postData) => {
                    // console.log(postData);
                    return(
                        <div className="col-3 my-3 text-center border mx-5" key={postData.id}>
                            <h3 className="text-danger">{postData.id}</h3>
                            <h4 className="text-success">{postData.name}</h4>
                            <div className="row">
                                {/* <div className="col-5 text-default"><b className="text-dark">User:</b>{postData.username}</div> */}
                                <div className="col-12 text-warning"><b className="text-dark">Email: </b>{postData.email}</div>
                            </div>
                            <div className="text-info">
                                <h6>
                                    <b className="text-dark">Address : </b>{postData.address.street},{postData.address.city},{postData.address.zincode}
                                    <br />
                                    <b className="text-dark">Lat : </b>{postData.address.geo.lat}, <b className="text-dark">Long : </b>{postData.address.geo.lng}
                                </h6>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default ApiCalls;