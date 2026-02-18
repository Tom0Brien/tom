"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-neo-bg/0 border-transparent"
						: "bg-neo-bg/80  border-neo-bg-secondary "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
					<Link
							href="/CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="duration-200 text-neo-text-secondary hover:text-neo-text-primary"
						>
							CV
						</Link>
						<Link
							href="/#projects"
							className="duration-200 text-neo-text-secondary hover:text-neo-text-primary"
						>
							Projects
						</Link>
						<Link
							href="/#contact"
							className="duration-200 text-neo-text-secondary hover:text-neo-text-primary"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-neo-text-secondary hover:text-neo-text-primary"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
