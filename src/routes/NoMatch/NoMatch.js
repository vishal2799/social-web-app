import React from 'react'
import bgImg from '../../assets/images/bg-43.png'
import Button from '../../components/UI/Button/Button'
import classes from './NoMatch.module.css'
import { useNavigate } from 'react-router-dom'
const NoMatch = () => {
    let navigate = useNavigate();

    return (
        <div>
            <div className={classes.NoMatch}>
            <img src={bgImg} />
            <h1>Oops! It looks like you're lost.</h1>
            <p>The page you're looking for isn't available. Try to search again or use the go to.</p>
            <Button variant="contained" onClick={() => navigate('/')}>Home Page</Button>
        </div>
        </div>
    )
}

export default NoMatch
