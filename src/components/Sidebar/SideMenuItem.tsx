"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export interface SideMenuItemProps {
  href: string;
  iconName: string;
  children: React.ReactNode;
}

export function SideMenuItem({ href, iconName, children }: SideMenuItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
      >
        <Icon icon={iconName} className="h-6 w-6" />
        {children}
      </Link>
    </li>
  );
}
