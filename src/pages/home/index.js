import React, { useEffect, useState } from "react";

const Home = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    return (
        <>
            {!isAuthenticated ? (<div>
                <h1>Welcome To Management System!</h1>
            </div>) : null}
        </>
    );
}

export default Home;
