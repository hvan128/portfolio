import type { Metadata } from 'next'
import { Lexend, Sora } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing, type Locale } from '@/i18n/routing'
import '../globals.css'

const lexend = Lexend({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-lexend',
})

// Display face for headings — geometric, modern, a touch technical.
const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sora',
})

// Pre-render both locales at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const title = t('title')
  const description = t('description')
  const ogDescription = t('ogDescription')

  return {
    title,
    description,
    keywords: ['full-stack developer', 'AI engineer', 'React developer', 'Next.js', 'Flutter', 'GPT-4o Realtime', 'WebRTC', 'payment systems', 'Node.js', 'TypeScript', 'software engineer', 'mobile developer'],
    authors: [{ name: 'Ngô Hải Văn' }],
    creator: 'Ngô Hải Văn',
    metadataBase: new URL('https://ngohaivan.dev'),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', vi: '/vi' },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      alternateLocale: locale === 'vi' ? 'en_US' : 'vi_VN',
      url: `https://ngohaivan.dev/${locale}`,
      siteName: 'Ngô Hải Văn - Portfolio',
      title,
      description: ogDescription,
      images: [{ url: '/images/profile.jpg', width: 1200, height: 630, alt: 'Ngô Hải Văn' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription,
      images: ['/images/profile.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    icons: { icon: '/images/favicon.png', apple: '/images/favicon.png' },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params
  if (!hasLocale(routing.locales, locale)) notFound()

  // Enables static rendering for this locale.
  setRequestLocale(locale)
  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ngô Hải Văn',
    jobTitle: 'Full-Stack & AI Engineer',
    description: t('ogDescription'),
    url: 'https://ngohaivan.dev',
    image: 'https://ngohaivan.dev/images/profile.jpg',
    sameAs: ['https://github.com/hvan128', 'https://linkedin.com/in/hvan128', 'https://facebook.com/hvan128'],
    knowsAbout: ['AI Engineering', 'GPT-4o Realtime', 'WebRTC', 'Full-Stack Development', 'React', 'Next.js', 'Flutter', 'Node.js', 'TypeScript', 'Payment Systems'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'VinUniversity' },
      { '@type': 'CollegeOrUniversity', name: 'Hanoi University of Science and Technology' },
    ],
  }

  return (
    <html lang={locale} className={`${lexend.variable} ${sora.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
