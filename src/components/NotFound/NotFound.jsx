/**
 * NotFound component renders a message for when no definitions are found for a searched word.
 * It provides an emoticon, a title, and an informative message.
 */
const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <p className="text-[64px]">&#128533;</p> {/* Sad face emoticon */}
      <p className="mt-11 mb-6 font-bold text-xl text-blackGray">No Definitions Found</p> 
      <p className="text-center text-lg text-mediumGray leading-6">
        Sorry pal, we couldn't find definitions for the word you were looking for.
        You can try the search again at a later time or head to the web instead.
      </p> 
    </div>
  );
};

export default NotFound; 