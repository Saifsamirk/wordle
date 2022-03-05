/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect, useContext, useMemo } from "react";

import { BlockContext } from "../Context";
import { searchWords } from "../service";
import * as styles from "./Board.styles";
import {
  WinnerDialogue,
  GameOverDialogue,
  NotAwordDialogue,
} from "../Dialogues";

// Declare a type for the span that will form the element of
// the returned array
type SpanType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;
// Create an interface to consume the props passed on from
// the app component
interface BoardProps {
  blocksRef: React.MutableRefObject<any[]>;
}
export const Board: React.FC<BoardProps> = ({ blocksRef }) => {
  // Get the global context passed on to all components within the
  // context provider
  const { targetElement, setStatus, status } = useContext(BlockContext);
  // Create an array of 5 words to be used so that all users can try
  // up to 6 times to reach to one of them.
  const wordToBeDiscovered: string = useMemo(() => {
    let words: string[] = ["thorp", "dwell", "sense", "bloke", "other"];
    return words[Math.floor(Math.random() * (4 - 0 + 1) + 0)].toUpperCase();
  }, []);
  // create a function to render the blocks of the board 5 x 6
  const renderBlocks = (): SpanType[] => {
    let blocks: SpanType[] = [];
    // Loop through the blocks array and fill it with a span until the
    // condition is met (i <= 30) to form the blocks of the board
    for (let i = 0; i < 30; i++) {
      blocks.push(
        <span
          key={i}
          ref={(element) => (blocksRef.current[i] = element)}
          className="d-flex align-items-center justify-content-center"
        />
      );
    }
    // Return the array of board blocks
    return blocks;
  };
  // Create a function that takes the complete word and searches for
  // it in the dictionary
  const handleSearchWords = async (word: string) => {
    // Set the status to be loading
    setStatus?.("word-loading");
    searchWords(word)
      .then(() => {
        // Reset the status when the request succeeds
        setStatus?.("");
        if (wordToBeDiscovered === word) {
          setTimeout(() => {
            setStatus?.("winner");
          }, 1000);
        }
        // Get the index of the very first empty element (with no text)
        const firstEmptyBlockIndex: number = blocksRef.current.findIndex(
          (block) => block.innerText === ""
        );
        // Get the latest complete word to check if it exists within the
        // dictionary or not
        const latestCompleteWord: HTMLElement[] = blocksRef.current.slice(
          (firstEmptyBlockIndex === -1
            ? firstEmptyBlockIndex + 1
            : firstEmptyBlockIndex) - 5,
          firstEmptyBlockIndex > -1 ? firstEmptyBlockIndex : Infinity
        );
        latestCompleteWord.forEach((charSpan, index) => {
          // Change the color of the block text to white and remove
          // the borders and then change its background color upon
          // the position of the letter in the wordToBeDiscovered
          charSpan.style.color = "white";
          charSpan.style.border = "none";
          // Handle the case where the letter is in the wordToBeDiscovered
          // so if it is in the right place, change the background to green
          if (wordToBeDiscovered.indexOf(charSpan.innerText) > -1) {
            charSpan.style.background =
              charSpan.innerText === wordToBeDiscovered[index]
                ? "#538d4e"
                : "#b59f3b";
          }
          // And if it is in the wrong place, change it to orange instead
          else {
            charSpan.style.background = "#86888a";
          }
          // Handle the case where the word written is not matching the
          // word to be discovered
          if (
            firstEmptyBlockIndex === -1 &&
            latestCompleteWord.map((char) => char.innerText).join("") !==
              wordToBeDiscovered
          ) {
            // If so, display the game over dialogue and stop the game
            setTimeout(() => {
              setStatus?.("game-over");
            }, 1500);
          }
        });
      })
      .catch(() => {
        // Change the status to not a word so that the dialogue shows
        // up to the user
        setStatus?.("not-word");
      });
  };
  // Create a function that checks if a row is complete or not so that
  // we can perform further operations
  const checkCompleteWord = () => {
    // Get the index of the very first empty element (with no text)
    const firstEmptyBlockIndex: number = blocksRef.current.findIndex(
      (block) => block.innerText === ""
    );
    // Get the latest complete word to check if it exists within the
    // dictionary or not
    const latestCompleteWord: string = blocksRef.current
      .slice(
        (firstEmptyBlockIndex === -1
          ? firstEmptyBlockIndex + 1
          : firstEmptyBlockIndex) - 5,
        firstEmptyBlockIndex > -1 ? firstEmptyBlockIndex : Infinity
      )
      .map((element) => element.innerText)
      .join("");
    // Checks if the board is not all empty and then check if the word
    // is complete or not upon the block index we are on
    if (
      (firstEmptyBlockIndex !== 0 && firstEmptyBlockIndex % 5 === 0) ||
      firstEmptyBlockIndex === -1
    ) {
      handleSearchWords(latestCompleteWord);
    }
  };
  useEffect(() => {
    checkCompleteWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetElement?.element]);
  return (
    <React.Fragment>
      <div css={styles.container}>{renderBlocks()}</div>
      {status === "winner" && (
        <WinnerDialogue status={status} setStatus={setStatus} />
      )}
      {status === "not-word" && (
        <NotAwordDialogue status={status} setStatus={setStatus} />
      )}
      {status === "game-over" && (
        <GameOverDialogue status={status} setStatus={setStatus} />
      )}
    </React.Fragment>
  );
};
