import { FlipCardProps } from '../../types';
import { Back, Card, CardContainer, CloseIcon, Front, InfoIcon } from './Components.style';
import CatDataDisplay from './CatDataDisplay';
import { useQuizContext } from '../../context/QuizContext';

const FlipCard = ({ front, back }: FlipCardProps) => {
  const { setIsFlipped, isFlipped } = useQuizContext();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
  // handleClick is implemented intentional to work like that and not be in onClick event
    <CardContainer onClick={handleClick}>
      <Card flipped={isFlipped}>
        <Front>
          <InfoIcon />
          {front}
        </Front>
        <Back>
          {back && typeof back === 'object' ? (
            <><CloseIcon /><CatDataDisplay catData={back} /></>
          ) : (
            <p>No data available</p>
          )}
        </Back>
      </Card>
    </CardContainer>
  );
};

export default FlipCard;
