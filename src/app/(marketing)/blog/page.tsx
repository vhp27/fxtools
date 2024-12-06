import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read our latest articles about trading strategies, risk management, and market analysis.',
}

// This would typically come from a CMS or database
const posts = [
  {
    title: 'Understanding Position Sizing in Trading',
    description: 'Learn how proper position sizing can protect your trading capital and improve your risk management.',
    date: '2024-01-15',
    slug: 'understanding-position-sizing',
  },
  {
    title: 'Risk Management Fundamentals',
    description: 'Discover the key principles of risk management that every trader should know.',
    date: '2024-01-10',
    slug: 'risk-management-fundamentals',
  },
  {
    title: 'How to Calculate Pips Correctly',
    description: 'A comprehensive guide to calculating pips across different currency pairs.',
    date: '2024-01-05',
    slug: 'calculating-pips-guide',
  },
]

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Blog
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Trading insights, tutorials, and market analysis
          </p>
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-2 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative rounded-lg border p-6 hover:bg-muted"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
