import { ReactNode } from "react";

export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }

export interface LayoutProps {
    children: ReactNode;
  }

export interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
  }

 export interface MultipleChoiceProps {
    onAnswer: (choice: string) => void;
    catDataQuestion: CatData;
  }

export interface QuestionProps {
  questionNumber: number;
  onAnswer: (answer: string, iscorrect: boolean) => void;
}

export interface ScoreboardProps {
  score: number;
  totalQuestions: number;
}

export interface CatData {
  id: string;
  breed: string;
  imageUrl: string;
  alt_name: string;
  name: string;
  description: string;
  temperament: string;
}

export interface CatDataDisplayProps {
  catData: any;
}

export interface ChoiceProps {
  index: number;
  choice: string;
  onClick: () => void;
  iscorrect: boolean | null;
  isselected: boolean;
}

export interface ModalProps {
  onClose: () => void;
  catDataQuestion: any;
  iscorrect: boolean | null ;
}