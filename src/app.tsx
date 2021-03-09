import { Text, Window, hot, View, ScrollArea } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";
import NotesContainer from "./components/NotesContainer";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle="Look Back"
        styleSheet={styleSheet}
        minSize={minSize}
      >
        <ScrollArea style="height: '100%';">
          <NotesContainer />
        </ScrollArea>
      </Window>
    );
  }
}

const styleSheet = `
  #welcome-text {
    font-size: 36px;
    padding-top: 24px;
    qproperty-alignment: 'AlignHCenter';
  }

  #scroll {
    padding-horizontal: 20px;
    height: '100%';
  }
`;

export default hot(App);
