"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "contentlayer/generated";

type Props = {
  project: Project;
};

export const FeaturedProject: React.FC<Props> = ({ project }) => {
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
      <div className="relative w-full h-full p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <div className="text-xs duration-200 text-neo-text-secondary group-hover:text-neo-text-primary">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                }).format(new Date(project.date))}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </div>
        </div>

        <h2 className="mt-4 text-xl font-medium text-neo-accent sm:text-2xl duration-300">
          {project.title}
        </h2>
        
        {project.media && (
          <div className="relative w-full h-96 mt-4 overflow-hidden rounded-lg border border-gray-100">
            {project.media.endsWith(".mp4") ? (
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              >
                <source src={project.media} type="video/mp4" />
              </video>
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
        
        <p className="mt-4 leading-8 duration-300 text-neo-text-primary/70 group-hover:text-neo-text-primary">
          {project.description}
        </p>
        
        <div className="absolute bottom-4 md:bottom-8">
          <p className="hidden text-neo-text-secondary hover:text-neo-text-primary lg:block">
            Read more <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
