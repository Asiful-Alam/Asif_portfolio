import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Compo/Footer';
import Navbar from '../Component/Navbar';
const ROot = () => {
    return (
        <div>
           <div className="px-4 md:px-8 lg:px-16 xl:px-24">
           <Navbar></Navbar>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ROot;