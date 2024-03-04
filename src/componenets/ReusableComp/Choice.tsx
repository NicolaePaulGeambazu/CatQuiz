import { ChoiceProps } from "../../types";
import { Circle, Option } from "./Components.style";

const Choice = ({ choice, index, onClick, isselected, iscorrect }: ChoiceProps) => {
  return (
    <Option onClick={onClick} iscorrect={iscorrect} isselected={isselected} disabled={isselected}>
      <Circle isselected={isselected}>{index + 1}</Circle>
      {choice}
    </Option>
  );
};

export default Choice;
