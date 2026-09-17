import Image from "next/image";
import {
  ArrowUpRight,
  Bookmark,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";
import type { SVGProps } from "react";

function InstagramMark({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      width={size}
      {...props}
    >
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.45" cy="6.65" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

type InstagramPost = {
  image: string;
  caption: string;
  date: string;
  likes: string;
  comments: string;
};

const posts: InstagramPost[] = [
  {
    image: "/images/instagram/cost-of-learning.jpg",
    caption: "Learning system design one focused session at a time.",
    date: "2 days ago",
    likes: "TBD",
    comments: "TBD",
  },
  {
    image: "/images/instagram/rag-architecture.jpg",
    caption: "RAG architecture notes, experiments, and a little more data.",
    date: "4 days ago",
    likes: "TBD",
    comments: "TBD",
  },
  {
    image: "/images/instagram/vibe-coders.jpg",
    caption: "The late-night coder energy is real.",
    date: "6 days ago",
    likes: "TBD",
    comments: "TBD",
  },
  {
    image: "/images/instagram/job-ready.jpg",
    caption: "Day 2 of building the habits that make me job ready.",
    date: "1 week ago",
    likes: "TBD",
    comments: "TBD",
  },
];

const tags = [
  ["REELS", "Learning | Projects | Life"],
  ["POSTS", "Progress | Notes | Moments"],
  ["BUILDING", "Projects | Experiments"],
];

export function InstagramSection() {
  return (
    <section
      className=" section instagram !grid-cols-1 !gap-8 !bg-[#ddf3ff] !px-[max(5vw,1.25rem)] !py-[clamp(5rem,9vw,9rem)] lg:!grid-cols-[minmax(230px,0.72fr)_minmax(0,1.28fr)] lg:!gap-[clamp(2.5rem,6vw,6rem)]"
      id="instagramSection"
    >
      <div className="insta-copy !max-w-none">
        <div className="eyebrow">07 / FROM INSTAGRAM</div>
        <h2 className="!mb-5 !mt-6 !text-[clamp(3.8rem,8vw,7.6rem)] !leading-[0.82] !tracking-[-0.045em]">
          MY INSTAGRAM
          <br />
          <em className="!text-[var(--orange)]">JOURNEY.</em>
        </h2>
        <p className="!max-w-[420px] !text-[0.98rem] !leading-[1.55]">
          A peek into my daily learning, coding, projects, fitness, and life
          as a student developer. Follow me on Instagram for real-time
          updates, shorts, reels and more.
        </p>
        <a
          className="!mt-7 !rounded-full !border !border-[var(--foreground)] !bg-[var(--foreground)] !px-4 !py-3 !text-[0.68rem] !tracking-[0.06em] !text-white !no-underline transition-transform duration-200 hover:-translate-y-1"
          href="https://instagram.com/sonu.cs_2004"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramMark size={16} aria-hidden="true" /> Follow @sonu.cs_2004{" "}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <p className="!mt-12 !max-w-[270px] !font-[var(--display)] !text-[1.15rem] !leading-[0.95] !tracking-[0.01em]">
          Same journey.
          <br />
          Different platform. <span className="!text-[var(--orange)]">→</span>
        </p>

        <div className="!mt-12 !max-w-[390px] !border-t !border-[var(--border)] !pt-5">
          <div className="!mb-4 !text-[0.64rem] !font-black !tracking-[0.14em]">
            FOLLOW ME
          </div>
          <p className="!mb-5 !text-[0.82rem] !leading-[1.45]">
            For daily updates, reels, shorts and my developer journey.
          </p>
          <a
            className="!mb-6 !inline-flex !items-center !gap-1 !text-[0.74rem] !font-black !tracking-[0.04em] !text-[var(--orange)]"
            href="https://instagram.com/sonu.cs_2004"
            target="_blank"
            rel="noreferrer"
          >
            @sonu.cs_2004 <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <div className="!grid !gap-3">
            {tags.map(([label, detail]) => (
              <div className="!grid !grid-cols-[72px_1fr] !gap-3 !text-[0.65rem]" key={label}>
                <strong className="!font-black !tracking-[0.08em]">{label}</strong>
                <span className="!opacity-70">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="!min-w-0 !rounded-[1.5rem] !border !border-white/80 !bg-white/75 !p-3 !shadow-[0_18px_45px_rgba(7,18,28,0.12)] sm:!p-5">
        <div className="!mb-5 !flex !flex-wrap !items-center !justify-between !gap-4 !border-b !border-[var(--border)] !pb-4">
          <div className="!flex !items-center !gap-3">
            <InstagramMark className="!text-[var(--orange)]" size={23} aria-hidden="true" />
            <div>
              <div className="!text-[0.7rem] !font-black !tracking-[0.09em]">
                LATEST FROM INSTAGRAM
              </div>
              <div className="!mt-1 !text-[0.72rem] !opacity-65">
                Short updates. Big progress.
              </div>
            </div>
          </div>
          <a
            className="!inline-flex !items-center !gap-1 !rounded-full !border !border-[var(--border)] !px-3 !py-2 !text-[0.62rem] !font-black !tracking-[0.04em] transition-colors duration-200 hover:!bg-[var(--foreground)] hover:!text-white"
            href="https://instagram.com/sonu.cs_2004"
            target="_blank"
            rel="noreferrer"
          >
            View More on Instagram <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="!grid !grid-cols-1 !gap-4 sm:!grid-cols-2">
          {posts.map((post) => (
            <article
              className="group !overflow-hidden !rounded-[1rem] !border !border-[var(--border)] !bg-white !shadow-[0_8px_22px_rgba(7,18,28,0.08)] transition-transform duration-300 hover:-translate-y-1"
              key={post.image}
            >
              <div className="!relative !w-full !overflow-hidden !bg-[var(--foreground)]">
                <Image
                  className="!w-full !h-auto  "
                  src={post.image}
                  alt={post.caption}
                  width={1080}
                  height={1920}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 38vw"
                />
              </div>
              <div className="!p-3">
               
                <p className="!mb-2 !text-[0.78rem] !font-semibold !leading-[1.35]">
                  {post.caption}
                </p>
               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
