import { Avatar } from "@material-ui/core"
import AppsIcon from "@material-ui/icons/Apps"
import React from "react"
import { Link } from "react-router-dom"
import Search from "../components/Search"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Clone Logo"
        />
        <div className="header__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
