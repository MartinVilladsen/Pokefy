interface SectionHeaderProps {
    title: string
  }
  
  export function SectionHeader({ title }: SectionHeaderProps) {
    return (
      <h2 className="text-2xl font-bold text-white border-b border-zinc-700 pb-2">
        {title}
      </h2>
    )
  }
  