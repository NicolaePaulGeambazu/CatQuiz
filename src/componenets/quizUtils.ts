import { CatData } from "../types";

export const validateAnswer = (
    choice: string,
    catDataQuestion: CatData,
    onAnswer: (choice: string, iscorrect: boolean) => void,
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
    setSelectedChoice: React.Dispatch<React.SetStateAction<string | null>>,
    setiscorrect: React.Dispatch<React.SetStateAction<boolean | null>>
) => {
    const iscorrect = choice === catDataQuestion.name;
    setiscorrect(iscorrect);
    onAnswer(choice, iscorrect);
    setTimeout(() => {
        setCurrentQuestion(current => current + 1);
        setSelectedChoice(null);
        setiscorrect(null);
    }, 2000);
};

