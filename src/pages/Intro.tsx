import { useNavigate } from 'react-router-dom';
import PrimaryCTA from '../componenets/ReusableComp/PrimaryCTA';
import { IntroContainer, IntroText } from './Pages.style';

const Intro = () => {
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo('/quiz');
  };

  return (
    <IntroContainer>
      <IntroText>
        <h2>Welcome to the Cat Quiz!</h2>
        <p>Are you ready to test your knowledge about cats?</p>
      </IntroText>
      <PrimaryCTA onClick={() => handleClick()}>Start Test</PrimaryCTA>
    </IntroContainer>
  );
};

export default Intro;
