import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Terminal from './components/terminal';
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Article } from "./projects/article";
import Image from "next/image";

const navigation = [
	{ name: "CV", href: "/cv" },
	{ name: "Projects", href: "/projects" },
	{ name: "Notes", href: "/notes" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	// Get featured projects for the main page
	const featured = allProjects.find(
		(project) => project.slug === "nubots_walk_engine"
	)!;
	const top2 = allProjects.find(
		(project) => project.slug === "nubots_localisation"
	)!;
	const top3 = allProjects.find(
		(project) => project.slug === "nubots_state_estimation"
	)!;

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-300 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			
			<h1 className="z-10 text-4xl text-transparent duration-600 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				tom
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			
			<div className="my-16 text-center animate-fade-in">
				<Terminal
					text="Hii, I work on robotics. See some of my work below."
				/>
			</div>

			{/* Projects Section */}
			<div className="w-full max-w-7xl px-6 mx-auto space-y-8 animate-fade-in">

				{/* Featured Project */}
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card>
						<Link href={`/projects/${featured.slug}`} className="block w-full h-full">
							<div className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
								</div>

								<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
									{featured.title}
								</h2>
								
								{featured.media && (
									<div className="relative w-full h-96 mt-4 overflow-hidden rounded-lg">
										{featured.media.endsWith(".mp4") ? (
											<video
												autoPlay
												loop
												muted
												playsInline
												className="object-cover w-full h-full"
											>
												<source src={featured.media} type="video/mp4" />
											</video>
										) : (
											<Image
												src={featured.media}
												alt={featured.title}
												fill
												className="object-cover"
											/>
										)}
									</div>
								)}
								
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.description}
								</p>
								
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</div>
						</Link>
					</Card>
					
					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} />
							</Card>
						))}
					</div>
				</div>

				{/* View All Projects Link */}
				<div className="text-center">
					<Link
						href="/projects"
						className="inline-flex items-center px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800/70 hover:border-zinc-600 transition-colors duration-200"
					>
						View All Projects
						<span className="ml-2">&rarr;</span>
					</Link>
				</div>
			</div>

			<div className="my-16" />
		</div>
	);
}
