import React from 'react';
import offers1 from '../../images/offers/offer1.jpg';
import offers2 from '../../images/offers/offer2.jpg';
import offers3 from '../../images/offers/offer3.jpg';
import offers4 from '../../images/offers/offer4.jpg';
import family from '../../images/family.webp';
import './Offers.css';

const Offers = () => {
    return (
        <div className="container">
            <h1 className="text-primary m-5">Family tour Offers</h1>
            <div className="row">
                <div className="col-lg-6 family-image col-sm-12">
                    <img src={family} alt="" />
                    <h5>Family Tour</h5>
                    <p className="px-5">Family is one of the integral parts of human beings. <br /> Every human is incomplete without a family. <br /> A family means to have a man, his wife, his kids, <br /> and his parents; all are living together. <br /> Humans are social being and thus needs <br /> companionship from others. </p>
                </div>
                <div className=" col-lg-6 col-sm-12 offer-image">
                    <div className="discount-offer">
                        <img src={offers1} alt="" />
                        <h4>Sajek Vally</h4>
                        <h4>Price: 8000</h4>
                    </div>
                    <div className="discount-offer">
                        <img src={offers2} alt="" />
                        <h3>Sylhet</h3>
                        <h4>Price: 8000</h4>
                    </div>
                    <div className="discount-offer">
                        <img src={offers3} alt="" />
                        <h3>Kuakata</h3>
                        <h4>Price: 5000</h4>
                    </div>
                    <div className="discount-offer">
                        <img src={offers4} alt="" />
                        <h3>Coxs-Bazar</h3>
                        <h4>Price: 4500</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
// https://bangladeshpost.net/webroot/uploads/uploads/2019-08/5d66885a613bc.jpg
export default Offers;