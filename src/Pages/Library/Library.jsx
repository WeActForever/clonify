import { AiOutlineSearch } from "react-icons/ai";

import "./Library.css";
import DiscoverTile from "../../Components/DiscoverTile/DiscoverTile";

export function Library() {
  return (
    <>
      <div className="playlists__container">
        <div className="search__container">
          <AiOutlineSearch className="search__symbol" />
          <input type="search" placeholder=" Search for Playlists" />
        </div>
        <h2>Your Library</h2>
        <div className="create__playlist">
          <button>+</button>
          <h3>Create playlist</h3>
        </div>

        <div className="discover__playlist">
          <DiscoverTile
            title="Spotify Hits"
            description="Our own playlist. Give a try!"
            photo="/images/discover.png"
          />
          <DiscoverTile
            title="Summer Mix"
            description="2022"
            photo="/images/discover.png"
          />
          <DiscoverTile
            title="Hip-Hop 2000's"
            description="Best of all time"
            photo="/images/discover.png"
          />
          <DiscoverTile
            title="Afro Beat Mix"
            description="2022"
            photo="/images/discover.png"
          />
        </div>
      </div>
    </>
  );
}

export default Library;
