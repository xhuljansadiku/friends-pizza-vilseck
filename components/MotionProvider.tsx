"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Skips transform animations site-wide when the visitor has "Reduce motion" turned on. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
