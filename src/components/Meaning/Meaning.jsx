/**
 * Meaning component displays the part of speech, meanings, example usage, and synonyms for a given word.
 * It dynamically renders up to three definitions, example usage, and up to five synonyms.
 * @param {Object} props - React props containing the meaning details, including part of speech and synonyms.
 */
const Meaning = ({ meaning }) => {
  // Destructuring meaning object to get part of speech and synonyms
  const { partOfSpeech, synonyms } = meaning;

  // Variables to store definitions, total synonyms, and loop control
  let definitions = [];
  let totalSynonyms = [];
  let i = 0;
  let singleDefinition;
  let example;

  // Loop to extract up to three definitions and the associated example usage
  while (definitions.length < 3 && meaning.definitions[i]) {
    singleDefinition = meaning.definitions[i].definition;
    // If there is a definition returned, add it to the array of definitions to display
    if (singleDefinition !== undefined) definitions.push(singleDefinition);
    // If this definition supplies an example of usage, save it
    if (meaning.definitions[i].example) example = meaning.definitions[i].example;
    i++;
  }

  // Shorten the length of shown synonyms to a maximum of five
  if (synonyms) {
    totalSynonyms = synonyms.slice(0, 5);
  }

  // Render the Meaning component with part of speech, definitions, example, and synonyms
  return (
    <div className="flex flex-col mt-7 md:mb-11">
      <h2 className="mt-2.5 mb-5 border-b border-lightGray border-solid font-bold text-left text-lg  leading-[0.1em]  marker:font-bold italic w-full md:mb-12 md:text-[24px] dark:border-darkGray">
        <span className="pr-6 bg-white text-blackGray  dark:bg-darkerBlack dark:text-white">{partOfSpeech}</span>
      </h2>
      <p className="mb-3 text-base text-mediumGray  md:text-xl">Meaning</p>
      <ul className="ml-4 list-disc list-outside marker:text-lightPurple">
        {definitions.map((definition, i) => (
          <li key={i} className="w-5/6 mt-3 text-[15px] text-blackGray leading-6 last:mb-6 md:text-[18px] md:last:mb-10 lg:last:mb-16 dark:text-white">
            {definition}
          </li>
        ))}
      </ul>
      {/* Display example usage if available */}
      {example && example.length > 0 && (
        <p className="mb-3 text-[15px] text-mediumGray before:ml-4 md:text-[18px]">&quot;{example}&quot;</p>
      )}
      {/* Display synonyms if available */}
      {synonyms.length > 0 && (
        <p className="text-base text-mediumGray md:text-xl ">
          Synonyms
          {totalSynonyms.map((synonym, i) => (
            <span className="inline cursor-pointer" key={i}>
              <span className="text-lightPurple font-bold first:ml-6 hover:underline">{`${synonym}`}</span>{' '}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Meaning; 