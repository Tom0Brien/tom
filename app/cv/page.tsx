"use client";
import { Navigation } from "../components/nav";
import { CVEntry } from "../components/cv-entry";
import { Header } from "./header";

export default function Example() {
  return (
    <div className="bg-white">
      <Navigation />
      <Header />
      <div className="container flex min-h-screen px-4 mx-auto py-12">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16 px-4 py-6 bg-white mt-24">
          <div>
            <h2 className="text-xl font-bold">Professional Experience</h2>
            <div className="h-px bg-black mb-4"></div>{" "}
            {/* This is the white horizontal divider */}
            <CVEntry
              year="2020-2024"
              title="Robotics Researcher"
              description="Team leader at Newcastle Robotics Research Laboratory"
              location="University of Newcastle"
            />
            <CVEntry
              year="2023-2024"
              title="Software Engineer"
              description="Machine learning vision systems to enhance rail network operations"
              location="4AI Systems"
            />
            <CVEntry
              year="2023-2023"
              title="Research Assistant"
              description="Rail line detection within 3D point cloud data"
              location="University of Newcastle"
            />
            <CVEntry
              year="2021-2022"
              title="Mechatronics Engineer"
              description="Development of a drain camera system (embedded system and real-time operating system)"
              location="Varley"
            />
            <CVEntry
              year="2018-2021"
              title="Software Engineer"
              description="Design and development of websites and custom software applications"
              location="Enrichedhealthcare"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Education</h2>
            <div className="h-px bg-black mb-4"></div>{" "}
            {/* This is the white horizontal divider */}
            <CVEntry
              year="2022-2024"
              title="PhD"
              description="Mechanical Engineering - 'Passivity based methods for complex-robot environment interactions'"
              location="University of Newcastle"
            />
            <CVEntry
              year="2018-2021"
              title="Bachelor (Honours)"
              description="Bachelor of Mechatronics Engineering (First Class Honours)"
              location="University of Newcastle"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Teaching</h2>
            <div className="h-px bg-black mb-4"></div>{" "}
            {/* This is the white horizontal divider */}
            <CVEntry
              year="2022-"
              title="Tutor"
              description="AERO3600 - Embedded Control Systems"
              location="University of Newcastle"
            />
            <CVEntry
              year="2022-"
              title="Tutor"
              description="MCHA3500 - Mechatronics Design"
              location="University of Newcastle"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Talks</h2>
            <div className="h-px bg-black mb-4"></div>{" "}
            {/* This is the white horizontal divider */}
            <CVEntry
              year="2023"
              title=""
              description="Exponentially Stable Regulation of Mechanical Systems to a Path"
              location="IFAC2023"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold">Awards and Scholarships</h2>
            <div className="h-px bg-black mb-4"></div>{" "}
            {/* This is the white horizontal divider */}
            <CVEntry
              year="2017"
              description="College Principals Award."
              location="Callaghan College Jesmond"
            />
            <CVEntry
              year="2017"
              description="Principles Award of Excellence for Chemistry, Maths, Physics, Software and Engineering Studies"
              location="Callaghan College Jesmond"
            />
            <CVEntry
              year="2017"
              description="Vice-Chancellor’s Award for Academic Excellence in Year 12"
              location="University of Newcastle"
            />
            <CVEntry
              year="2021"
              description="Faculty of Engineering and Built Environment Commendation List 2018, 2019 and 2020"
              location="University of Newcastle"
            />
            <CVEntry
              year="2021"
              description="College Commendation List - College of EngineeringScience and Environment"
              location="University of Newcastle"
            />
            <CVEntry
              year="2022"
              description="Higher Degree by Research (HDR) scholarship at the University of Newcastle"
              location="University of Newcastle"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold">Software</h2>
            <div className="h-px bg-black mb-4"></div>{" "}
            {/* This is the white horizontal divider */}
            <CVEntry
              year="2023"
              description="tinyrobotics - A lightweight, fast and versatile C++ library for robotics"
              location="github.com/Tom0Brien/tinyrobotics"
              link="https://github.com/Tom0Brien/tinyrobotics"
            />
            <CVEntry
              year="2023"
              description="urdf-visualizer - A web based robot visualizer using three.js"
              location="github.com/Tom0Brien/urdf-visualizer"
              link="https://github.com/Tom0Brien/urdf-visualizer"
            />
            <CVEntry
              year="2023"
              description="NUbots codebase - Development of locomotion, localisation, state-estimation and behaviour systems for humanoid robot"
              location="github.com/NUbots/NUbots"
              link="https://github.com/NUbots/NUbots"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
