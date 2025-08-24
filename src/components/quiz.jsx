import { useState } from "react";
import Results from "./results";

function Quiz()
{
    const questionBank = [
        {
        "question": "What is the chemical symbol for gold?",
        "options": ["Ag", "Au", "Gd", "Go"],
        "answer": "Au"
        },
        {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Venus", "Jupiter", "Mars", "Saturn"],
        "answer": "Mars"
        },
        {
        "question": "What gas do humans exhale during respiration?",
        "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "answer": "Carbon dioxide"
        },
        {
        "question": "The process by which plants make their own food using sunlight is called…",
        "options": ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
        "answer": "Photosynthesis"
        },
        {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Iron", "Diamond", "Quartz", "Granite"],
        "answer": "Diamond"
        },
        {
        "question": "Which part of the cell contains the genetic material (DNA)?",
        "options": ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"],
        "answer": "Nucleus"
        },
        {
        "question": "Which force keeps planets in orbit around the sun?",
        "options": ["Magnetism", "Gravity", "Friction", "Nuclear force"],
        "answer": "Gravity"
        }
    ];

    const initialAnswers = [null, null, null, null, null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option)
    {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext()
    {
        if(currentQuestion === questionBank.length - 1)
        {
            setIsQuizFinished(true);
        }
        else
        {
            setCurrentQuestion(currentQuestion+1);
        }
    }

    function goToPrev()
    {
        if(currentQuestion > 0)
        {
            setCurrentQuestion(currentQuestion-1);
        }
    }

    function restartQuiz()
    {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished)
    {
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>
    }

    return (
        <div>

            <h2> Question {currentQuestion + 1}</h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>

            {questionBank[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer === option ? " selected" : "")}  onClick={() => handleSelectOption(option)}>{option}</button>
            ))}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={currentQuestion === 0} > Previous</button>
                <button onClick={goToNext} disabled={selectedAnswer === null}> 
                        {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                    </button>

            </div>
        </div>
    );
}

export default Quiz;