import React, { useEffect, useState } from 'react';
import { GamesMetadata } from '../game-events-status/gamesMetaData';
import { stateToCss } from '../game-events-status/events-utils/events-utils';
import './game-info.scss'


function GameInfo(props) {
  const {
    gameID,
    showCompliance = true,
    showDocs = true,
    showStatus = true
  } = props;

  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {

    async function getGameStatus() {
      await fetch(`https://game-events-status.overwolf.com/${gameID}_prod.json`)
      .then(response => response.json())
      .then(data => setGameStatus(data));
    }

    getGameStatus();

  }, []);
  // ---------------------------------------------------------------------------

  return (
    <section className='game-info-section'>
      <div className="game-info-item">

        <h1
          className={`game-info-title ${gameStatus ? stateToCss(gameStatus.state) : ''}`}>

          <img src={GamesMetadata[gameID].iconLargeUrl}/>

          <span>{GamesMetadata[gameID].name}</span>

        </h1>

        <ul className='game-info-list'>

          <li>
            <span>Game ID:</span>{gameID}
          </li>

          { GamesMetadata[gameID].path && showStatus &&
            <li>
              <a href={`${GamesMetadata[gameID].path}`}>
                <svg>
                  <use href="../../img/sprite.svg#urlIcon" />
                </svg>
                Events Status page
              </a>
            </li>
          }

          { GamesMetadata[gameID].docs && showDocs &&
            <li>
              <a href={`${GamesMetadata[gameID].docs}`}>
                <svg>
                  <use href="../../img/sprite.svg#urlIcon" />
                </svg>
                API docs page
              </a>
            </li>
          }

          { GamesMetadata[gameID].compliance && showCompliance &&
            <li>
              <a href={`${GamesMetadata[gameID].compliance}`}>
                <svg>
                  <use href="../../img/sprite.svg#urlIcon" />
                </svg>
                Compliance page
                </a>
            </li>
          }

        </ul>

      </div>

      <ul className="legend">
        <li className="good">Good to go</li>
        <li className="medium">Some events may be unavailable</li>
        <li className="bad">Events are currently unavailable</li>
      </ul>
    </section>
  );

}

export default GameInfo;
