import Image from "next/image";

import TeamImg01 from "@/public/images/team-01.jpg";
import TeamImg02 from "@/public/images/team-02.jpg";
import TeamImg03 from "@/public/images/team-03.jpg";
import TeamImg04 from "@/public/images/team-04.jpg";
import TeamImg05 from "@/public/images/team-05.jpg";
import TeamImg06 from "@/public/images/team-06.jpg";
import TeamImg07 from "@/public/images/team-07.jpg";
import TeamImg08 from "@/public/images/team-08.jpg";
import TeamImg09 from "@/public/images/team-09.jpg";
import TeamImg10 from "@/public/images/team-10.jpg";
import TeamImg11 from "@/public/images/team-11.jpg";
import TeamImg12 from "@/public/images/team-12.jpg";

const teamMembers = [
  {
    image: TeamImg01,
    name: "Governor Andy Beshear",
    role: "Honorary Chair"
  },
  {
    image: TeamImg02,
    name: "Dr. Terry Samuel",
    role: "Executive Director"
  },
  {
    image: TeamImg03,
    name: "Sarah Davasher-Wisdom",
    role: "Board Chair"
  },
  {
    image: TeamImg04,
    name: "Dr. Kris Kimel",
    role: "Founding Chair"
  },
  {
    image: TeamImg05,
    name: "Charles Aull",
    role: "Policy Director"
  },
  {
    image: TeamImg06,
    name: "Dr. Mary Lynne Capilouto",
    role: "Education Chair"
  },
  {
    image: TeamImg07,
    name: "Ian Mooers",
    role: "Tech Sector Representative"
  },
  {
    image: TeamImg08,
    name: "Judy Clabes",
    role: "Media & Communications"
  },
  {
    image: TeamImg09,
    name: "Dr. Eli Capilouto",
    role: "Higher Education Liaison"
  },
  {
    image: TeamImg10,
    name: "Britanny Ramsey",
    role: "Entrepreneur Programs"
  },
  {
    image: TeamImg11,
    name: "Dr. Eric Monday",
    role: "Economic Development"
  },
  {
    image: TeamImg12,
    name: "Carrie Mattingly",
    role: "Community Engagement"
  }
];

export default function Team() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              It's all about the people
            </h2>
          </div>
          {/* Members */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-40 text-center md:w-52">
                <div className="relative mb-4 inline-flex before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-indigo-500 before:to-gray-950 before:opacity-15">
                  <Image
                    className="rounded-full"
                    src={member.image}
                    width={80}
                    height={80}
                    alt={`Team member ${member.name}`}
                  />
                </div>
                <div className="mb-1 font-nacelle text-lg text-gray-200">
                  {member.name}
                </div>
                <p className="text-sm text-indigo-200/65">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
