"use client";
import { useRef } from "react";
export const useMagnetic = <T extends HTMLElement>() => useRef<T>(null);
