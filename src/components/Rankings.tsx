import '../style/Rankings.css';
import Ranking from './Ranking';
import { fetchRankings } from '../services/api';
import { useQuery } from '@tanstack/react-query';

type Fighter = {
  fullName: string;
  position: number;
  type: string;
  division: string | null;
  isCurrent: boolean;
};

type RankingsData = Record<string, Fighter[]>;

const CATEGORY_KEY = 'light_heavyweight';
const CATEGORY_STRING = 'LIGHT HEAVYWEIGHT';

function Rankings() {
  const {data, isLoading} = useQuery<RankingsData>({
    queryKey: ['rankings'],
    queryFn: () => fetchRankings(),
    staleTime: 120000
  })
  
  const divisionOrder = [
  'p4p', 'flyweight', 'bantamweight', 'featherweight', 'lightweight', 'welterweight', 'middleweight', 'light_heavyweight', 'heavyweight'
  ];

  const rankings = data ?? {};

  const sortedRankingsEntries = Object.entries(rankings)
  .sort(([a], [b]) => {
    const aIndex = divisionOrder.indexOf(a.toLowerCase());
    const bIndex = divisionOrder.indexOf(b.toLowerCase());

    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  const sortedRankingsObj: RankingsData = Object.fromEntries(sortedRankingsEntries);

  // useEffect(() => {
  //   const loadRankings = async () => {
  //     try {
        // const data = await fetchRankings();
  //       setRankings(data);
  //     } catch (err) {
  //       console.log(err);
  //       setError('Failed to load rankings.')
  //     }
  //     finally {
  //       setLoading(false)
  //     }
  //   };

  //   loadRankings();
  // },[])

  // if (loading) return <p>Loading rankings...</p>
  // if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading rankings...</p>;

  return (
    <div className='rankings-container'>
      <h1>Rankings</h1>
      <div className='divisions-grid'>
      {Object.entries(sortedRankingsObj).map(([divisionName, fighters]) => {
        const isP4P = divisionName.toLowerCase() === 'p4p';
        const champion = !isP4P
        ? fighters.find((f) => f.position === 0)
        : fighters.find((f) => f.position === 1); // P4P "champion"

        const contenders = fighters.filter((f) =>
          isP4P ? f.position !== 1 : f.position !== 0
        );

        return (
          <div className='division-card'  key={divisionName}>
            <h2 className='division-name' >
              {divisionName === CATEGORY_KEY ? CATEGORY_STRING : divisionName.toUpperCase()}
            </h2>

            {champion && (
              <div className="champion-card">
                <div className="champion-info">
                  <h3>{champion.fullName}</h3>
                  <p className="champion-title">
                    {isP4P ? "POUND-FOR-POUND TOP RANK" : 'CHAMPION'}
                    </p>
                </div>
                <img
                  src={`/images/champions/${champion.fullName.replace(/\s+/g, '-').toLowerCase()}.png`}
                  alt={champion.fullName}
                  className="champion-image"
                />
              </div>
            )}

            <table>
              <tbody>
                {contenders.map((fighter: Fighter) => (
                  <Ranking key={fighter.fullName} {...fighter} />
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Rankings;
