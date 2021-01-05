import React, { Component, useEffect, useState } from 'react';

// functional Component - React Hooks

const Index = () => {

    const [post, setPost] = useState({ hits: [] });
    // const [searchPost, setSearchPosts] = useState();
    // const [url, setUrl] = useState();

    // const fetchPost = () => {
    //     // fetch(`https://jsonplaceholder.typicode.com/comments?query=${searchPost}`)
    //     // .then(res => {
    //     //     console.log(res.json());
    //     // });
    //     fetch(`https://jsonplaceholder.typicode.com/comments`)
    //      .then(result => result.json())
    //     //  .then(data => console.log("my data: ", data))
    //      .then(data => setPost(data))
    //      .catch(err => console.log(err));
    // };

    // useEffect(() => {
    //     fetchPost();
    // }, [searchPost]);

    // const handleChange = e => {
    //     setSearchPosts(e.target.value);
    // }

    useEffect(() => {
        fetch(`https://hn.algolia.com/api/v1/search?query=react`)
        .then(res => {
            console.log(res.json());
        })
        .then(post => setPost(post))
    }, [])

    return(
        <div>
            <h2 className="text-danger mt-3">Posts</h2>
            {post.map((d) => <div key={d.objectID}>{d.title}</div>)} 
            {/* <form>
                <div className="row mt-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <input type="text" className="form-control float-right" value={searchPost} onClick={handleChange} />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary float-left w-50">Search</button>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </form>
            
            {
                post.map((mypost, index) => {
                    // <h4 key={index}>{mypost.name}</h4>
                    <p key={index}>{mypost.body}</p>
                })
            } */}
        </div>
    );

};


// class index extends Component {

//     constructor(){
//         super();

//     }


//     render() {
//         return (
//             <div>
//                 <form>
//                     <input type="text" className="form-group" />
//                     <button type="submit" className="btn btn-primary">Search</button>
//                     {
                        
//                     }
//                 </form>
//             </div>
//         );
//     }
// }


export default Index;