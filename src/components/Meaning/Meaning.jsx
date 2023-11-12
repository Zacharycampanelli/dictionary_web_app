const Meaning = ({ meaning }) => {
  // console.log(meaning.definitions[0].definition)
  console.log(meaning);
  const { partOfSpeech, synonyms } = meaning;
  let definitions = [];
  let i = 0;
  let singleDefinition;
  while (definitions.length < 3 && meaning.definitions[i]) {
    singleDefinition = meaning.definitions[i].definition;
    if (singleDefinition !== undefined) definitions.push(singleDefinition);
    i++;
  }
  console.log(definitions);
  //   while(i < 3) {
  //   let singleDefinition = meaning.definitions[i].definition;
  // if(singleDefinition && i < 3) {
  // con sole.log(singleDefinition)
  //   definitions[i] = singleDefinition;
  // } i++;
  // else return;
  // }

  console.log(partOfSpeech, definitions, synonyms);
  return (
    <div className="flex flex-col mt-7">
      <h2 className="text-left text-lg mb-8 marker:font-bold italic w-full leading-[0.1em] mt-2.5 mb-5 border-b border-lightGray border-solid">
        <span className="pr-6 bg-white ">{partOfSpeech}</span>
      </h2>
      <p className="text-base text-mediumGray mb-3">Meaning</p>
      <ul className="list-disc list-outside before: ml-4">
        {definitions.map((definition, i) => (
          <li key={i} className="w-5/6 mt-3 last:mb-6 leading-6 text-[15px] text-blackGray" >{definition}</li>
        ))}
      </ul>{ synonyms.length > 0 && (

          
          <p className="text-base text-mediumGray">Synonyms
      <span className="text-lightPurple font-bold ml-6">{synonyms} </span>
      </p>
      )
      }
    </div>
  );
};

export default Meaning;
