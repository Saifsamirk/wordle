/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import * as styles from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <div css={styles.header} className="my-3">
      <h1>Wordle</h1>
    </div>
  );
};
