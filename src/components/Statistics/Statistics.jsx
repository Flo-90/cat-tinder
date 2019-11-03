import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Cross} from '../../assets/images/icons/cross.svg';
import {ReactComponent as Skip} from '../../assets/images/icons/skip.svg';
import {ReactComponent as Heart} from '../../assets/images/icons/heart.svg';
import {statisticsContainer, svgStyle, cross, skip, pet, backBtn } from './statistics.module.css';


const Statistics = ({totalVotes, skipCount, petCount, dontCount}) => {
  return (
    <Fragment>
        <h2>Total Votes: {totalVotes}</h2>
        <div className={statisticsContainer}>
            <div>
                <Cross className={`${svgStyle} ${cross}`}/>
                {dontCount}
            </div>
            <div>
                <Skip className={`${svgStyle} ${skip}`}/>
                {skipCount}
            </div>
            <div>
                <Heart className={`${svgStyle} ${pet}`}/>
                {petCount}
            </div>
        </div>

        <Link to="/">
            <div className={backBtn}>
                Back to overview
            </div>
        </Link>
        
    </Fragment>
  );
}

export default Statistics;