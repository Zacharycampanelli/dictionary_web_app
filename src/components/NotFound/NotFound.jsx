/**
 * NotFound component renders a message for when no definitions are found for a searched word.
 * It provides an emoticon, a title, and an informative message.
 */
const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <p className="text-[64px]">&#128533;</p> {/* Sad face emoticon */}
      <p className="mb-6 text-xl font-bold mt-11 text-blackGray">
        No Definitions Found
      </p>
      <p className="text-lg leading-6 text-center text-mediumGray">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at a later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;
