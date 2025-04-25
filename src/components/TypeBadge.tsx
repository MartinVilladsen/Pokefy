type TypeBadgeProps = {
    type: string
  }
  
  export function TypeBadge({ type }: TypeBadgeProps) {
    const typeColors = {
      normal: { bg: "#A8A878", text: "#FFFFFF" },
      fire: { bg: "#F08030", text: "#FFFFFF" },
      water: { bg: "#6890F0", text: "#FFFFFF" },
      electric: { bg: "#F8D030", text: "#212121" },
      grass: { bg: "#78C850", text: "#FFFFFF" },
      ice: { bg: "#98D8D8", text: "#212121" },
      fighting: { bg: "#C03028", text: "#FFFFFF" },
      poison: { bg: "#A040A0", text: "#FFFFFF" },
      ground: { bg: "#E0C068", text: "#212121" },
      flying: { bg: "#A890F0", text: "#FFFFFF" },
      psychic: { bg: "#F85888", text: "#FFFFFF" },
      bug: { bg: "#A8B820", text: "#FFFFFF" },
      rock: { bg: "#B8A038", text: "#FFFFFF" },
      ghost: { bg: "#705898", text: "#FFFFFF" },
      dragon: { bg: "#7038F8", text: "#FFFFFF" },
      dark: { bg: "#705848", text: "#FFFFFF" },
      steel: { bg: "#B8B8D0", text: "#212121" },
      fairy: { bg: "#EE99AC", text: "#212121" },
      default: { bg: "#68A090", text: "#FFFFFF" },
    }
  
    const typeColor = typeColors[type.toLowerCase() as keyof typeof typeColors] || typeColors.default
  
    return (
      <div
        className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center justify-center"
        style={{
          backgroundColor: typeColor.bg,
          color: typeColor.text,
          boxShadow: `0 2px 10px ${typeColor.bg}40`,
        }}
      >
        {type}
      </div>
    )
  }
  