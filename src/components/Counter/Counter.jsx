import {useState} from "react";  
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notifications/Notification";
import Section from "components/Section/Section";

const options = ["Good", "Neutral", "Bad"];

const Counter = () => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
    
    const onFeedback = e => {

        let name = e.target.name[0].toUpperCase() + e.target.name.slice(1)
    
        switch (name) {
            case "Good":
                setGood(good + 1)
                break;
            case "Neutral":
                setNeutral(neutral + 1)
                break;
            case "Bad":
                setBad(bad + 1)
                break;
            default:
                return;
        }
    }

const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
}

const total = good + neutral + bad;
const positivePercentage = countPositiveFeedbackPercentage();

    return (
        <>
            <Section title="Please leave feedback">

            <FeedbackOptions
            options = {options}
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
                    positivePercentage={positivePercentage}
                />) : 
                    ( <Notification 
                        message = "There is no feedback"
                        />)}
                </Section>
            </>
    )
}




export default Counter;