import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../theme';
import DisplayWord from '../DisplayWord/DisplayWord';
import SvgIconPlay from '../../assets/images/svg/IconPlay';
import Meaning from '../Meaning/Meaning';

const DefinitionContainer = () => {
  const themeCtx = useContext(ThemeContext);
  const [phonetic, setPhonetic] = useState('');
  const [audio, setAudio] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const [meanings, setMeanings] = useState([]);
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
            return response.json();
          }
          themeCtx.changeSearchedWord('');
          setPhonetic('');
          setAudio('');
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
  }, [themeCtx.searchedWord]);

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

  const playAudio = () => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
  };

  return (<>
    <div className="flex justify-between items-center">
      <DisplayWord phonetic={phonetic} />
      <button className="mt-8" disabled={disabledButton} onClick={playAudio}>
        {disabledButton === false ? (
          <SvgIconPlay width="48px" height="48px" color="#A445ED" />
        ) : (
          <SvgIconPlay width="48px" height="48px" color="#3A3A3A" />
        )}
      </button>
    </div>
    {meanings.map((meaning, i) => <Meaning meaning={meaning} key={i}/>)}
    </>
  );
};

export default DefinitionContainer;
