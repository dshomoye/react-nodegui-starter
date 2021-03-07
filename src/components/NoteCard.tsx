import { Button, Text, View } from "@nodegui/react-nodegui";
import React, { useState } from "react";
import { BearNote } from "../utils/notes";
import open from "open";

type Props = {
  note: BearNote;
};

const NoteCard = (props: Props) => {
  const { identifier, tags, title, creationDate } = props.note;

  return (
    <View styleSheet={styleSheet} id="container">
      <Text wordWrap={true} id="title">{`<h2>${title}`}</Text>
      <Text id="date">Date: {`${creationDate}`}</Text>
      <Text id="tags">
        {`${tags?.join(", ")}`}
        {`some,fake,tags`}
      </Text>
      <Button
        text="Open"
        on={{
          clicked: () => {
            open(`bear://x-callback-url/open-note?id=${identifier}`)
          },
        }}
        id="btn"
      />
    </View>
  );
};

const styleSheet = `
  #title {
    width: 200px;
  }
  #date {
    color: 'gray';
  }
  #tags {
    color: '#708b99';
  }
  #container {
    padding-horizontal: 40px;
    padding-vertical: 25px;
    border-radius: 15px;

  }
  #container:hover {
    background: 'white';
  }
  #btn {
    width: 50px;
  }
`;

export default NoteCard;
