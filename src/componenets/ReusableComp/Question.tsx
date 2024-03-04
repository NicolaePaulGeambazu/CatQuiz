import FlipCard from './FlipCard';
import MultipleChoice from './MultipleChoice';
import { QuestionProps } from '../../types';
import { BoxContainer, Image, QuestionContainer, QuestionText } from './Components.style';
import { useQuizContext } from '../../context/QuizContext';

const Question = ({ questionNumber, onAnswer, catData }: QuestionProps & { catData: any }) => {
  const { setIsFlipped, setCurrentQuestion } = useQuizContext();

  const handleAnswer = (choice: string, iscorrect: boolean) => {
    setTimeout(() => {
      onAnswer(choice, iscorrect);
      setIsFlipped(false);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }, 50000);
  };
  
  return (
    <QuestionContainer>
      <QuestionText>Question {questionNumber}: What breed is the below cat </QuestionText>
      <BoxContainer>
        <FlipCard front={<Image src={catData?.image.url} alt="Cat" />} back={catData} />
        <MultipleChoice catDataQuestion={catData} onAnswer={handleAnswer} />
      </BoxContainer>
    </QuestionContainer>
  );
};

export default Question;
