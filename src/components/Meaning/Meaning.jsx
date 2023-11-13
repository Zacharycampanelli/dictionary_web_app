const Meaning = ({ meaning }) => {
  // console.log(meaning.definitions[0].definition)
  console.log(meaning);
  const { partOfSpeech, synonyms } = meaning;
  let definitions = [];
  let totalSynonyms = [];
  let i = 0;
  let singleDefinition;
  let example;
  while (definitions.length < 3 && meaning.definitions[i]) {
    singleDefinition = meaning.definitions[i].definition;
    // If there is a definition returned, add it to the array of definitions to display
    if (singleDefinition !== undefined) definitions.push(singleDefinition);
    // If this definition; supplies an example of usage, saves that
    if (meaning.definitions[i].example) example = meaning.definitions[i].example;
    i++;
  }
// Shorten the length of shown synonyms
  if(synonyms) {
   totalSynonyms = synonyms.slice(0, 5)
}

  // if(!synonyms && )
  //   while(i < 3) {
  //   let singleDefinition = meaning.definitions[i].definition;
  // if(singleDefinition && i < 3) {
  // con sole.log(singleDefinition)
  //   definitions[i] = singleDefinition;
  // } i++;
  // else return;
  // }

  // console.log(partOfSpeech, definitions, synonyms);
  return (
    <div className="flex flex-col mt-7">
      <h2 className="text-left text-lg mb-8 marker:font-bold italic w-full leading-[0.1em] mt-2.5 mb-5 border-b border-lightGray border-solid">
        <span className="pr-6 bg-white ">{partOfSpeech}</span>
      </h2>
      <p className="text-base text-mediumGray mb-3">Meaning</p>
      <ul className="list-disc marker:text-lightPurple list-outside before: ml-4">
        {definitions.map((definition, i) => (
          <li key={i} className="w-5/6 mt-3 last:mb-4 leading-6 text-[15px] text-blackGray">
            {definition}
          </li>
        ))}
      </ul>
      {example && example.length > 0 && (
        <p className="text-[15px] text-mediumGray before: ml-4 mb-3">&quot;{example}&quot;</p>
      )}
      {synonyms.length > 0 && (
        <p className="text-base text-mediumGray">
          Synonyms
          <span className="text-lightPurple font-bold ml-6">{totalSynonyms.join(`,\r`)} </span>
        </p>
      )}
    </div>
  );
};

export default Meaning;
