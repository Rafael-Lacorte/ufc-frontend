
import '../style/FighterHeader.css'

type FighterDataProps = {
  fullName: string,
  nickName: string| null,
  birthDate: string,
  height: number,
  division: string,
  nationality: string,
}

function FighterHeader({fullName, nickName, birthDate, height, division, nationality}: FighterDataProps) {

  function formatDivision(division: string): string {
    return division
      .replace(/_/g, ' ') // Replace underscores with spaces
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Rejoin
  };

function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
  }
  const imageName = fullName.toLowerCase().replace(/\s+/g, '-');

  return (
      <div className='fighter-header-container'>
        <img
        src={`/images/fighters/${imageName}.png`}
        className='fighter-photo'
        >
        </img>
        <div className='fighter-details'>
          <h1>{fullName}</h1>
          <p className={nickName ? '' : 'empty-nickname'}>
            {nickName || '—'}
          </p>
          <p>{nationality}</p>
          <p>{formatDate(birthDate)}</p>
          <p>{height.toFixed(2)} m</p>
          <p>{formatDivision(division)}</p>
        </div>
      </div>
  )
}

export default FighterHeader
