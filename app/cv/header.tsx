"use client";
import { ArrowLeft, Eye, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Header: React.FC = ({}) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            ></span>
          </div>

          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden pt-24 sm:pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {" "}
              Thomas O'Brien
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              I am an ambitious PhD student with a deep interest in
              general-purpose robotics. My academic and research endeavours have
              been centered around the development of control techniques to
              enable robots to interact with their environment in a safe and
              robust manner to achieve complex tasks.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <Link
                target="_blank"
                key={"Github"}
                href={"https://github.com/Tom0Brien"}
              >
                {"github.com/Tom0Brien "}
              </Link>
              <Link
                target="_blank"
                key={"Github"}
                href={"mailto:thomas16441@gmail.com"}
              >
                {"thomas16441@gmail.com "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};