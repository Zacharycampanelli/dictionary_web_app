/**
 * DefinitionContainer component fetches and displays word definitions, phonetic pronunciation, and related information.
 * It uses the Dictionary API to retrieve data and dynamically renders DisplayWord, PlayButton, Meaning, Source, and NotFound components.
 * @param {Object} props - React props containing the state of empty searches.
 */
import { useContext, useEffect, useState } from 'react';

import DisplayWord from '../DisplayWord/DisplayWord';
import Meaning from '../Meaning/Meaning';
import Source from '../Source/Source';
import PlayButton from '../PlayButton/PlayButton';
import NotFound from '../NotFound/NotFound';
import ThemeContext from '../../theme';

const DefinitionContainer = ({ emptySearch }) => {
  // Accessing the ThemeContext to get and modify theme-related information
  const themeCtx = useContext(ThemeContext);

  // States to manage phonetic pronunciation, audio file, disabled play button, meanings, and notFound state
  const [meanings, setMeanings] = useState([]);
  const [phonetic, setPhonetic] = useState('');
  const [audio, setAudio] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  // Disables play button if there is no audio file
  useEffect(() => {
    audio ? setDisabledButton(false) : setDisabledButton(true);
  }, [audio]);

  // Function to reset component state
  const resetState = () => {
    themeCtx.changeSearchedWord('');
    themeCtx.changeReturnedWord('');
    setPhonetic('');
    setAudio('');
    setNotFound(true);
  };

  // API call for word when a search is initiated
  useEffect(() => {
    if (themeCtx.searchedWord) {
      fetch(`${url}${themeCtx.searchedWord}`)
        .then((response) => {
          if (response.ok) {
            setNotFound(false);
            themeCtx.changeReturnedWord(themeCtx.searchedWord);
            return response.json();
          }
          resetState();
          throw response;
        })
        .then((data) => {
          setPhonetic(data[0].phonetic);
          addAudioFile(data[0]);
          let apiMeanings = data[0].meanings;
          setMeanings([...apiMeanings]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [themeCtx.searchedWord, setNotFound]);

  // Function to add audio file to state
  const addAudioFile = (data) => {
    let i = 0;
    let chosenAudio = '';
    try {
      do {
        chosenAudio = data.phonetics[i].audio;        i++;
      } while (!chosenAudio && data.phonetics[i]);
      setAudio(chosenAudio);
    } catch (err) {
      console.error(err);
    }
  };

  // Return early if there is an empty search
  if (emptySearch) return '';

  // Render NotFound component if the word is not found
  if (notFound === true) return <NotFound />;

  // Render the DefinitionContainer component with DisplayWord, PlayButton, Meaning, Source components
  return (
    <>
      <div className="flex justify-between items-center  ">
        <DisplayWord phonetic={phonetic} />
        {themeCtx.returnedWord && <PlayButton audio={audio} disabledButton={disabledButton} />}
      </div>
      {meanings.map((meaning, i) => (
        <Meaning meaning={meaning} key={i} />
      ))}
      <div className="w-full mt-8 border-b border-solid border-lightGray dark:border-darkGray"></div>
      {themeCtx.searchedWord && <Source word={themeCtx.searchedWord} />}
    </>
  );
};

export default DefinitionContainer;
