/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useMemo, useEffect, useContext } from "react";

import * as styles from "./Keyboard.styles";
import { BlockContext } from "../Context";
// Create an interface to consume the props passed on from
// the app component
interface KeyboardProps {
  blocksRef: React.MutableRefObject<any[]>;
}
export const Keyboard: React.FC<KeyboardProps> = ({ blocksRef }) => {
  // Get the global context passed on to all components within the
  // context provider
  const { targetElement, setTargetElement, status } = useContext(BlockContext);
  // Create a string that contains all alphabets to display them
  // as keys on the keyboard
  const alphabets: string = useMemo((): string => {
    return "abcdefghijklmnopqrstuvwxyz";
  }, []);
  // Invoke all function below whenever the component renders / any
  // of the dependencies change
  useEffect((): void => {
    if (blocksRef.current?.length > 0) {
      // Fetch the element to be written on (next)
      const elementToBeFocused: HTMLElement = blocksRef.current.find(
        (block) => block.innerText === ""
      );
      // Set the state of the target element to the element to be focused
      // and also the inner text of the selected alphabet from the keyboard
      setTargetElement?.({
        element: elementToBeFocused,
        innerText: targetElement?.innerText || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetElement?.id]);
  // Create a function that handles the remove of the already-written blocks
  // starting from the very last one
  const handleClear = (): void => {
    // Find the index of the last block that is not empty
    const firstEmptyBlockIndex: number = blocksRef.current.findIndex(
      (block) => block.innerText === ""
    );
    // Get the last element in the row that is not empty to be cleared
    // later
    const lastWrittenBlock: HTMLElement =
      blocksRef.current[firstEmptyBlockIndex - 1];
    // Check before we clear or set the target element that we are not on
    // the first or the last block of the board and also that we don't clear
    // any character of any complete word
    if (
      firstEmptyBlockIndex &&
      lastWrittenBlock &&
      !blocksRef.current[firstEmptyBlockIndex - 1].style["background"]
    ) {
      // Set the target element to be the last element that is not empty and clear
      // its text
      setTargetElement?.({ element: lastWrittenBlock, innerText: "" });
      blocksRef.current[firstEmptyBlockIndex - 1].innerText = "";
    }
  };
  return (
    <div css={styles.keyboard} className="my-3">
      {[...alphabets].map((alphabet) => (
        <button
          key={alphabet}
          onClick={() => {
            // Check first if the target element exists or not and that the
            // alphabet is not the same as the inner text of the target element
            // (in case the use clicks on the same key more than once)
            if (targetElement?.element && status !== "word-loading") {
              targetElement.element.innerText = alphabet;
              // Set new state of the target element with the text passed on
              // from the keyboard (selected alphabet)
              setTargetElement?.({
                ...targetElement,
                id: Math.random(),
                innerText: alphabet,
              });
            }
          }}
        >
          {alphabet}
        </button>
      ))}
      <button onClick={handleClear}>
        <img
          alt="clear"
          src="https://cdn-icons-png.flaticon.com/512/150/150488.png"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};
