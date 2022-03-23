import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () =>{
    const { index } = useParams();
    console.log("id...", index);


    return (
        <div>
            <h2>Hello welcome to edit product pages</h2>
        </div>
    )

}

export default EditProduct;