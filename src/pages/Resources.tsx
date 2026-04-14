import { motion, useScroll, useTransform } from "motion/react";
import { Code, PenTool, Megaphone, Bot, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const resourceCategories = [
  {
    title: "Web Development",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    resources: [
      { name: "freeCodeCamp", desc: "Learn to code with free online courses, programming projects, and interview preparation.", url: "https://www.freecodecamp.org/" },
      { name: "MDN Web Docs", desc: "The gold standard for web documentation, covering HTML, CSS, and JavaScript in depth.", url: "https://developer.mozilla.org/" },
      { name: "Frontend Mentor", desc: "Improve your front-end skills by building real projects and solving real-world challenges.", url: "https://www.frontendmentor.io/" }
    ]
  },
  {
    title: "Graphic Design",
    icon: PenTool,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000",
    resources: [
      { name: "Figma Community", desc: "Explore thousands of free templates, UI kits, and plugins created by the design community.", url: "https://www.figma.com/community" },
      { name: "Canva Design School", desc: "Free courses and tutorials covering the basics of graphic design, branding, and typography.", url: "https://www.canva.com/designschool/" },
      { name: "Coolors", desc: "The super fast color palettes generator to help you create perfect color schemes for your designs.", url: "https://coolors.co/" }
    ]
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    resources: [
      { name: "Google Digital Garage", desc: "Free courses on digital marketing, data, and tech, including a certification.", url: "https://learndigital.withgoogle.com/digitalgarage" },
      { name: "HubSpot Academy", desc: "Comprehensive inbound marketing, sales, and customer service courses.", url: "https://academy.hubspot.com/" },
      { name: "Moz Beginner's Guide", desc: "An in-depth, easy-to-understand tutorial on how search engine optimization works.", url: "https://moz.com/beginners-guide-to-seo" }
    ]
  },
  {
    title: "AI & Automation",
    icon: Bot,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    resources: [
      { name: "DeepLearning.AI", desc: "World-class AI education founded by Andrew Ng, offering courses from beginner to advanced.", url: "https://www.deeplearning.ai/" },
      { name: "Zapier Learn", desc: "Guides, tutorials, and courses on how to automate your workflows without writing code.", url: "https://zapier.com/learn/" },
      { name: "Hugging Face", desc: "The AI community building the future. Explore models, datasets, and spaces.", url: "https://huggingface.co/" }
    ]
  }
];

const CategorySection = ({ category, index }: { category: any, index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
      {/* Image Side */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
        <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0 w-full h-full">
          <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        <div className="absolute bottom-0 left-0 p-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center ${category.color} mb-6`}
          >
            <category.icon className="w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            {category.title}
          </motion.h2>
        </div>
      </div>

      {/* Resources Side */}
      <div className="w-full lg:w-1/2 space-y-6">
        {category.resources.map((resource: any, rIdx: number) => (
          <motion.a
            key={rIdx}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: rIdx * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="block bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-200 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  {resource.name}
                </h3>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white text-slate-400 transition-colors shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed pr-8">
                {resource.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default function Resources() {
  return (
    <div className="pt-32 pb-32 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-80 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white shadow-sm border border-slate-200 text-purple-600 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Learning Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 tracking-tight"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            We've curated a collection of the best free tools, courses, and platforms across the internet to help you accelerate your digital skills journey.
          </motion.p>
        </div>

        <div className="space-y-32">
          {resourceCategories.map((category, idx) => (
            <CategorySection key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
