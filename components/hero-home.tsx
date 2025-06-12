import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
            >
              Fueling Kentucky's Innovation Economy
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-300"
              >
                Your gateway to entrepreneurship resources, funding opportunities,
                and startup support across the Bluegrass State
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-3">
                <div>
                  <Link
                    href="/resources"
                    className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                  >
                    Explore Resources
                  </Link>
                </div>
                <div>
                  <Link
                    href="/about"
                    className="btn-sm bg-linear-to-t from-gray-800 to-gray-700 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-200 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.08)] hover:bg-[length:100%_150%]"
                  >
                    Learn About Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Kentucky innovation video thumbnail"
            video="videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
