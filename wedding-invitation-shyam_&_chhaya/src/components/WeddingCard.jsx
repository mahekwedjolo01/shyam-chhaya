export default function WeddingCard({ groomName, brideName, dayName, formattedDate, formattedTime, coupleImage }) {
  const imageUrl = coupleImage || 'https://via.placeholder.com/160?text=Couple';
  
  return (
    <section className="card rounded-3xl p-8 my-8 max-w-3xl mx-auto shadow-2xl text-center">
      <img 
        src={imageUrl} 
        alt="Couple" 
        className="mx-auto rounded-full w-40 h-40 object-cover mb-6 border-4 border-white shadow-lg"
      />
      <h1 className="font-serif text-5xl md:text-6xl">
        {groomName} <span className="animate-heartbeat inline-block">❤️</span> {brideName}
      </h1>
      <p className="mt-2 text-lg">{dayName}, {formattedDate} at {formattedTime}</p>
    </section>
  )
}
