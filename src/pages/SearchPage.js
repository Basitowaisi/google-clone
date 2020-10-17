import React from "react"
import { useStateValue } from "../StateProvider"
import useGoogleSearch from "../useGoogleSearch"
import "./SearchPage.css"
import { Link } from "react-router-dom"
import Search from "../components/Search"
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import RoomIcon from "@material-ui/icons/Room"
import MoveVertIcon from "@material-ui/icons/MoreVert"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"

const SearchPage = () => {
  const [state, dispatch] = useStateValue()
  const { query } = state
  const { data } = useGoogleSearch(query)
  return (
    <div className="searchPage">
      <div className="searchPage__Header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className="searchPage__logo"
            alt="Google Clone Logo"
          />
        </Link>
        <div className="searchPage__HeaderBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoveVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {query && (
        <div className="searchPage__Results">
          <p className="searchPage__ResultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {query}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__Result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0
                  ? item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage__ResultImage"
                        src={item.pagemap?.cse_image[0]?.src}
                      />
                    )
                  : null}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__ResultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__ResultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
