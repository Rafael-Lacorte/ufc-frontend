import '../style/Rankings.css'

type RankingDataProps = {
  fullName: string,
  position: number,
  type: string,
  division: string| null,
  isCurrent: boolean
}

function Ranking({ position, fullName }: RankingDataProps) {
  return (
      <tr>
        <td>
          {position}
        </td>
        <td>
          {fullName}
        </td>
      </tr>
  )
};

export default Ranking
