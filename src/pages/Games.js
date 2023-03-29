/* all the below imports will be used further down in Games page code */
import { useState, useEffect} from 'react'
import { Link } from "react-router-dom";

import api from '../api'

/* import GameCard from '../GameCard';-- I decided not to use the games card so I could use an new UI, 'SHARD UI' for this project */

/* The below URL is where I will pull in data for the top 20 streaming videos games in twitch ready to be used in the useEffect hook */
const API_URL = 'https://api.twitch.tv/helix/games/top'


const Games = () => {
    /*below I will use the UseState hook in my Games function to pull in a blank array where I will pull the top 20 popular streaming games from the Twitch API ready to bu used in the return section*/
    const [games, setGames] = useState([]);

    /* I will use the useEffect hook to fetch the data from the Twitch API, I will need to use the async function to carry out the API call*/
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`${API_URL}`)
            console.log(response.data)//I used the console.log to visualise the fetched data in the fetch data funxtion
            let dataArray = response.data.data
            let finalArray = dataArray.map(game => {
                /* the below function is replacing the width & height in the current fetched box_art_url images size with the sizes I want artwork to display in my project*/
                let newURL = game.box_art_url.replace('{width}', '200').replace('{height}', '200')
                game.box_art_url = newURL /* this is my new generated url with the sizes I have chosen */
            })//the below is my state update
            setGames(response.data.data)
        }//the below is calling the fetch data async function I created above
        fetchData()
    },[])
    //below is the html which will generated on the page using the above generated data
    return (
        <div className="game">
        <h1 className="gameTitle">Top 20 Game Streams</h1><div className="game-container">
            {/* Below is giving me access the the games data I fetched in my const games function above and use the .map to use the array to create elements dynamically */}
        {games.map(game => (
            /* all classNames below are labelled in bootstrap format so that I didn't have to worry about too much CSS in this project but I intend to try refactor this to match the Movies section following the project, I used bootstrap to show I could use as many UI's/libraries as possible for marks only*/
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5"> {/* this is setting the page up as column based to make is better for mobile as well as desktop */}
                    <div className="game-card"> {/* this card will display the box art url as well as a button with a link which will take you the the page where you can view the streams. I will not have enough time to work on the page where to view the stream but the button will at least take you to the link */}
                        <img className="game-card-img-top" src={game.box_art_url}  />
                            <div className="card-body">
                                    <button className="btn btn-success">Watch:
                                        <Link className="link" to={{pathname: "game/" + game.name, state: { gameID: game.id}
                                        }}>{game.name} streams{" "} </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
    );
}

export default Games
