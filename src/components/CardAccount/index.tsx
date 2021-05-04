import React, { HTMLAttributes } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './styles.css';

interface CardAccountProps extends HTMLAttributes<HTMLInputElement>{
  name: string,
  infoData?: Object,
  isFacebook?: boolean,
}

const CardAccount: React.FC<CardAccountProps> = ({ name, infoData, isFacebook,  children, ...rest }) => {

  return (
    <div className="face-account" {...rest}>


      {!infoData ? children :
        <div className="svg-container">
         { children }
        </div>
      }
      
      { !infoData && <h1>{name}</h1>}
      <div className="button-container">       
        { !infoData && <button type="submit" id="button-card-account">Vincular</button>}

        { infoData? 
          <>
            <div className="link-infodata">
                <div className="followers_count">
                  <FaArrowUp size={15}/>
                  <h1>{
                    //@ts-ignore
                    infoData.followers_count
                    }
                  </h1>
                </div>
              
              <div>
                <h2>{isFacebook?'Curtidas' : 'Seguidores'}</h2>
                <p>Até hoje</p>
              </div>
            </div>
            <hr/>
            { //@ts-ignore
            infoData.reach && 
              <div className="link-infodata">
                <div className="followers_count">
                  <FaArrowUp size={15}/>
                  <h1>
                    {//@ts-ignore
                    infoData.reach
                    }
                  </h1>
                </div>
              
                <div>
                  <h2>Pessoas atraídas</h2>
                  <p>Até hoje</p>
                </div>
              </div>
            }
          </>
          : ''                  
        }
      </div>
    </div>
  )
}

export default CardAccount;