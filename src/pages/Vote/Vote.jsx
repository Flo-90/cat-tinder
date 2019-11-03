import React, {useEffect, useState} from 'react';
import {voteContainer, imgContainer, buttons, button, svgStyle, cross, skip, pet, img, wrapper} from './vote.module.css';
import {ReactComponent as Cross} from '../../assets/images/icons/cross.svg';
import {ReactComponent as Skip} from '../../assets/images/icons/skip.svg';
import {ReactComponent as Heart} from '../../assets/images/icons/heart.svg';
import Statistics from '../../components/Statistics/Statistics.jsx';


const Vote = ({match}) => {

useEffect(() => {
    const fetchImages = async () => {

        const data = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=15&category_ids=${match.params.id}`, {
                method: 'GET',
                headers: {
                'x-api-key':  'a8bd2acd-8172-4346-a1cf-384b26f1fafc'
                }
            }
        );
    
        const response = await data.json();
        setImages(response);
        setLoaded(true);
    }
    fetchImages();
}, [match.params.id])

const [images, setImages] = useState('');
const [loaded, setLoaded] = useState(false);
const [activeImg, setActiveImg] = useState(0);
const [skipCount, setSkipCount] = useState(0);
const [petCount, setPetCount] = useState(0);
const [dontPetCount, setDontPetCount] = useState(0);





// Click Handler
const nextImg = () => {
    activeImg <15 ? setActiveImg(activeImg +1) : setActiveImg(0);
}

const dontPet = () =>{
    setDontPetCount(dontPetCount +1);
}

const skipCat = () =>{
    setSkipCount(skipCount +1);
}

const petCat = () =>{
    setPetCount(petCount +1);
}


if(loaded) {

    if(activeImg <15) {
        return (
            <div className={voteContainer}>
                <h2>Make a decision</h2>
                <div className={imgContainer}>
                    <div className={wrapper}>
                        {<div className={img}  style={{backgroundImage: 'url('+ images[activeImg].url +')'}}></div>}
                    </div>
                </div>
                <div className={buttons}>        
                    <div className={button} title="Don't pet cat" onClick={ () => {dontPet(); nextImg();}}>
                        <Cross className={`${svgStyle} ${cross}`}/>
                        <div>Nope</div>
                    </div>
                    <div className={button} title="Skip Cat" onClick={() => {skipCat(); nextImg();}}>
                        <Skip className={`${svgStyle} ${skip}`}/>
                        <div>Skip</div>
                    </div>
                    <div className={button} title="Pet Cat" onClick={() => {petCat();  nextImg();}}>
                        <Heart className={`${svgStyle} ${pet}`}/>
                        <div>Pet</div>
                    </div>
                </div>
            </div>
            
          );
    } else {
        return(
            
            <Statistics 
                totalVotes={skipCount + dontPetCount + petCount}
                skipCount={skipCount}
                dontCount={dontPetCount}
                petCount={petCount}
            />
        )
    }
} else {
    return(
        <h2>Loading</h2>
    )
 }

}

export default Vote;