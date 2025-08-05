import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, custom hooks, and advanced patterns for maintainable code.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      tags: ['React', 'TypeScript', 'Best Practices'],
      featured: true
    },
    {
      title: 'Modern CSS Grid Layouts: A Complete Guide',
      excerpt: 'Master CSS Grid with practical examples and learn how to create responsive layouts that work across all devices.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'CSS',
      tags: ['CSS', 'Grid', 'Responsive Design'],
      featured: true
    },
    {
      title: 'Optimizing Web Performance: Core Web Vitals',
      excerpt: 'A comprehensive guide to improving your website\'s performance metrics and achieving perfect Lighthouse scores.',
      image: '/api/placeholder/400/250',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Performance',
      tags: ['Performance', 'Web Vitals', 'Optimization'],
      featured: false
    },
    {
      title: 'Next.js 14: New Features and Migration Guide',
      excerpt: 'Explore the latest features in Next.js 14 and learn how to migrate your existing applications to take advantage of new capabilities.',
      image: '/api/placeholder/400/250',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Next.js',
      tags: ['Next.js', 'Migration', 'New Features'],
      featured: false
    },
    {
      title: 'Design Systems in Frontend Development',
      excerpt: 'How to create and maintain design systems that scale across teams and projects, improving consistency and development speed.',
      image: '/api/placeholder/400/250',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Design',
      tags: ['Design Systems', 'UI/UX', 'Frontend'],
      featured: false
    },
    {
      title: 'Advanced Animations with Framer Motion',
      excerpt: 'Create stunning animations and micro-interactions using Framer Motion, from basic transitions to complex orchestrated sequences.',
      image: '/api/placeholder/400/250',
      date: '2023-12-15',
      readTime: '12 min read',
      category: 'Animation',
      tags: ['Framer Motion', 'Animation', 'React'],
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts on modern web development, design, and technology trends
            </p>
          </motion.div>

          {/* Featured Posts */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Featured Articles</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-strong h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </motion.div>


          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 opacity-90">
                  Subscribe to my newsletter for the latest articles, tutorials, and web development insights delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-foreground bg-background/90 border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                  />
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog