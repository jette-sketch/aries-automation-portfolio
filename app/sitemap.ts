import type { MetadataRoute } from 'next';

import { projects } from '@/data/projects';
import { siteUrl } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    ...projects.map(({ slug }) => ({ url: `${siteUrl}/projects/${slug}` })),
  ];
}
