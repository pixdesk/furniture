import React from "react";

var Data = [
    {name: "saurabh",age: "24", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {name: "shadab",age: "19", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {name: "sahnoo",age: "21", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {name: "rohit",age: "28", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"}
]

const Loop = () =>{
    return(
        <>
            <h2 style={{textAlign: "center"}}>Loop</h2>
            <div className="container">
                <div className="row">
                    {Data.map(eachdata => 
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">{eachdata.name}</h5>
                            <span>Age: {eachdata.age}</span>
                            <p className="card-text">{eachdata.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>    
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Loop;