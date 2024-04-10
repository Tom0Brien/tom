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
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 flex mb-2 md:mb-0">
          {year}
          {title && (
            <>
              <span className="px-1"> : </span> <strong>{title}</strong>
            </>
          )}
        </div>
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <p>{description}</p>
        </div>
        <div className="w-full md:w-1/4">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {location}
            </a>
          ) : (
            location
          )}
        </div>
      </div>
    </div>
  );
}
