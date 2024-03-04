import { useEffect, useState } from 'react';

const useRandomChoices = (correctBreed: string, otherBreeds: string[]) => {
  const [shuffledChoices, setShuffledChoices] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = shuffle(otherBreeds).slice(0, 4);
    const allChoices = [correctBreed, ...shuffled];

    setShuffledChoices(shuffle(allChoices));
  }, [correctBreed]);

  const shuffle = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return shuffledChoices;
};

export default useRandomChoices;
