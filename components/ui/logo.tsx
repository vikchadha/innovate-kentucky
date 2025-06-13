import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="inline-flex shrink-0 items-center" 
      aria-label="Innovate Kentucky"
    >
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Innovate Kentucky
      </span>
    </Link>
  );
}
