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

  return (
    <div className="flex flex-col mt-7 md:mb-11">
      <h2 className="text-left text-lg  font-bold marker:font-bold italic w-full leading-[0.1em] mt-2.5 mb-5 border-b border-lightGray border-solid md:text-[24px] md:mb-12 dark:border-darkGray">
        <span className="pr-6 bg-white text-blackGray dark:text-white dark:bg-darkerBlack">{partOfSpeech}</span>
      </h2>
      <p className="text-base text-mediumGray mb-3 md:text-xl">Meaning</p>
      <ul className="list-disc marker:text-lightPurple list-outside before: ml-4">
        {definitions.map((definition, i) => (
          <li key={i} className="w-5/6 mt-3 last:mb-6 leading-6 text-[15px] text-blackGray md:text-[18px] md:last:mb-10 lg:last:mb-16 dark:text-white">
            {definition}
          </li>
        ))}
      </ul>
      {example && example.length > 0 && (
        <p className="text-[15px] text-mediumGray before:ml-4 mb-3 md:text-[18px]">&quot;{example}&quot;</p>
      )}
      {synonyms.length > 0 && (
        <p className="text-base text-mediumGray md:text-xl ">
          Synonyms
          {totalSynonyms.map((synonym, i) => 
            <p className="inline cursor-pointer" key={i}><span className="text-lightPurple font-bold first:ml-6  hover:underline">{`${synonym}`}</span> </p>
          )}
        </p>
      )}
    </div>
  );
};

export default Meaning;
