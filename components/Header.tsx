import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;
  const heroImageSrc = content.heroImage || "/images/pena-palace-hero.jpg";
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  const ctaText = header.ctaText || header.bookNowText || "BOOK TICKETS";
  const ctaHref = header.ctaHref || "#tours";

  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden border-0 transition-all duration-300">
      {/* Hero Image in Header Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SafeImage
          src={heroImageSrc}
          alt="Pena Palace Header Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_top] lg:object-[right_top]"
        />
        {/* Soft overlay matching hero sky gradient for crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-40% md:via-white/60 md:via-48% lg:via-52% to-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Logo
          logoImage={header.logoImage}
          logoAlt={header.logoAlt || "Pena Palace Tickets"}
          line1={header.logoLine1 || "PENA PALACE"}
          line2={header.logoLine2 || "— TICKETS —"}
        />

        <HeaderNav links={navLinks} />

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden items-center gap-2 rounded-lg bg-[#123B27] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0D2E1E] hover:shadow-md md:inline-flex"
          >
            {/* Ticket Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D6A33A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0"
            >
              <rect x="3" y="6" width="18" height="12" rx="2" />
              <path d="M9 6v12M15 6v12" strokeDasharray="2 2" />
            </svg>
            <span>{ctaText.toUpperCase()}</span>
          </a>
          <MobileNav links={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
        </div>
      </div>
    </header>
  );
}

