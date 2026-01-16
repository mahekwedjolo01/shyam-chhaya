import { useState, useEffect } from 'react'

export default function Countdown({ weddingDate, weddingTime }) {
  const [timeLeft, setTimeLeft] = useState({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);
  
  useEffect(() => {
    const weddingDateTime = new Date(`${weddingDate}T${weddingTime}`).getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = weddingDateTime - now;
      
      if (distance < 0) {
        // After wedding - count up
        setIsPast(true);
        const elapsedTime = Math.abs(distance);
        setTimeLeft({
          weeks: Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7)),
          days: Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)),
          hours: Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((elapsedTime % (1000 * 60)) / 1000)
        });
      } else {
        // Before wedding - count down
        setIsPast(false);
        setTimeLeft({
          weeks: Math.floor(distance / (1000 * 60 * 60 * 24 * 7)),
          days: Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [weddingDate, weddingTime]);
  
  const pad = (num) => String(num).padStart(2, '0');
  
  return (
    <section className="card rounded-3xl p-8 my-8 max-w-3xl mx-auto shadow-2xl text-center">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-5 gap-1 sm:gap-3">
          {[
            { value: timeLeft.weeks, label: 'Weeks' },
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div key={index} className="countdown-box rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold">{pad(item.value)}</span>
              <span className="text-[10px] sm:text-xs uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-lg italic">
        {isPast ? 'Happily married since ❤️' : 'Counting down to forever ❤️'}
      </p>
    </section>
  )
}
