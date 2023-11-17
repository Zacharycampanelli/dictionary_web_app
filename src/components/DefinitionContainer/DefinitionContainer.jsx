import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../theme';
import DisplayWord from '../DisplayWord/DisplayWord';
import Meaning from '../Meaning/Meaning';
import Source from '../Source/Source';
import PlayButton from '../PlayButton/PlayButton';
import NotFound from '../NotFound/NotFound';

const DefinitionContainer = ({emptySearch}) => {
  const themeCtx = useContext(ThemeContext);
  const [phonetic, setPhonetic] = useState('');
  const [audio, setAudio] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const [meanings, setMeanings] = useState([]);
  const [notFound, setNotFound] = useState(false)
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  //   Disables play button if there is no audio file
  useEffect(() => {
    audio ? setDisabledButton(false) : setDisabledButton(true);
  }, [audio]);

  //   Api call for word
  useEffect(() => {
    if (themeCtx.searchedWord) {
      fetch(`${url}${themeCtx.searchedWord}`)
        .then((response) => {
          if (response.ok) {
            setNotFound(false)
            return response.json();
          }
          themeCtx.changeSearchedWord('');
          setPhonetic('');
          setAudio('');
          setNotFound(true);
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
        })
        .finally(() => {console.log(meanings)});
    }
  }, [themeCtx.searchedWord, setNotFound]);

  const addAudioFile = (data) => {
    let i = 0;
    let chosenAudio = '';
    try {
      do {
        chosenAudio = data.phonetics[i].audio;
        console.log(chosenAudio, i);
        i++;
      } while (!chosenAudio && data.phonetics[i]);
      setAudio(chosenAudio);
    } catch (err) {
      console.error(err);
    }
  };
  
  if(emptySearch)
  return ''

if(notFound === true)
return <NotFound />

  return (<>
    <div className="flex justify-between items-center  ">
      <DisplayWord phonetic={phonetic} />
      <PlayButton audio={audio} disabledButton={disabledButton}/>
    </div>
    {meanings.map((meaning, i) => <Meaning meaning={meaning} key={i}/>)}
    <div className="border-b border-lightGray border-solid w-full mt-8 dark:border-darkGray"></div>
    {themeCtx.searchedWord && <Source word = {themeCtx.searchedWord}/>}
    </>
  );
};

export default DefinitionContainer;
