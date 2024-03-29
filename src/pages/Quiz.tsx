import React, { useState } from 'react';
import { useQuizContext } from '../context/QuizContext';
import { PageContainer } from './Pages.style';
import Scoreboard from '../componenets/Scoreboard/Scoreboard';
import Question from '../componenets/ReusableComp/Question';

const Quiz = () => {
  const { score, currentQuestion, setScore, setCurrentQuestion, userAnswers, setUserAnswers, catData } = useQuizContext();
  const [iscorrect, setiscorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string, iscorrect: boolean) => {
    console.log(iscorrect);
    setUserAnswers([...userAnswers, answer]);
    setiscorrect(iscorrect);
    setScore(prevScore => iscorrect ? prevScore + 1 : prevScore);
  };

  return (
    <PageContainer>
      <Scoreboard iscorrect={iscorrect} />
      <Question
        questionNumber={currentQuestion + 1}
        onAnswer={handleAnswer}
        catData={catData[currentQuestion]}
      />
    </PageContainer>
  );
};

export default Quiz;
