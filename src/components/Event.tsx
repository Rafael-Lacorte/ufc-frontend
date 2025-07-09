import '../style/Event.css'

type EventDataProps = {
  name: string;
  date: string;
  country: string;
  city: string;
  arena: string;
}

function Event({ name, date, arena, city, country }: EventDataProps) {
  const imageName = name.replace(/\s+/g, '-').toLowerCase();
  const backgroundImageUrl = `images/event/${imageName}.png`;

  return (
    <div
    className="event-card"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
      >
        <div className="overlay">
          <h2>{name}</h2>
          <p>{date}</p>
          <p>{arena}, {city}, {country}</p>
        </div>
    </div>
  )
};

export default Event
