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
  slug: "pena-palace-tickets-guide-entry-rules",
  title: "Pena Palace Tickets: What’s Included, Entry Rules & Visitor Tips",
  metaTitle: "Pena Palace Tickets: What’s Included, Entry Rules & Guide",
  metaDescription: "Complete guide to Pena Palace tickets in Sintra. Learn what’s included, palace vs park access, strict timed entry rules, uphill walking buffers, and booking tips.",
  category: "Ticket Guide",
  excerpt: "Explore official Pena Palace tickets in Sintra with our in-depth guide covering palace vs park access, strict 30-minute timed entry rules, and uphill buffer times.",
  quickAnswer: "Pena Palace tickets come in two main types: Palace + Park tickets (which include the royal staterooms, terraces, and 200 hectares of parkland) and Park-Only tickets (covering gardens, viewpoints, and the Countess of Edla's Chalet). All interior palace tickets require selecting a mandatory 30-minute timed entry slot. Always arrive at the park's main gate at least 45 minutes before your palace entry time to allow for the steep uphill walk.",
  readTime: "6 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23T06:00:00.000Z",
  image: "https://4qzwa9zz2dpjtjta.public.blob.vercel-storage.com/pena-palace-tickets-guide-cl4sbShTkJEsG9SDpp1R40MJ44wc7v.jpg",
  imageAlt: "Panoramic view of the vibrant yellow and red towers of Pena Palace atop the Sintra mountains",
  author: "Sofia Carmo / Portuguese Heritage & Sintra Specialist",
  recommendedTourId: "pena-palace-park-skip-the-line-entry",
  recommendedTourAfterBlock: 2,
  focusKeyword: "Pena Palace tickets",
  ctaHeading: "Ready to explore Pena Palace in Sintra?",
  ctaBody: "Compare official Park + Palace tickets, skip-the-line passes, and guided tours on our homepage.",
  ctaButtonText: "Compare Pena Palace Tickets & Tours →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.penapalaceentry.com/blog/pena-palace-tickets-guide-entry-rules",
  ogTitle: "Pena Palace Tickets: What’s Included, Entry Rules & Visitor Tips",
  ogDescription: "Complete guide to Pena Palace tickets in Sintra. Learn what’s included, palace vs park access, strict timed entry rules, uphill walking buffers, and booking tips.",
  ogImage: "https://4qzwa9zz2dpjtjta.public.blob.vercel-storage.com/pena-palace-tickets-guide-cl4sbShTkJEsG9SDpp1R40MJ44wc7v.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Perched high atop the granite boulders of Sintra, Portugal, the National Palace of Pena is one of Europe’s most celebrated Romanticist castles and a crown jewel of the UNESCO-listed Sintra Cultural Landscape. Conceived in the nineteenth century by King Ferdinand II, this colorful hilltop monument attracts over one million visitors each year. Because daily admission is capped and mountain transit requires careful coordination, securing official <strong>Pena Palace tickets</strong> in advance is essential. Understanding entry rules, timed palace slots, and ticket inclusions will ensure a smooth, memorable visit.</p>

<div class="pro-tip-box">
  <span class="pro-tip-icon">💡</span>
  <div><strong>Crucial Timed Entry Rule:</strong> The time printed on your ticket applies strictly to the <strong>palace interior door</strong>, not the perimeter park entrance. The uphill walk through the gardens takes 25 to 30 minutes, so enter the main park gate at least 45 minutes before your scheduled palace slot.</div>
</div>

<h2>Understanding Pena Palace Ticket Types: Palace vs. Park Access</h2>
<p>When selecting your <strong>Pena Palace entrance tickets</strong>, you will choose between two primary admission tiers managed by Parques de Sintra:</p>
<ul>
  <li><strong>Palace and Park Ticket (Full Visit):</strong> This complete ticket covers the entire estate: the historic staterooms, the Manueline cloister, the panoramic terraces, the 200-hectare forested park, and the Chalet of the Countess of Edla. Admission to the palace interior requires selecting a mandatory timed entry slot.</li>
  <li><strong>Park-Only Ticket:</strong> This outdoor ticket grants access to all 200 hectares of Pena Park, exterior courtyards, the Valley of the Lakes, the Cruz Alta viewpoint, and the Countess of Edla’s Chalet. It does not permit entry into the palace interior rooms or upper royal terraces.</li>
</ul>

<div class="ticket-comparison-wrapper">
  <table class="ticket-comparison-table">
    <thead>
      <tr>
        <th>Access Area</th>
        <th>Park-Only Ticket</th>
        <th>Palace + Park Ticket</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pena Park (200 Hectares)</strong></td>
        <td>Included</td>
        <td>Included</td>
      </tr>
      <tr>
        <td><strong>Palace Exterior & Courtyards</strong></td>
        <td>Included</td>
        <td>Included</td>
      </tr>
      <tr>
        <td><strong>Palace Interior Staterooms</strong></td>
        <td>Not Included</td>
        <td>Included (Timed Slot)</td>
      </tr>
      <tr>
        <td><strong>Upper Terraces & Triton Gate</strong></td>
        <td>Limited Views</td>
        <td>Full Access</td>
      </tr>
      <tr>
        <td><strong>Chalet of Countess of Edla</strong></td>
        <td>Included</td>
        <td>Included</td>
      </tr>
      <tr>
        <td><strong>Recommended Visit Time</strong></td>
        <td>1.5 to 2 Hours</td>
        <td>2.5 to 3.5 Hours</td>
      </tr>
    </tbody>
  </table>
  <div class="ticket-table-action">
    <a href="/#prices" class="compare-tickets-btn">Compare Pena Palace Tickets &amp; Tour Options →</a>
  </div>
</div>

