export default function Events({ events }) {
  if (!events || events.length === 0) {
    return (
      <section className="card rounded-3xl p-8 my-8 max-w-3xl mx-auto shadow-2xl text-center">
        <h2 className="font-serif text-4xl mb-4">Wedding Events</h2>
        <p className="text-lg">No events scheduled yet.</p>
      </section>
    )
  }

  const sortedEvents = [...events].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date) - new Date(b.date);
  });

  const formatEvent = (event) => {
    const eventDate = event.date ? new Date(event.date).toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    }) : '';
    
    const eventTime = event.time ? new Date(`2000-01-01T${event.time}`).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }) : '';

    let displayText = '';
    if (eventDate) displayText += eventDate;
    if (event.name) displayText += displayText ? ` - ${event.name}` : event.name;
    if (eventTime) displayText += ` (${eventTime})`;
    
    return displayText;
  };

  return (
    <section className="card rounded-3xl p-8 my-8 max-w-3xl mx-auto shadow-2xl text-center">
      <h2 className="font-serif text-4xl mb-4">Wedding Events</h2>
      <div className="text-left">
        {sortedEvents.map((event, index) => (
          <p key={index} className="border-b border-rose-800/20 py-3 last:border-b-0">
            {formatEvent(event)}
          </p>
        ))}
      </div>
    </section>
  )
}
