import { motion } from 'framer-motion'
import { Code2, Palette, Database, Wrench, Globe, Smartphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'text-blue-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      color: 'text-purple-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Design Systems', level: 88 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      color: 'text-green-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Bootstrap', level: 95 },
        { name: 'SCSS/Sass', level: 88 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 85 },
        { name: 'Framer Motion', level: 80 }
      ]
    },
    {
      icon: Globe,
      title: 'CMS & E-commerce',
      color: 'text-orange-500',
      skills: [
        { name: 'WordPress', level: 90 },
        { name: 'Shopify', level: 85 },
        { name: 'Joomla', level: 75 },
        { name: 'Magento', level: 70 },
        { name: 'WooCommerce', level: 80 },
        { name: 'Headless CMS', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'text-red-500',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 75 },
        { name: 'REST APIs', level: 80 },
        { name: 'GraphQL', level: 65 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Performance & SEO',
      color: 'text-cyan-500',
      skills: [
        { name: 'Web Performance', level: 90 },
        { name: 'SEO Optimization', level: 85 },
        { name: 'Lighthouse Optimization', level: 88 },
        { name: 'Core Web Vitals', level: 85 },
        { name: 'Accessibility (a11y)', level: 80 },
        { name: 'Progressive Web Apps', level: 75 }
      ]
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

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-card ${category.color}`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '7+', label: 'Years Experience' },
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '15+', label: 'Technologies Mastered' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills