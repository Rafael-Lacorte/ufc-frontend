import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchFighterHistory } from '../services/api';
import '../style/FighterHistory.css';
import FighterHeader from './FighterHeader';

interface Fight {
  id: number;
  event: {
    date: string;
    name: string;
  };
  result: string;
  winnerId: number;
  round: number;
  endMinute: number;
  endSecond: number;
  isTitleFight: boolean;
  fighter: {
    id: string,
    fullName: string,
    nickName : string,
    birthDate: string,
    height: number,
    division: string,
    nationality: string
  }
  opponent: {
    fullName: string;
  };
}

function FighterHistory() {
  const { id } = useParams<{ id: string }>();

  const { data: fights, isLoading, error } = useQuery<Fight[]>({
    queryKey: ['fighterHistory', id],
    queryFn: () => fetchFighterHistory(id!),
    enabled: !!id,
    staleTime: 120000
  });

  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
  }

  function formatTime(minutes: number, seconds: number): string {
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading history</div>;
  if (!fights || fights.length === 0) return <div className="not-found">No fights found</div>;

  return (
    <div>
      <FighterHeader key={fights[0].id} {...fights[0].fighter} />
      <div className="fight-history-table">
        <h2>Fight History</h2>
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>OPPONENT</th>
              <th>RES.</th>
              <th>METHOD</th>
              <th>RND</th>
              <th>TIME</th>
              <th>EVENT</th>
            </tr>
          </thead>
          <tbody>
            {fights.map(fight => (
              <tr key={fight.id} className={fight.isTitleFight ? 'title-fight' : ''}>
                <td>{formatDate(fight.event.date)}</td>
                <td>
                  {fight.opponent.fullName}
                  {fight.isTitleFight && <span className="title-badge">TITLE</span>}
                </td>
                <td className={`result ${fight.winnerId === parseInt(id!) ? 'win' : 'loss'}`}>
                  {fight.winnerId === parseInt(id!) ? 'W' : 'L'}
                </td>
                <td>{fight.result}</td>
                <td>{fight.round}</td>
                <td>{formatTime(fight.endMinute, fight.endSecond)}</td>
                <td>{fight.event.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default FighterHistory;