import PageHero from "@/components/ui/PageHero";
import BlogCards from "@/components/sections/BlogCards";
import { posts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "مقالات کلیدسازی و امنیت درب | کلیدسازی دانش",
  description:
    "راهنماهای کاربردی درباره پشت در ماندن، انتخاب قفل ضد سرقت و هزینه تعویض قفل در تهران؛ از تیم کلیدسازی دانش.",
  path: "/blog",
  keywords: ["مقالات کلیدسازی", "راهنمای قفل", "قفل ضد سرقت", "تعویض قفل"],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="مقالات و راهنماهای کلیدسازی"
        description="نکات کاربردی برای مواقع اضطراری، انتخاب قفل مناسب و حفظ امنیت خانه؛ به زبان ساده."
        image="/images/blog-anti-theft.jpg"
        crumbs={[{ name: "مقالات", path: "/blog" }]}
        eyebrow="مجله کلیدسازی دانش"
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <BlogCards posts={posts} />
        </div>
      </section>
    </>
  );
}
