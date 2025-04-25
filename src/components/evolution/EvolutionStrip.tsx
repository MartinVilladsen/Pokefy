"use client"

import type {Evolution} from "@/model/Pokemon"
import {useState} from "react"
import {EvolutionCard} from "./EvolutionCard"
import {EmptyEvolutionState} from "./EmptyEvolutionState"
import {EvolutionContainer} from "./EvolutionContainer"

type EvolutionStripProps = {
    evolutions: Array<Evolution>
}

export function EvolutionStrip({evolutions}: EvolutionStripProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    if (!evolutions.length) {
        return <EmptyEvolutionState/>
    }

    return (
        <EvolutionContainer>
            {evolutions.map((evolution, index) => (
                <div key={evolution.id} className="flex items-center w-full">
                    <EvolutionCard
                        evolution={evolution}
                        isActive={activeIndex === index}
                        onMouseEnterAction={() => setActiveIndex(index)}
                        onMouseLeaveAction={() => setActiveIndex(null)}
                    />
                </div>
            ))}
        </EvolutionContainer>
    )
}
