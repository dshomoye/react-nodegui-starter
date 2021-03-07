import React from "react";
import { Text, View, ScrollArea } from "@nodegui/react-nodegui";
import { useNotes } from "../utils/notes";
import NoteCard from "./NoteCard";

const NotesContainer = () => {
  const notes = useNotes();
  return (
    <View style="height: '100%';">
      <Text id="welcome-text">Notes from this day 😌 {`<hr />`}</Text>
      {notes.slice(0, 20).map((note) => (
        <NoteCard key={note.identifier} note={note} />
      ))}
    </View>
  );
};

export default NotesContainer;
