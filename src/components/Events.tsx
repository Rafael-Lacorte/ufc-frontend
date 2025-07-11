import { fetchUpcomingEvents } from '../services/api';
import '../style/Events.css'
import Event from './Event';
import { useQuery } from '@tanstack/react-query';

type Event = {
  id: string,
  name: string;
  date: string;
  country: string;
  city: string;
  arena: string;

};

type EventData = Event[];

function Events() {
  const {data, isLoading} = useQuery<EventData>({
    queryKey: ['events'],
    queryFn: () => fetchUpcomingEvents(),
    staleTime: 100000
  });
  
  if (isLoading) return <p>Loading upcoming Events...</p>;
  return (
    <div className="events">
      { data?.map((event: Event) => <Event key={event.id} {...event}/>)}
    </div>
  )
};

export default Events
