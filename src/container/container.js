import React, {Fragment,useState} from "react";
import { Link } from "react-router-dom";
import './container.css';

let type = '';
export let to = (x) => {
    type = x
    window.scrollTo(0,document.getElementById('Product').offsetTop - 100)
    };

let card = [
    {
        img: require("../img/Layer9.png"),
        name: "girl shoe",
        type: "weman",
        price: 200,
        discount: 50,
    },
    {
        img: require("../img/Layer10.png"),
        name: "girl shoe",
        type: "man",
        price: 200,
        discount: 50,
    },
    {
        img: require("../img/Layer3.png"),
        name: "girl shoe",
        type: "man",
        price: 200,
        discount: 50,
    },
    {
        img: require("../img/Layer2.png"),
        name: "girl shoe",
        type: "kids",
        price: 200,
        discount: 50,
    }, 
]

export const Container = () => {

    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    setInterval(() =>{
        let data = new Date("Dec 31,2022 23:59:59").getTime() - new Date().getTime();
        setHours(Math.floor(data % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        setMinutes(Math.floor(data % (1000 * 60 * 60) / (1000 * 60)));
        setSeconds(Math.floor(data % (1000 * 60) / (1000)));
    },1000);

    const Filters = () => {
        let i = card;
        i = i.filter((e) => type.length ? type === e.type:true)
        return i
    }

    const cardDom = Filters().map(({img,name,price,discount}, i) => (
        <div className="card" key={i}>
            <img src={img} alt=""/>
            <div className="info">
                <h3>{name}</h3>
                <div>${price}<span>${price - (price * discount * .01)}</span></div>                
            </div>
        </div>
    ))
    return (
        <Fragment>
            <div className="container">
                <section className="Feature">
                    <div className="card">
                        <i className="fas fa-magic fa-3x"></i>
                        <h3>Free Shipping</h3>
                        <p>Lorem text of the printing and type settiLorem Ipsum  dummy text of the printing and type setti</p>
                        <Link to="">Click here</Link>
                    </div>
                    <div className="card">
                        <i className="fas fa-magic fa-3x"></i>
                        <h3>Free Shipping</h3>
                        <p>Lorem Ipsum  dummy text of the printing and type settiLorem Ipsum  dummy text of the printing and type setti</p>
                        <Link to="">Click here</Link>
                    </div>
                    <div className="card">
                        <i className="fas fa-magic fa-3x"></i>
                        <h3>Free Shipping</h3>
                        <p>Lorem Ipsum  dummy text of the printing and type settiLorem Ipsum  dummy text of the printing and type setti</p>
                        <Link to="">Click here</Link>
                    </div>
                    <div className="card">
                        <i className="fas fa-magic fa-3x"></i>
                        <h3>Free Shipping</h3>
                        <p>Lorem Ipsum  dummy text of the printing and type settiLorem Ipsum  dummy text of the printing and type setti</p>
                        <Link to="">Click here</Link>
                    </div>
                </section>
                <section className="offers">
                    <div className="text">
                        <h5>Offer Of The Month</h5>
                        <h3>Phantom Vision Elite Dynamic</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and type settLorem Ipsum is simply dummy text of thebbv hyyu and type iLorem Ipsum is simply dummy text of the printing and type settiLorem Ipsum is simply dummy text of the printing and type </p>
                        <div className="price">$500 <span>$2000</span></div>
                        <div className="timer">
                            <div><span>{hours}</span>....<span>Hours</span></div>
                            <div><span>{minutes}</span>....<span>Minutes</span></div>
                            <div><span>{seconds}</span>....<span>Seconds</span></div>
                        </div>
                        <Link to="#" className="shop">SHOP NOW</Link>
                    </div>
                    <img src={require('../img/Image.png')} alt=""/>
                </section>
                <section class="Product" id="Product">
                    {cardDom}
                </section>
                <section className="images">
                    <img src={require('../img/Shape.png')} alt="Shape"/>
                    <img src={require('../img/Shape2.png')} alt="Shape"/>
                    <img src={require('../img/Shape3.png')} alt="Shape"/>
                    <img src={require('../img/Shape4.png')} alt="Shape"/>
                    <img src={require('../img/Shape5.png')} alt="Shape"/>
                    <img src={require('../img/Shape6.png')} alt="Shape"/>
                    <img src={require('../img/Shape7.png')} alt="Shape"/>
                    <img src={require('../img/Shape8.png')} alt="Shape"/>
                </section>
                <section className="brand">
                    <div><img src={require('../img/brand-logo.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-1.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-2.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-3.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-4.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-5.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-6.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-7.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-8.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-9.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-10.png')} alt="brand-logo"/></div>
                    <div><img src={require('../img/brand-logo-11.png')} alt="brand-logo"/></div>
                </section>
            </div>
        </Fragment>
    )
}


// export default Container;
