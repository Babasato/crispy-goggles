import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homeschoolmath.site'
  const lastModified = new Date()

  const routes = [
    '',
    '/resources',
    '/about',
    '/contact',
    '/addition-practice',
    '/subtraction-practice',
    '/multiplication-practice',
    '/division-practice',
    '/fractions-practice',
    '/kindergarten-worksheets',
    '/grade-1-worksheets',
    '/grade-2-worksheets',
    '/grade-3-worksheets',
    '/grade-4-worksheets',
    '/grade-5-worksheets',
    '/grade-6-worksheets',
    '/how-to-use',
    '/teaching-tips',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: route === '' || route.includes('practice') || route.includes('worksheets') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/resources' ? 0.9 : 0.8,
  }))
}
