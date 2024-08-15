import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: 'KEV',
    description: 'Blog posts from Kev',
    site: '',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}