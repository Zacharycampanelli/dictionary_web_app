const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <p className="text-[64px]">&#128533;</p>
      <p className="text-xl font-bold text-blackGray mt-11 mb-6">No Definitions Found</p>
      <p className="text-center text-lg leading-6 text-mediumGray">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}

export default NotFound
