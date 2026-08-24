import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { getAboutPage } from "@/lib/about";
import { resolveRobots, resolveCanonical, resolveOg, buildBreadcrumbJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  const og = resolveOg(
    { ogTitle: about.ogTitle, ogDescription: about.ogDescription, ogImage: about.ogImage },
    { title: about.metaTitle, description: about.metaDescription, image: about.heroImage }
  );
  return {
    title: about.metaTitle,
    description: about.metaDescription,
    alternates: { canonical: resolveCanonical("/about", about.canonicalUrl) },
    robots: resolveRobots(about.noIndex, about.noFollow),
    openGraph: {
      title: og.title,
      description: og.description,
      url: "/about",
      images: og.image ? [{ url: og.image, alt: about.heroImageAlt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function AboutPage() {
  const about = await getAboutPage();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ]);

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero banner — matching header aesthetic */}
        <section className="relative overflow-hidden bg-[#FAFAF9] border-b border-gray-100">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SafeImage
              src={about.heroImage || "/images/pena-terrace.jpg"}
              alt={about.heroImageAlt || "Pena Palace, Sintra"}
              fill
              priority
              quality={80}
              sizes="100vw"
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="text-xs font-medium text-[#26332B]/70">
              <ol className="flex items-center justify-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-[#D6A33A] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[#26332B]/40">&gt;</li>
                <li className="font-semibold text-[#123B27]" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[#D6A33A]">
              {about.heroEyebrow}
            </span>

            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#123B27] sm:text-4xl lg:text-5xl">
              {about.heroHeading}
            </h1>

            <div
              className="rich-content mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-[#26332B]/85 sm:text-sm"
              dangerouslySetInnerHTML={{ __html: about.heroSubheading }}
            />
          </div>
        </section>

        {/* Page content — admin-editable (About page → Page Content) */}
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div
            className="rich-content text-sm sm:text-[15px] leading-relaxed text-[#26332B]/85"
            dangerouslySetInnerHTML={{ __html: about.content }}
          />
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