<h2>The Strict Timed Entry System and Why Timing Matters</h2>
<p>To preserve fragile furnishings and prevent corridor overcrowding, Parques de Sintra enforces a strict timed-entry protocol for entering the palace interior. Slots are scheduled in 30-minute intervals throughout the day.</p>
<p>Parques de Sintra strictly enforces these scheduled windows. Arriving after your designated time results in denied admission to the staterooms without refund. Because the palace crowns a mountain peak, arriving at the perimeter entrance gate at your ticket time will cause you to miss your slot. Visitors must account for security checks at the main gate (Portão Principal) and the uphill walk to the palace entrance door.</p>

<figure>
  <img src="https://4qzwa9zz2dpjtjta.public.blob.vercel-storage.com/pena-palace-triton-terrace-2yDwRLmyrj0gkvRsTKLr9Nfw5Y8r3A.jpg" alt="The ornate Manueline Triton Arch gateway and tiled courtyard inside Pena Palace" />
  <figcaption>The mythological Triton Arch (Pórtico do Tritão), framing the entry into the upper royal terraces and interior staterooms.</figcaption>
</figure>

<h2>What You Can Explore Inside Pena Palace and Park</h2>
<p>Purchasing comprehensive <strong>Pena Palace and Park tickets</strong> allows you to explore three distinct zones:</p>

<h3>1. Royal Staterooms and Manueline Cloister</h3>
<p>The interior route leads through preserved royal living quarters. Highlights include the sixteenth-century Manueline cloister with historic azulejo tiles, King Ferdinand II’s quarters, Queen Amelia’s chambers, the Great Hall (Salão Nobre), and the historic royal kitchen with its vast copper cookware collection.</p>

<h3>2. Exterior Terraces and Battlements</h3>
<p>The Queen’s Terrace (Terraço da Rainha) provides 360-degree vistas across the Sintra hills toward the Atlantic. Visitors can walk the perimeter ramparts (Caminho de Ronda) and admire the bright yellow Clock Tower and red battlements up close.</p>

<h3>3. Pena Park, Fern Valleys, and Cruz Alta</h3>
<p>Covering over 200 hectares, Pena Park is a Romantic arboretum home to tree species from five continents. Key sights include the Queen’s Fern Valley (Feteira da Rainha), the serene Valley of the Lakes, and the scenic trail to Cruz Alta (High Cross), the highest point in Sintra at 529 meters.</p>

<h2>Accessibility, Transport, and Mountain Transit</h2>
<p>Private cars are prohibited on the upper mountain roads leading to Pena Palace. Reaching the monument requires planning:</p>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Scotturb Bus 434:</strong> Take the train from Lisbon to Sintra station, then board Bus 434 (Circuito da Pena) directly to the palace park gate.</li>
  <li><span class="check-circle">✓</span><strong>Internal Transfer Shuttle:</strong> Visitors wishing to skip the 30-minute uphill hike from the park entrance to the palace can ride the internal shuttle bus for €3 round-trip.</li>
  <li><span class="check-circle">✓</span><strong>Accessibility Notes:</strong> Cobblestones and historic stairs limit wheelchair access inside the palace staterooms. However, the park offers designated accessible routes and electric traction wheelchair equipment upon advance request.</li>
</ul>

<h2>Booking Advice and Common Mistakes to Avoid</h2>
<p>Securing your <strong>Pena Palace online booking</strong> several days or weeks ahead is critical, as prime morning and afternoon slots sell out quickly during peak travel seasons.</p>
<p>Avoid these common visitor pitfalls:</p>
<ul>
  <li><strong>Arriving at the park gate at your palace time:</strong> Always enter the main park entrance at least 45 minutes prior to your interior slot.</li>
  <li><strong>Attempting to drive up the mountain:</strong> Municipal barriers restrict private vehicles; rely on public transit or licensed taxis.</li>
  <li><strong>Wearing slippery footwear:</strong> Sintra’s mountain climate creates damp cobblestones; wear sturdy walking shoes with reliable grip.</li>
  <li><strong>Skipping the outer park highlights:</strong> Reserve at least 2.5 to 3 hours so you can explore both the palace rooms and the surrounding park.</li>
</ul>

<h2>Frequently Asked Questions About Pena Palace Tickets</h2>

<h3>Do I need to buy Pena Palace tickets in advance?</h3>
<p>Yes. Due to daily visitor quotas, buying tickets online in advance is essential. Box-office tickets frequently sell out early during peak travel seasons.</p>

<h3>Can I show my ticket on a smartphone?</h3>
<p>Yes. Digital barcodes on mobile devices are accepted at all entry gates. Download or screenshot your tickets beforehand in case mountain mobile reception is weak.</p>

<h3>What happens if I miss my timed entry window?</h3>
<p>Parques de Sintra strictly enforces admission times. Missing your interior slot forfeits access to the palace staterooms without refund, though you may still tour the outdoor park grounds.</p>

<h3>How long should I spend at Pena Palace?</h3>
<p>Plan for 2.5 to 3.5 hours: 30 minutes for the uphill garden walk, 60 minutes inside the palace and terraces, and 60 to 90 minutes exploring Pena Park and viewpoints.</p>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 800-1000 words)`);
  if (wordCount < 800 || wordCount > 1000) {
    throw new Error(`Word count ${wordCount} outside allowable 800-1000 range!`);
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
      category: p.category || "Ticket Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "6 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      author: p.author || "Sofia Carmo / Portuguese Heritage & Sintra Specialist",
      recommendedTourId: p.recommended_tour_id || "pena-palace-park-skip-the-line-entry",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to explore Pena Palace in Sintra?",
      ctaBody: p.cta_body || "Compare official Park + Palace tickets, skip-the-line passes, and guided tours on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Pena Palace Tickets & Tours →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "Pena Palace tickets",
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
