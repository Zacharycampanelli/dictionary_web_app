import { useContext } from "react";

import ThemeContext from "../../theme";

/**
 * DisplayWord component renders the searched word and its phonetic representation.
 * It utilizes the ThemeContext to access information related to the current theme and searched word.
 * @param {Object} props - React props containing the phonetic representation of the word.
 */
const DisplayWord = ({ phonetic }) => {
  // Accessing the ThemeContext to get the current theme and searched word information
  const themeCtx = useContext(ThemeContext);

  // If no word has been searched, return an empty string (component will not render)
  if (themeCtx.searchedWord === "") return "";

  // Render the searched word and its phonetic representation
  return (
    <div>
      <h1 className="mb-1 mt-6 text-[32px] font-bold text-blackGray dark:text-white md:mb-0 md:mt-11 md:text-[64px]">
        {themeCtx.returnedWord}
      </h1>
      <p className="text-[18px] text-lightPurple md:text-[24px]">{phonetic}</p>
    </div>
  );
};

export default DisplayWord;
