import {useState} from "react";  
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notifications/Notification";
import Section from "components/Section/Section";

const Counter = () => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
    
const onFeedback = e => {

    switch (e.target.name) {
        case "good":
            setGood(prevState => prevState + 1)
            break;
        case "neutral":
            setNeutral(prevState => prevState + 1)
            break;
        case "bad":
            setBad(prevState => prevState + 1)
            break;
        default:
            return;
    }
    }
    
const total = good + neutral + bad;
    
const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
}

    return (
        <>
            <Section title="Please leave feedback">

            <FeedbackOptions
            options={Object.keys({ good, neutral, bad})}
            onLeaveFeedback={onFeedback}
            />
            </Section>

            <Section title = "Statistics">
                {total ? (
                    < Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />) : 
                    ( <Notification 
                        message = "There is no feedback"
                        />)}
                </Section>
            </>
    )
}




export default Counter;