import React, { createContext, useContext, useState, useEffect } from 'react';
import { CatData, LayoutProps } from '../types';
import { useQuery } from 'react-query';
import Loader from '../componenets/ReusableComp/Loader';

interface QuizContextType {
  catData: CatData[];
  score: number;
  currentQuestion: number;
  userAnswers: string[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  isFlipped: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }: LayoutProps) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [catData, setCatData] = useState<CatData[]>([]);

  const { data: initialCatData, isLoading, isError } = useQuery<CatData[]>('catData', async () => {
    const apiKey = 'live_WMMt3HopTX6LJ9RdOrC2niw1SrkJixW6mTkpLQdF4rMLv2oDw5eKyj0PahFSkaFJ';
    const url = 'https://api.thecatapi.com/v1/breeds';
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch cat data');
    }
  
    const jsonData: CatData[] = await response.json();
  
    // Filter out objects without alt_name, I notice that some of them have alt_name what indicate to me that will not be a pure breed
    const filteredData = jsonData.filter((item: CatData) => item.alt_name !== '');
  
    return filteredData;
  });

  useEffect(() => {
    if (initialCatData) {
      setCatData(initialCatData);
    }
  }, [initialCatData]);

  const handleNextQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>Error fetching cat data</div>;

  const value = {
    catData: catData || [],
    score,
    currentQuestion,
    userAnswers,
    isFlipped,
    setScore,
    setCurrentQuestion,
    setUserAnswers,
    setIsFlipped,
    handleNextQuestion,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
