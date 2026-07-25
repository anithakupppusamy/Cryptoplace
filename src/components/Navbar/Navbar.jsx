import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'
import {SignedIn, SignedOut, SignInButton, UserButton,} from "@clerk/clerk-react";
 
const Navbar = () => {

  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" })
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" })
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" })
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" })
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <Link to={'/'}> <img src={logo} className='logo' /></Link>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/pricing">Pricing</Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

    </div>
  )
}

export default Navbar