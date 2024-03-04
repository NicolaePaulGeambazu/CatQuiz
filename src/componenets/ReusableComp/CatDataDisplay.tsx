import { CatDataDisplayProps } from "../../types";

const CatDataDisplay = ({ catData }: CatDataDisplayProps) => {
  return (
    <div>
      <p>Origin: {catData.origin}</p>
      <p>Temperamental: {catData.temperament}</p>
      <p>Life Expectation: {catData.life_span} years</p>
    </div>
  );
};

export default CatDataDisplay;
