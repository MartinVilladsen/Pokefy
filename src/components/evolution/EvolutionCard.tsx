"use client"

import { cn } from "@/lib/utils"
import type { Evolution } from "@/model/Pokemon"
import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { useMemo } from "react"

type EvolutionCardProps = {
    evolution: Evolution
    isActive: boolean
    onMouseEnterAction: () => void
    onMouseLeaveAction: () => void
}

export function EvolutionCard({ evolution, isActive, onMouseEnterAction, onMouseLeaveAction }: EvolutionCardProps) {
    const username = useMemo(() => `${evolution.name}_fan${Math.floor(Math.random() * 100)}`, [evolution.id])

    const minutesAgo = useMemo(() => Math.floor(Math.random() * 59) + 1, [evolution.id])

    return (
        <div
            className={cn(
                "w-full flex items-center gap-3 p-2 rounded-md transition-all duration-300",
                isActive ? "bg-white/10" : "hover:bg-white/5",
            )}
            onMouseEnter={onMouseEnterAction}
            onMouseLeave={onMouseLeaveAction}
        >
            <div className="relative min-w-12 h-12 rounded-full bg-gradient-to-br transition-all duration-300">
                <Image
                    src={evolution.image || ""}
                    alt={username}
                    width={48}
                    height={48}
                    className="object-contain z-10 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                />
            </div>

            <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{username}</span>
                <div className="flex items-center gap-1">
                    <span className="text-xs text-zinc-400">Playing</span>
                    <Link href={`/pokemon/${evolution.name}`} className="text-xs text-green-400 hover:underline capitalize">
                        {evolution.name}
                    </Link>
                </div>
                <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3 text-zinc-500" />
                    <span className="text-xs text-zinc-500">{minutesAgo} min ago</span>
                </div>
            </div>
        </div>
    )
}
