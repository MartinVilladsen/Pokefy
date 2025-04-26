import { Users } from "lucide-react"

export function EmptyEvolutionState() {
    return (
        <div className="flex flex-col w-80 shrink-0 bg-black/20 backdrop-blur-sm rounded-xl p-4 h-fit sticky top-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Friend Activity
                </h3>
            </div>
            <p className="text-sm text-zinc-400">Connect with friends to see what they&apos;re playing.</p>
            <button className="mt-4 text-sm font-medium text-black bg-green-400 hover:bg-green-500 transition-colors py-2 px-4 rounded-full">
                Find Friends
            </button>
        </div>
    )
}
