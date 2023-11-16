import SvgIconNewWindow from '../../assets/images/svg/IconNewWindow'
const Source = ({word}) => {
    const url = `https://en.wiktionary.org/wiki/${word}`
    console.log(url)
  return (
    <div>
      <p className="text-sm text-mediumGray underline mt-6">Source</p>
      <a href={url} target="_blank" rel="noreferrer" className="flex text-sm text-blackGray underline mt-1 dark:text-white">{url}<SvgIconNewWindow className="ml-2"/></a>
    </div>
  )
}

export default Source
