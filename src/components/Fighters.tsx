import { fetchFighters } from '../services/api';
import '../style/Fighters.css'
import FighterCard from './FighterCard';
import Fighter from './FighterCard'
import { useQuery } from '@tanstack/react-query';

type Fighter = {
  id: string,
  fullName: string;
  nickName: string;
  birthDate: string;
  height: number;
  division: string;
  nationality: string;
  city: string;
  wins: number;
  losses: number;
  draws: number;
};

type FightersData = Fighter[];

function Fighters() {
  const {data, isLoading} = useQuery<FightersData>({
    queryKey: ['fighters'],
    queryFn: () => fetchFighters()
  });

  if (isLoading) return <p>Loading rankings...</p>;
  const fighters = data ?? [];
  return (
    <div className='fighters-grid'>
      { fighters.map((fighterData: Fighter) => <FighterCard key={fighterData.fullName} {...fighterData}/>)}
    </div>
  )
}

export default Fighters
