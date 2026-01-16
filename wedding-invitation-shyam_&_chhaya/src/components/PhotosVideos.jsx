export default function PhotosVideos({ photos, videos }) {
  const hasPhotos = photos && photos.some(p => p.title || p.url);
  const hasVideos = videos && videos.some(v => v.title || v.url);

  const extractYouTubeId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
      /youtube\.com\/shorts\/([^&?/]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }
    return null;
  };

  if (!hasPhotos && !hasVideos) {
    return null;
  }

  return (
    <section className="card rounded-3xl p-8 my-8 max-w-3xl mx-auto shadow-2xl text-center">
      <h2 className="font-serif text-4xl mb-4">Wedding Photos and Videos</h2>
      <div className="text-left">
        {/* Photos */}
        {photos && photos.filter(p => p.title || p.url).map((photo, index) => (
          <div key={`photo-${index}`} className="border-b border-rose-800/20 py-4 last:border-b-0">
            <p className="font-semibold mb-3">📸 {photo.title || 'Photo'}</p>
            {photo.url && (
              <img 
                src={photo.url} 
                alt={photo.title || 'Photo'} 
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                loading="lazy"
              />
            )}
          </div>
        ))}
        
        {/* Separator */}
        {hasPhotos && hasVideos && (
          <div className="border-b border-rose-800/20 py-3"></div>
        )}
        
        {/* Videos */}
        {videos && videos.filter(v => v.title || v.url).map((video, index) => {
          const youtubeId = video.url ? extractYouTubeId(video.url) : null;
          
          return (
            <div key={`video-${index}`} className="border-b border-rose-800/20 py-4 last:border-b-0">
              <p className="font-semibold mb-3">🎥 {video.title || 'Video'}</p>
              {youtubeId ? (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md" 
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&controls=1&rel=0`}
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              ) : video.url ? (
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-pink-900">
                  Watch Video
                </a>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  )
}
