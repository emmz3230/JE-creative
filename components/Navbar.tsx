import Link from "next/link";

const links = [
  { label: "Works", href: "/#works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
        <Link href="/" className="font-head text-[15px] font-bold tracking-[0.12em]">
          <span className="text-accent">JE</span> CREATIVE{" "}
          <span className="ml-1 align-top text-[11px] font-normal tracking-[0.2em] text-muted">®</span>
        </Link>
        <div className="flex gap-6 md:gap-10">
         {links.map((link) => (
  <Link
    key={link.label}
    href={link.href}
    className="text-[13px] tracking-[0.05em] text-muted transition-colors hover:text-offwhite"
  >
    {link.label}
  </Link>
))}

        </div>
      </nav>
    </header>
  );
}
