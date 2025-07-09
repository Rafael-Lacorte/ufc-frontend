
import { Link } from 'react-router-dom';
import '../style/FighterCard.css'

type FighterDataProps = {
  id: string,
  fullName: string,
  nickName: string| null,
  birthDate: string,
  height: number,
  division: string,
  nationality: string,
  city: string,
  wins: number,
  losses: number,
  draws: number
}

function FighterCard({id, fullName, nickName, birthDate, height, division, nationality, city, wins, losses, draws }: FighterDataProps) {
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

  return (
    <Link to={`/fighters/${id}`} className='fighter-link'>
      <div className='fighter-card'>
          <h1>{fullName}</h1>
          <p className={nickName ? '' : 'empty-nickname'}>
  {nickName || '—'}
</p>
          <p>{nationality}</p>
          <p>{city}</p>
          <p>{formatDate(birthDate)}</p>
          <p>{height}</p>
          <p>{formatDivision(division)}</p>
          <p>{wins}-{losses}-{draws}</p>
      </div>
    </Link>
  )
}

export default FighterCard
