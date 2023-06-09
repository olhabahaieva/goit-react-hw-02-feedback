import { Component } from "react";
import css from './Feedback.module.css';

class Feedback extends Component {
   render(){
    return(
        <>
        <div className={css.feedback}>
            <h1 className={css.heading}>Please leave feedback</h1>
            <div className={css.buttonContainer}>
                <button className={css.button}>Good</button>
                <button className={css.button}>Neutral</button>
                <button className={css.button}>Bad</button>
            </div>
        </div>
        </>
    )
   }
}

export default Feedback;

