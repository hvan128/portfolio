import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ngô Hải Văn - Full-Stack Developer | 3+ Years Experience',
  description: 'Full-stack engineer with 3+ years of experience building scalable web applications and specialized payment systems. Expert in React, Next.js, Flutter, Node.js, and payment integration solutions.',
  keywords: ['full-stack developer', 'React developer', 'Next.js', 'Flutter', 'payment systems', 'Node.js', 'TypeScript', 'software engineer', 'web developer', 'mobile developer'],
  authors: [{ name: 'Ngô Hải Văn' }],
  creator: 'Ngô Hải Văn',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ngohaivan.dev',
    siteName: 'Ngô Hải Văn - Portfolio',
    title: 'Ngô Hải Văn - Full-Stack Developer | 3+ Years Experience',
    description: 'Full-stack engineer with 3+ years of experience building scalable web applications and specialized payment systems. Expert in React, Next.js, Flutter, and payment integration.',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ngô Hải Văn - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ngô Hải Văn - Full-Stack Developer | 3+ Years Experience',
    description: 'Full-stack engineer with 3+ years of experience building scalable web applications and specialized payment systems.',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  metadataBase: new URL('https://ngohaivan.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ngô Hải Văn',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-stack engineer with 3+ years of experience building scalable web applications and specialized payment systems.',
    url: 'https://ngohaivan.dev',
    image: 'https://ngohaivan.dev/images/profile.jpg',
    sameAs: [
      // Add your social media profiles here
      // 'https://github.com/yourusername',
      // 'https://linkedin.com/in/yourusername',
    ],
    knowsAbout: [
      'Full-Stack Development',
      'React',
      'Next.js',
      'Flutter',
      'Node.js',
      'TypeScript',
      'Payment Systems',
      'Web Development',
      'Mobile Development',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Software Engineering',
    },
  }

  return (
    <html lang="vi">
      <body className={lexend.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

