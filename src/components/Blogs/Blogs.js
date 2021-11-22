import React from 'react';
import blog1 from '../../images/blogs/hiking.jpg';
import blog2 from '../../images/blogs/island.jpg';
import blog3 from '../../images/blogs/longtrip.jpg';
import blog4 from '../../images/blogs/traveling.jpg';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container">
            <h1 className="text-primary mt-3">This is Blogs</h1>
            <div className=" ">
                <div className="row mt-5 blogs-container">
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-75 rounded" src={blog1} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-4">
                        <h3>The Best Rope For Hiking</h3>
                        <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.[1] Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religio."Hiking" is the preferred term in Canada and the United States; the term "walking" is used in these regions for shorter, particularly urban walks.</p>
                    </div>
                </div>
                <div className="row mt-5 blogs-container">

                    <div className="col-lg-6 col-sm-12 mt-4">
                        <h3>The Best Rope For Hiking</h3>
                        <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.[1] Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religio."Hiking" is the preferred term in Canada and the United States; the term "walking" is used in these regions for shorter, particularly urban walks.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-75 rounded" src={blog2} alt="" />
                    </div>
                </div>
                <div className="row mt-5 blogs-container">
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-75 rounded" src={blog3} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-4">
                        <h3>The Best Rope For Hiking</h3>
                        <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.[1] Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religio."Hiking" is the preferred term in Canada and the United States; the term "walking" is used in these regions for shorter, particularly urban walks.</p>
                    </div>
                </div>
                <div className="row mt-5 blogs-container">

                    <div className="col-lg-6 col-sm-12 mt-4">
                        <h3 >The Best Rope For Hiking</h3>
                        <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.[1] Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religio."Hiking" is the preferred term in Canada and the United States; the term "walking" is used in these regions for shorter, particularly urban walks.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-75 rounded" src={blog4} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;