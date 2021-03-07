import { exec } from "child_process";
import { useEffect, useState } from "react";

const cmd = `xcall.app/Contents/MacOS/xcall -url "bear://x-callback-url/search?term=tired&token=E7C062-8C4D04-025BC3&show_window=no"`;

export interface BearNote {
  title: string;
  creationDate: string;
  tags: string[];
  identifier: string;
}

const defaultNotes: BearNote[] = [];

export const notesFromToday = (): Promise<BearNote[]> => {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        resolve([]);
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        resolve([]);
      }
      let result;
      try {
        result = JSON.parse(stdout);
        const notes: BearNote[] = JSON.parse(result.notes).map((n: any) => ({
          ...n,
          tags: JSON.parse(n.tags),
        }));
        resolve(notes);
      } catch (error) {
        resolve([]);
      }
    });
  });
};

export const useNotes = () => {
  const [notes, setNotes] = useState(defaultNotes);
  useEffect(() => {
    const getNotes = async () => {
      const newNotes = await notesFromToday();
      setNotes(newNotes);
    };
    getNotes();
  }, []);

  return notes;
};
