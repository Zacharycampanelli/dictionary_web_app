const Source = ({word}) => {
    const url = `https://en.wiktionary.org/wiki/${word}`
    console.log(url)
  return (
    <div>
      <p className="text-sm text-mediumGray underline mt-6">Source</p>
      <a href={url} target="_blank" rel="noreferrer" className="text-sm text-blackGray underline mt-1 dark:text-white">{url}</a>
    </div>
  )
}

export default Source
