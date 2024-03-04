import { useQuizContext } from "../../context/QuizContext";
import { HeaderContainer, HeaderLogoContainer } from "./Layout.style";
import { FaCat } from "react-icons/fa";

const Header = () => {

  const { score } = useQuizContext();

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <FaCat fontSize={30} />
      <h1>Cute Cats Quiz</h1>
      </HeaderLogoContainer>
      <div>
        <h2>Score: {score}</h2>
      </div>
    </HeaderContainer>
  );
};

export default Header;