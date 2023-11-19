import SvgIconNewWindow from '../../assets/images/svg/IconNewWindow';

/**
 * Source component renders a link to the source page on Wiktionary for a given word.
 * It includes the word's URL and an icon indicating that the link will open in a new window.
 * @param {Object} props - React props containing the word for which the source link is generated.
 */
const Source = ({ word }) => {
    // Constructing the URL for the Wiktionary page of the given word
    const url = `https://en.wiktionary.org/wiki/${word}`;
    
    // Render the Source component with a link to the Wiktionary page and an icon for opening in a new window
    return (
        <div className='md:flex md:items-center md:mt-5 md:mb-28'>
            <p className="text-sm text-mediumGray underline mt-6 md:mt-0 md:mr-6">Source</p>
            <a href={url} target="_blank" rel="noreferrer" className="flex text-sm text-blackGray underline mt-1 dark:text-white">
                {url}
                <SvgIconNewWindow className="ml-2" /> 
            </a>
        </div>
    );
}

export default Source; 
