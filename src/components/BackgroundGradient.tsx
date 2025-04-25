export function BackgroundGradient() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
  
    return (
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-800 from-opacity-80 to-zinc-900 to-opacity-95 z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18,18,18,0) 0%, #121212 100%), 
                           linear-gradient(180deg, rgba(${r},${g},${b}, 0.3) 0%, transparent 100%)`,
        }}
      />
    )
  }
  