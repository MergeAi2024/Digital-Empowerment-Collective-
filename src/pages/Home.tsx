import { motion } from "motion/react";
import { ArrowRight, Bot, Code, Megaphone, PenTool, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/60 via-slate-50/20 to-slate-50"></div>
      <div className="absolute top-40 right-20 -z-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-60 -z-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6 border border-purple-200">
              Bridging the Digital Divide
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl mb-6"
          >
            Empowering Youth for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Digital Age</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Equipping young people with the digital skills required to thrive in an increasingly technology-driven world. We create inclusive opportunities for personal and professional growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/about" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/auth" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium transition-colors">
              Join the Collective
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { icon: Code, title: "Web Development", desc: "Learn to build modern, responsive websites and robust web applications from the ground up." },
    { icon: PenTool, title: "Graphic Design", desc: "Master visual communication and create stunning digital assets for brands and media." },
    { icon: Megaphone, title: "Digital Marketing", desc: "Understand content creation, SEO, and social media strategies to reach global audiences." },
    { icon: Bot, title: "AI & Automation", desc: "Leverage emerging technologies and artificial intelligence to solve real-world problems." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
          >
            High-Impact Training
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Delivering practical experience through seminars, workshops, masterclasses, webinars, and structured learning programmes.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-purple-100 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900 to-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Empowered</h2>
              <p className="text-purple-200 text-lg">
                Subscribe to our newsletter for the latest updates on programmes, workshops, and digital skills resources.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
                <button type="submit" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-medium transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Programs />
      <Newsletter />
    </div>
  );
}
