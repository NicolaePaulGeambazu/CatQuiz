import { useState } from 'react';
import { useQuizContext } from '../../context/QuizContext';
import { CatData } from '../../types';
import { ChoicesContainer } from './Components.style';
import Choice from './Choice';
import useRandomChoices from '../../hooks/useRandomChoices';
import { validateAnswer } from '../quizUtils';
import Modal from './Modal';

interface MultipleChoiceProps {
  onAnswer: (choice: string, iscorrect: boolean) => void;
  catDataQuestion: CatData;
}

const MultipleChoice = ({ onAnswer, catDataQuestion } : MultipleChoiceProps) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const { setCurrentQuestion, catData } = useQuizContext();
  const [iscorrect, setiscorrect] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const correctBreed = catDataQuestion?.name;
  const otherBreeds = catData.map((data: CatData) => data.name).filter(breed => breed !== correctBreed);
  const shuffledChoices = useRandomChoices(correctBreed || '', otherBreeds || []);

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
      validateAnswer(
      choice,
      catDataQuestion,
      onAnswer,
      setCurrentQuestion,
      setSelectedChoice,
      setiscorrect
    );
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedChoice(null);
    setiscorrect(null);
    setShowModal(false);
  };

  return (
    <ChoicesContainer>
      {shuffledChoices.map((choice, index) => (
        <Choice
          key={index}
          index={index}
          choice={choice}
          onClick={() => handleChoiceClick(choice)}
          isselected={choice === selectedChoice}
          iscorrect={iscorrect}
        />
      ))}
      {showModal && (
        <Modal onClose={closeModal} iscorrect={iscorrect} catDataQuestion={catDataQuestion} />
      )}
    </ChoicesContainer>
  );
};

export default MultipleChoice;
