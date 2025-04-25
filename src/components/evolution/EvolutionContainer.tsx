import type { ReactNode } from "react"
import { Users } from "lucide-react"

type EvolutionContainerProps = {
    children: ReactNode
}

export function EvolutionContainer({ children }: EvolutionContainerProps) {
    return (
        <div className="flex flex-col w-96 shrink-0 bg-black/20 backdrop-blur-sm rounded-xl p-4 h-fit sticky top-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Friend Activity
                </h3>
            </div>
            <div className="flex flex-col gap-3">{children}</div>
        </div>
    )
}
