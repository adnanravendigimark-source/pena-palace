import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleData = {
  slug: "best-time-to-visit-pena-palace",
  title: "Best Time to Visit Pena Palace: Hours, Seasons & Crowd Tips",
  metaTitle: "Best Time to Visit Pena Palace 2026: Hours, Seasons & Tips",
  metaDescription: "Discover the best time to visit Pena Palace in Sintra. Complete guide on optimal morning and afternoon hours, seasonal weather, crowds, and timed entry.",
  category: "Visitor Guide",
  excerpt: "Plan your visit to Pena Palace in Sintra with insider advice on early morning vs afternoon hours, spring and autumn seasons, Sintra fog, and timed entry.",
  quickAnswer: "The best time to visit Pena Palace is early morning at 9:30 AM or late afternoon after 4:00 PM on weekdays. The ideal months are April to May and September to October, offering pleasant weather, blooming hills, and lighter crowds than summer.",
  readTime: "5 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T07:15:00.000Z",
  image: "https://4qzwa9zz2dpjtjta.public.blob.vercel-storage.com/pena-palace-best-time-to-visit-4nYCghCZ3lBF2OBLB1eY0qxWSsU7ij.jpg",
  imageAlt: "Colorful Romanticist towers of Pena Palace crowning the Sintra peak under morning sunlight",
  author: "Mariana Costa / Senior Portugal Travel Editor",
  recommendedTourId: "pena-palace-park-skip-the-line-entry",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best time to visit Pena Palace",
  ctaHeading: "Ready to explore Pena Palace in Sintra?",
  ctaBody: "Compare official Park + Palace tickets, skip-the-line passes, and guided tours on our homepage.",
  ctaButtonText: "Compare Pena Palace Tickets & Tours →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.penapalaceentry.com/blog/best-time-to-visit-pena-palace",
  ogTitle: "Best Time to Visit Pena Palace: Hours, Seasons & Crowd Tips",
  ogDescription: "Expert visitor guide on the best time to visit Pena Palace in Sintra: crowd levels, morning vs afternoon entry, and microclimate weather tips.",
  ogImage: "https://4qzwa9zz2dpjtjta.public.blob.vercel-storage.com/pena-palace-best-time-to-visit-4nYCghCZ3lBF2OBLB1eY0qxWSsU7ij.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Perched high atop the granite boulders of Sintra, Portugal, King Ferdinand II's colorful Romanticist castle attracts over one million visitors each year. Because of strict visitor caps and winding mountain transit, timing your trip carefully is essential for a smooth experience. Discovering the <strong>best time to visit Pena Palace</strong> will help you avoid dense crowds, navigate Sintra's unusual microclimate, and enjoy clear panoramic views over the Atlantic coast.</p>

<div class="pro-tip-box"><span class="pro-tip-icon">💡</span><div><strong>Pro Tip for 2026 Visitors:</strong> Palace interior tickets operate on strict 30-minute timed-entry windows. Arrive at the main park gate at least 45 minutes before your slot, as the uphill walk through the gardens to the palace takes 20 to 30 minutes.</div></div>

<h2>Best Time of Day to Visit Pena Palace</h2>
<p>Daily crowds peak between 11:00 AM and 3:30 PM, when organized tour buses arrive from Lisbon. To avoid peak congestion, plan your visit during two optimal windows:</p>
<ul>
  <li><strong>First Entry at 9:30 AM:</strong> Securing the earliest slot allows you to explore the royal staterooms and terraces before tour groups arrive. The morning light on the yellow clock tower is spectacular, though light fog can occasionally linger.</li>
  <li><strong>Late Afternoon (After 4:00 PM):</strong> Crowd levels diminish substantially as day-trippers head back to Lisbon. The golden-hour sun casts a warm glow across the red ramparts, and afternoon breezes clear away mountain mist.</li>
</ul>

<h2>Best Months and Seasons to Visit</h2>
<p>Sintra experiences distinct seasonal weather patterns that shape crowd levels and visibility.</p>

<h3>Spring (April to May) — Ideal Weather and Blooming Gardens</h3>
<p>Spring is widely considered the best time to visit Pena Palace. Daytime temperatures hover comfortably around 17°C to 21°C (63°F–70°F), ideal for walking through Pena Park's 200 hectares of camellias, ferns, and exotic trees. Crowds remain manageable compared to high summer.</p>

<h3>Autumn (September to October) — Mild Days and Thinner Crowds</h3>
<p>Early autumn brings clear skies, warm temperatures, and lighter crowds after summer holidays conclude. The forested hills display rich autumn colors, creating picturesque panoramas from the Queen's Terrace and Cruz Alta summit.</p>

<figure><img src="https://4qzwa9zz2dpjtjta.public.blob.vercel-storage.com/pena-palace-terrace-view-g6Y0TqpcHb6Z7mQYfibhNUIWTnWd4P.jpg" alt="Visitors exploring the colorful ramparts and terraces of Pena Palace overlooking Sintra" /><figcaption>Panoramic views from the Queen's Terrace across the forested Sintra hills toward the Atlantic coastline.</figcaption></figure>

<h3>Summer (June to August) vs. Winter (November to February)</h3>
<p>Summer brings long daylight hours, but also intense afternoon heat and maximum crowd congestion. Stateroom slots frequently sell out weeks ahead. In contrast, winter brings peaceful, uncrowded paths, though frequent rain and heavy fog require flexible planning and warm layers.</p>

<h2>Navigating Sintra's Weather and Microclimate</h2>
<p>The Sintra mountains generate a humid maritime microclimate that is cooler and damper than downtown Lisbon. Mornings frequently begin with dense coastal mist enveloping the palace towers. By mid-morning, the sun usually burns the fog away, revealing sweeping ocean vistas. Wearing light layers and carrying a windbreaker ensures you stay comfortable.</p>

<h2>Essential Practical Tips for Planning Your Visit</h2>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Book Timed Tickets Online:</strong> Reserve your entry ahead of time to secure a preferred morning or late afternoon slot.</li>
  <li><span class="check-circle">✓</span><strong>Take Bus 434:</strong> Catch the Scotturb 434 tourist bus from Sintra train station; private cars cannot drive up the mountain road.</li>
  <li><span class="check-circle">✓</span><strong>Wear Sturdy Footwear:</strong> Steep cobblestone paths require comfortable walking shoes with reliable grip.</li>
  <li><span class="check-circle">✓</span><strong>Allow 2.5 to 3 Hours:</strong> Dedicate 1 hour to the palace staterooms and terraces, and 1.5 hours to explore the romantic park trails.</li>
</ul>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 500-600 words)`);
  if (wordCount < 500 || wordCount > 600) {
    throw new Error(`Word count ${wordCount} outside allowable 500-600 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image, author
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage},
      ${articleData.author}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image,
      author = EXCLUDED.author
  `;
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Visitor Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "5 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      author: p.author || "Mariana Costa / Senior Portugal Travel Editor",
      recommendedTourId: p.recommended_tour_id || "pena-palace-park-skip-the-line-entry",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to explore Pena Palace in Sintra?",
      ctaBody: p.cta_body || "Compare official Park + Palace tickets, skip-the-line passes, and guided tours on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Pena Palace Tickets & Tours →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "best time to visit Pena Palace",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || `https://www.penapalaceentry.com/blog/${p.slug}`,
      ogTitle: p.og_title || p.meta_title || p.title,
      ogDescription: p.og_description || p.meta_description || p.excerpt,
      ogImage: p.og_image || p.image || ""
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log(`✓ Synchronized data/posts.json with ${jsonPosts.length} posts.`);

  console.log("\nArticle Seed Summary:");
  console.log("- Title:", articleData.title);
  console.log("- Slug:", articleData.slug);
  console.log("- Focus Keyword:", articleData.focusKeyword);
  console.log("- Word Count:", wordCount);
  console.log("- Cover Image:", articleData.image);
  console.log("- Public URL:", `${articleData.canonicalUrl}`);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
