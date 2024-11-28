import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
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
          <span className="text-zinc-500 text-xs flex items-center gap-1">
            <Eye className="w-4 h-4" />
          </span>
        </div>

        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display mt-4">
          {project.title}
        </h2>
        {project.media && (
          <div className="relative w-full h-48 mt-4 overflow-hidden rounded-lg">
            {project.media.endsWith(".mp4") ? (
              <div className="relative w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-contain bg-black"
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
        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>

        {project.repository && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-zinc-400 text-sm">
              <a
                href={`https://github.com/${project.repository}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-200 duration-200"
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
          </div>
        )}
      </article>
    </Link>
  );
};
