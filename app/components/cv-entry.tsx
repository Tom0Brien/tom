"use client";

type CVEntryProps = {
	year: string;
	title?: string;
	description: string;
	location?: string; // This is optional, as some entries might not have a location.
	link?: string; // This is optional, as some entries might not have a link.
};

export function CVEntry({
	year,
	title,
	description,
	location,
	link,
}: CVEntryProps) {
	return (
		<div className="py-1.5 border-b border-zinc-100 last:border-b-0">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-2 items-start">
				<div className="md:col-span-3 flex items-start gap-1.5">
					<span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-zinc-900 ring-2 ring-white"></span>
					<div className="leading-tight">
						<div className="text-xs font-semibold text-zinc-900">{year}</div>
						{title && (
							<div className="text-xs text-zinc-600 mt-0.5">
								<strong className="font-medium text-zinc-800">{title}</strong>
							</div>
						)}
					</div>
				</div>
				<div className="md:col-span-6">
					<p className="text-sm text-zinc-700">{description}</p>
				</div>
				<div className="md:col-span-3 text-zinc-600 text-sm">
					{link ? (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600 hover:text-zinc-800"
						>
							{location}
						</a>
					) : (
						<span>{location}</span>
					)}
				</div>
			</div>
		</div>
	);
}
