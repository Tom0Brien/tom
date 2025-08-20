"use client";
import { Navigation } from "../components/nav";
import { CVEntry } from "../components/cv-entry";
import { Header } from "./header";

export default function Example() {
  return (
    <div className="bg-white">
      <Navigation />
      <Header />
      <div className="container min-h-screen mx-auto px-3 py-4">
        <div className="grid w-full grid-cols-1 gap-5 mx-auto sm:grid-cols-1 lg:gap-6 px-3 py-2 bg-white">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Professional Experience</h2>
            <div className="h-px bg-black/80 my-1"></div>
            {/* Concise roles only */}
            <CVEntry
              year="2024-"
              title="Software Engineer"
              description="Machine learning-based vision systems for rail operations"
              location="4AI Systems"
            />
            <CVEntry
              year="2025-"
              title="Research Associate"
              description="Vision, planning and state estimation for maritime drones"
              location="University of Newcastle"
            />
            <CVEntry
              year="2020-"
              title="Robotics Researcher"
              description="Humanoid robotics software and research"
              location="NUbots"
            />
            <CVEntry
              year="2025"
              title="Visiting Researcher"
              description="Sampling-based MPC for non-prehensile manipulation"
              location="LAAS-CNRS"
            />
            <CVEntry
              year="2025"
              title="Visiting Researcher"
              description="Energy-based control for underactuated systems"
              location="Prisma Lab"
            />
            <CVEntry
              year="2023"
              title="Research Assistant"
              description="3D LiDAR track detection and dataset tooling"
              location="University of Newcastle"
            />
            <CVEntry
              year="2021-2022"
              title="Mechatronics Engineer"
              description="Drain camera embedded system"
              location="Varley Group"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Education</h2>
            <div className="h-px bg-black/80 my-1"></div>
            {/* Concise education */}
            <CVEntry
              year="2022-"
              title="PhD"
              description="Passivity-based control for complex robot–environment interactions"
              location="University of Newcastle"
            />
            <CVEntry
              year="2018-2021"
              title="Bachelor (Honours)"
              description="Mechatronics Engineering (Class I Honours)"
              location="University of Newcastle"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Teaching</h2>
            <div className="h-px bg-black/80 my-1"></div>
            <CVEntry
              year="2022-"
              title="Teaching Assistant / Tutor"
              description="AERO3600 – Embedded Control Systems"
              location="University of Newcastle"
            />
            <CVEntry
              year="2022-"
              title="Teaching Assistant / Tutor"
              description="MCHA3500 – Mechatronics Design"
              location="University of Newcastle"
            />
            <CVEntry
              year="2024-"
              title="Supervisor"
              description="ENGG4801 – Final Year Project; SCIE3002 – Work Integrated Learning"
              location="University of Newcastle"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Achievements</h2>
            <div className="h-px bg-black/80 my-1"></div>
            <ul className="list-disc pl-6 space-y-0 text-zinc-700 text-sm leading-tight">
              <li>
                World Robot Humanoid Games 2025 Beijing: 5th – RCAP Beijing Masters (Team Leader)
              </li>
              <li>RoboCup 2025 Salvador: 3rd – Humanoid League (Team Leader)</li>
              <li>RoboCup 2024 Eindhoven: 4th – Humanoid League (Team Leader)</li>
              <li>RoboCup 2023 Bordeaux: Quarterfinalist – Humanoid League</li>
              <li>RoboCup 2022 Thailand: Quarterfinalist – Humanoid League</li>
              <li>Warman Competition 2022: 1st – University of Newcastle</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Awards</h2>
            <div className="h-px bg-black/80 my-1"></div>
            <CVEntry year="2021" description="College Medal, College of Engineering Science and Environment" location="University of Newcastle" />
            <CVEntry year="2021" description="College Commendation List" location="University of Newcastle" />
            <CVEntry year="2018-2021" description="Faculty Commendation List (2018–2021)" location="University of Newcastle" />
            <CVEntry year="2017" description="Vice-Chancellor’s Award for Academic Excellence in Year 12" location="University of Newcastle" />
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Selected Publications</h2>
            <div className="h-px bg-black/80 my-1"></div>
            <ul className="space-y-1 text-zinc-700 text-sm leading-tight">
              <li>[J1] Thomas O'Brien, Joel Ferguson, Alejandro Donaire, "Orbital Stabilization of Hybrid Mechanical Systems - A port-Hamiltonian Approach," Preprint, 2025.</li>
              <li>[J2] Fadi Gebrayel, Thomas O'Brien, Martin Mujica, Patrick Danès, "Point Cloud Based Visual Planning and Servoing for Autonomous Vine Pruning," Preprint, 2025.</li>
            </ul>
            <ul className="mt-1.5 space-y-1 text-zinc-700 text-sm leading-tight">
              <li>[C1] Thomas O'Brien, Joel Ferguson, Alejandro Donaire, "A port-Hamiltonian formulation of mechanical systems with switching contact constraints," European Control Conference (ECC), Thessaloniki, Greece, 2025.</li>
              <li>[C2] Thomas O'Brien, Joel Ferguson, Alejandro Donaire, "Exponentially Stable Regulation of Mechanical Systems to a Path," IFAC World Congress, Yokohama, Japan, 2023.</li>
              <li>[C3] Thomas O'Brien, Ysobel Sims, "Exploring GPT-4 for Robotic Agent Strategy with Real-Time State Feedback," ACRA, Sydney, Australia, 2023.</li>
              <li>[C4] Ysobel Sims, Trent Houliston, Thomas O'Brien, et al., "SoS: A Semi-Synthetic RoboCup Soccer Dataset for Visual Segmentation," RoboCup Symposium, Eindhoven, Netherlands, 2024.</li>
              <li>[C5] Khaled Saleh, Thomas O'Brien, "Efficient Sequence Model for Early Fall Detection of Humanoid Robots," RoboCup Symposium, Eindhoven, Netherlands, 2024.</li>
              <li>[C6] Ysobel Sims, Trent Houliston, Thomas O'Brien, "The Director: A Composable Behaviour System with Soft Transitions," RoboCup Symposium, Eindhoven, Netherlands, 2024.</li>
            </ul>
            <ul className="mt-1.5 space-y-1 text-zinc-700 text-sm leading-tight">
              <li>[W1] Thomas O'Brien, "Humanoid State Estimation in RoboCup," IEEE-RAS Humanoids, Nancy, France, 2024.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
            <div className="h-px bg-black/80 my-1"></div>
            <p className="font-semibold">Software</p>
            <div className="space-y-1 mt-1">
              <CVEntry year="2025" description="NUbook – The NUbots team handbook and documentation" location="github.com/NUbots/NUbook" link="https://github.com/NUbots/NUbook" />
              <CVEntry year="2025" description="NUWebots – Webots simulation environment for NUbots robots" location="github.com/NUbots/NUWebots" link="https://github.com/NUbots/NUWebots" />
              <CVEntry year="2025" description="tinympc – Lightweight MPC/NMPC in C++ (Eigen3)" location="github.com/Tom0Brien/tinympc" link="https://github.com/Tom0Brien/tinympc" />
              <CVEntry year="2023" description="NUbots – Control, locomotion, state estimation, vision, behaviour software for humanoid robots" location="github.com/nubots/nubots" link="https://github.com/nubots/nubots" />
              <CVEntry year="2023" description="tinyrobotics – Lightweight C++ robotics dynamics/kinematics library" location="github.com/Tom0Brien/tinyrobotics" link="https://github.com/Tom0Brien/tinyrobotics" />
              <CVEntry year="2023" description="urdf-visualizer – Web-based robot visualiser (three.js)" location="github.com/Tom0Brien/urdf-visualizer" link="https://github.com/Tom0Brien/urdf-visualizer" />
            </div>
            <p className="font-semibold mt-3">Hardware</p>
            <ul className="list-disc pl-6 mt-1 space-y-0 text-zinc-700 text-sm leading-tight">
              <li>
                NUgus (2023) – Design and development of small-sized humanoid robot platform
              </li>
              <li>
                NUsense (2025) – Humanoid subcontroller for actuators (Dynamixel) and sensors (IMU) using RS485 and Intel NUC over USB
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">Reviewing Activities</h2>
            <div className="h-px bg-black/80 my-1"></div>
            <ul className="list-disc pl-6 space-y-0 text-zinc-700 text-sm leading-tight">
              <li>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) — 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
