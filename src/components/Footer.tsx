"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
  Maximize2,
} from "lucide-react";

export function Footer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLInputElement>(null);
  const togglePlay = () => setPlaying((p) => !p);
  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <footer className="z-50 fixed bottom-0 left-0 right-0 h-24 bg-zinc-900 text-zinc-400 px-6 flex items-center justify-center md:justify-between select-none">
      <div className="hidden md:flex items-center gap-4 md:w-1/4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src="/pokemoncover.png"
            alt="Pokemon Theme"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-semibold truncate">
            Gotta catch 'em all
          </span>
          <span className="text-sm truncate">Pokemon</span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="flex items-center gap-6 mb-1">
          <Shuffle className="w-5 h-5 hover:text-white cursor-pointer" />
          <SkipBack className="w-5 h-5 hover:text-white cursor-pointer" />
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
          >
            {playing ? (
              <Pause className="w-5 h-5 text-zinc-900" />
            ) : (
              <Play className="w-5 h-5 text-zinc-900" />
            )}
          </button>
          <SkipForward className="w-5 h-5 hover:text-white cursor-pointer" />
          <Repeat className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 text-xs w-full">
          <span>0:00</span>
          <input
            ref={progressRef}
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={onSeek}
            className="flex-1 h-1 bg-zinc-700 rounded-lg accent-green-500 cursor-pointer"
          />
          <span>3:03</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4 md:w-1/4 justify-end">
        <Volume2 className="w-5 h-5 hover:text-white cursor-pointer" />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          defaultValue={50}
          className="w-24 h-1 bg-zinc-700 rounded-lg accent-green-500 cursor-pointer"
        />
        <Maximize2 className="w-5 h-5 hover:text-white cursor-pointer" />
      </div>
    </footer>
  );
}
