import React, { Component } from "react";
import "../Home/Home.css";
import { Link, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Listings from "../Listings/Listings";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios.get("/api/auth/listings").then(res => {
      this.setState({
        listings: res.data
      });
    });
  }
  render() {
    let image =
      "data:image/jpeg;base64,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";
    let mappedListings = this.state.listings.map((val, index) => {
      return (
        <div>
          <h4 key={index}>
            {" "}
            Address:{val.address} {val.city}, {val.state}
          </h4>
          <h3> Price:{val.askingprice}</h3>
          <h3> Year Built:{val.yearbuilt}</h3>
          <img src={image}></img>
          <h3>{val.description}</h3>
          <Link to={`listing/${val.id}`}>
            <button>More Info</button>
          </Link>
        </div>
      );
    });
    return (
      <div>
        <Navbar />
        <h1>About Cheryl</h1>
        <p>
          About Cheryl I am a lifetime resident of Tooele County and a full time
          realtor. Most of my business is referrals from happy and satisfied
          buyers and sellers. I have been a realtor for 27 years and I now am
          experiencing quite a bit of re-peat customers. I only work in Tooele
          County. I am an expert on the community having worked for Tooele
          County Economic Development and The Tooele County Chamber of Commerce
          and most of all having lived here all my life, raised my kids, now
          grandkids here. I love this County. I believe it is important to have
          someone not only sell the house, but sell the community as well. This
          is very important to buyers as well. After all its all about location
          in the real estate business. Should you decide to choose me, I promise
          to work hard to earn your referral, which is the highest compliment
          agents can receive. Enjoy your visit.
        </p>

        <div className="listings-info">{mappedListings}</div>
      </div>
    );
  }
}

export default Home;
