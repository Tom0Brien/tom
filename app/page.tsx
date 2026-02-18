import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Terminal from './components/terminal';
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Article } from "./projects/article";
import Image from "next/image";
import { Github, Mail, Linkedin } from "lucide-react";
import { FeaturedProject } from "./components/featured-project";

const navigation = [
	{ name: "CV", href: "/CV.pdf" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/thomas-o-brien-47078b165/?originalSubdomain=au",
		label: "LinkedIn",
		handle: "@tom",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@thomas.obrien@uon.edu.au",
		label: "Email",
		handle: "thomas.obrien@uon.edu.au",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Tom0Brien",
		label: "Github",
		handle: "Tom0Brien",
	},
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

	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
		);

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden bg-neo-bg">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							target={item.href.endsWith(".pdf") ? "_blank" : undefined}
							rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
							className="text-sm duration-300 text-neo-text-secondary hover:text-neo-text-primary"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			
			<div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-gray-200/0 via-gray-200/50 to-gray-200/0" />
			
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			
			<h1 className="z-10 text-4xl text-transparent duration-600 bg-neo-accent cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				tom
			</h1>

			<div className="hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-gray-200/0 via-gray-200/50 to-gray-200/0" />
			
			<div className="my-16 text-center animate-fade-in">
				<Terminal
					text="Hii, I work on robotics. See some of my work below."
				/>
			</div>

			{/* Projects Section */}
			<div id="projects" className="w-full max-w-7xl px-6 mx-auto space-y-8 animate-fade-in pt-16">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-medium tracking-tight text-neo-accent sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-neo-text-primary/70">Some projects I've worked on.</p>
				</div>
				<div className="w-full h-px bg-neo-bg-secondary" />

				{/* Featured Project */}
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card>
						<FeaturedProject project={featured} />
					</Card>
					
					<div className="flex flex-col w-full gap-8 mx-auto border-t border-neo-bg-secondary lg:mx-0 lg:border-t-0">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} />
							</Card>
						))}
					</div>
				</div>

				<div className="hidden w-full h-px md:block bg-neo-bg-secondary" />

				{/* All Other Projects */}
				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
					{sorted.map((project) => (
						<Card key={project.slug}>
							<Article project={project} compact />
						</Card>
					))}
				</div>
			</div>

			{/* Contact Section */}
			<div id="contact" className="w-full max-w-7xl px-6 mx-auto space-y-8 animate-fade-in pt-32 pb-16">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-medium tracking-tight text-neo-accent sm:text-4xl">
						Contact
					</h2>
					<p className="mt-4 text-neo-text-primary/70">Let's get in touch.</p>
				</div>
				<div className="w-full h-px bg-neo-bg-secondary" />
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-neo-bg-secondary via-neo-bg-secondary/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-neo-text-secondary group-hover:text-neo-text-primary group-hover:bg-neo-bg-secondary border-neo-bg-secondary bg-neo-bg group-hover:border-neo-text-secondary drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-lg font-medium duration-300 lg:text-2xl text-neo-accent text-center break-words px-4">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-300 text-neo-text-secondary group-hover:text-neo-text-primary">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>

			<div className="my-16" />
		</div>
	);
}
