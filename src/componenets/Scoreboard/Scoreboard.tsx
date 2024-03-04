import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import { GiLaurelsTrophy } from "react-icons/gi";
import { ScoreBoardContainer } from '../Layout/Layout.style';

interface ScoreboardProps {
  iscorrect: boolean | null;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ iscorrect }) => {
  const [progress, setProgress] = useState<number>(50);

  useEffect(() => {
    if (iscorrect === true) {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    } else if (iscorrect === false) {
      setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
    }
  }, [iscorrect]);

  const lineStyles = {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    height: '10px',
    backgroundColor: 'transparent',
  };

  const pathStyles = {
    stroke: 'green',
    transition: 'stroke-dashoffset 0.5s ease',
  };

  const trailStyles = {
    backgroundColor: 'red',
  };

  return (
    <ScoreBoardContainer>
      <Line 
        percent={progress} 
        strokeWidth={3} 
        trailWidth={3} 
        strokeColor={pathStyles.stroke} 
        trailColor={trailStyles.backgroundColor} 
        style={lineStyles} />
      <GiLaurelsTrophy />
    </ScoreBoardContainer>
  );
};

export default Scoreboard;
