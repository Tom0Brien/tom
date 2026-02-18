"use client";
import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {
  project: Project;
  compact?: boolean;
};

export const Article: React.FC<Props> = ({ project, compact = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="block w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-200 text-neo-text-secondary group-hover:text-neo-text-primary drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className="text-neo-text-secondary text-xs flex items-center gap-1">
            <Eye className="w-4 h-4" />
          </span>
        </div>

        <h2 className={`z-20 font-medium duration-300 text-neo-accent mt-4 ${compact ? "text-lg lg:text-xl" : "text-xl lg:text-2xl"}`}>
          {project.title}
        </h2>
        {project.media && (
          <div className="relative w-full h-48 mt-4 overflow-hidden rounded-lg">
            {project.media.endsWith(".mp4") ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-contain bg-neo-bg-secondary"
                >
                  <source src={project.media} type="video/mp4" />
                </video>
              </div>
            ) : (
              <Image
                src={project.media}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>
        )}
        <p className="z-20 mt-4 text-sm duration-300 text-neo-text-primary/70 group-hover:text-neo-text-primary">
          {project.description}
        </p>

        {(project.repository || project.paper) && (
          <div className="flex items-center gap-4 mt-4">
            {project.repository && (
              <span className="text-neo-text-secondary text-sm">
                <a
                  href={`https://github.com/${project.repository}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neo-text-primary duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block ml-1 mb-1"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>{" "}
                  Github
                </a>
              </span>
            )}
            {project.paper && (
              <span className="text-neo-text-secondary text-sm">
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neo-text-primary duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block ml-1 mb-1"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>{" "}
                  Paper
                </a>
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
