import styled from "styled-components";
import Tooltip from "./components/tooltip";
import "./index.css";

const TooltipTarget = styled.span``;

export default function App() {
  return (
    <div className="App">
      <Tooltip text="I am a Left tooltip" position="left" background="00adb5">
        <TooltipTarget>Left</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a Top tooltip" position="top" background="222831">
        <TooltipTarget>Top</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a Bottom tooltip" position="bottom" background="393e46">
        <TooltipTarget>Bottom</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a Right tooltip" position="right" background="eeeeee">
        <TooltipTarget>Right</TooltipTarget>
      </Tooltip>
  
    </div>
  );
}
