"use client";
import { Navigation } from "../components/nav";
import { CVEntry } from "../components/cv-entry";

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16">
				<div>
					<div className="h-px bg-white mb-4 mt-16"></div> {/* This is the white horizontal divider */}
					<h2 className="text-xl font-bold text-white">Thomas O'Brien</h2>
					<div className="text-white text-xl">
					Hardworking PhD student bringing forth a motivated attitude and a variety of technical skills, eager to pursue a career in the field of general purpose robotics. Extensive experience in developing software and hardware based systems to solve problems in both the real world and simulation.
					</div>
					<div className="text-l text-white">
						<a href="https://github.com/Tom0Brien" target="_blank" rel="noopener noreferrer">github.com/Tom0Brien</a>
					</div>
					<div className="text-l text-white">
						thomas16441@gmail.com
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white">Professional Experience</h2>
					<div className="h-px bg-white mb-4"></div> {/* This is the white horizontal divider */}
					<CVEntry year="2020-2023" title="Robotics Researcher" description="Team leader at Newcastle Robotics Research Laboratory" location="University of Newcastle"/>
					<CVEntry year="2021-2022" title="Mechatronics Engineer" description="Development of a drain camera system (embedded system and real-time operating system)" location="Varley"/>
					<CVEntry year="2018-2021" title="Software Engineer" description="Design and development of websites and custom software applications" location="Enrichedhealthcare"/>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white">Education</h2>
            		<div className="h-px bg-white mb-4"></div> {/* This is the white horizontal divider */}
					<CVEntry year="2022-" title="PhD" description="Ongoing PhD in Mechanical Engineering" location="University of Newcastle"/>
					<CVEntry year="2018-2021" title="Bachelor (Honours)" description="Bachelor of Mechatronics Engineering (Honours)" location="University of Newcastle"/>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white">Teaching</h2>
            		<div className="h-px bg-white mb-4"></div> {/* This is the white horizontal divider */}
					<CVEntry year="2022-" title="Tutor" description="AERO3600 - Embedded Control Systems" location="University of Newcastle"/>
					<CVEntry year="2022-" title="Tutor" description="MCHA3500 - Mechatronics Design" location="University of Newcastle"/>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white">Talks</h2>
            		<div className="h-px bg-white mb-4"></div> {/* This is the white horizontal divider */}
					<CVEntry year="2023" title="" description="Exponentially Stable Regulation of Mechanical Systems to a Path" location="IFAC2023"/>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white">Software</h2>
            		<div className="h-px bg-white mb-4"></div> {/* This is the white horizontal divider */}
					<CVEntry year="2023" description="tinyrobotics - A lightweight, fast and versatile C++ library for robotics." location="github.com/Tom0Brien/tinyrobotics" link="https://github.com/Tom0Brien/tinyrobotics"/>
					<CVEntry year="2023" description="urdf-visualizer - A web based robot visualizer using three.js" location="github.com/Tom0Brien/urdf-visualizer" link="https://github.com/Tom0Brien/urdf-visualizer"/>
					<CVEntry year="2023" description="NUbots codebase - Development of locomotion, localisation, state-estimation and behaviour systems for humanoid robot" location="github.com/NUbots/NUbots" link="https://github.com/NUbots/NUbots"/>
				</div>
				</div>
			</div>
		</div>
	);
}