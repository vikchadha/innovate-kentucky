export default function Timeline() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Kentucky's Innovation Journey
            </h2>
            <p className="text-lg text-indigo-200/65">
              Key milestones in building Kentucky's thriving innovation ecosystem
            </p>
          </div>

          {/* Items */}
          <div
            className="-my-4 mx-auto max-w-3xl md:-my-6"
            data-aos-id-timeline=""
          >
            {/* 1st item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Foundation
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2010
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Kentucky Science & Technology Corporation established
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Laid the groundwork for statewide innovation initiatives and STEM education programs
                </p>
              </div>
            </div>

            {/* 2nd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Growth
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2016
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Launch of KY Innovation initiative
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Statewide program to support entrepreneurs and startups through funding, mentorship, and resources
                </p>
              </div>
            </div>

            {/* 3rd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Expansion
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2022
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    InnovateKentucky.org launched
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Centralized digital hub connecting Kentucky entrepreneurs with resources, funding, and support statewide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
