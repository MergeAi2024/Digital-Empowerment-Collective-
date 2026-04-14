import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">About Us</h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Digital Empowerment Collective is a forward-thinking, community-driven organisation committed to equipping young people with the digital skills required to thrive in an increasingly technology-driven world. Founded on the principle of bridging the digital divide, the organisation seeks to create inclusive opportunities for youth to access, understand, and apply modern digital tools for personal and professional growth.
              </p>
              <p>
                Our core focus lies in delivering practical, high-impact training across key areas such as web development, graphic design, digital marketing, content creation, and emerging technologies including artificial intelligence and automation. Through a combination of seminars, workshops, masterclasses, webinars, and structured learning programmes, we provide participants with both foundational knowledge and hands-on experience aligned with real-world demands.
              </p>
              <p>
                At Digital Empowerment Collective, we believe that digital literacy is a catalyst for economic empowerment and social transformation. Our programmes are designed not only to develop technical competencies but also to foster creativity, critical thinking, and entrepreneurial mindset among young people.
              </p>
              <p>
                We are driven by a vision to build a digitally skilled generation that can actively participate in the global digital economy, create innovative solutions, and contribute meaningfully to their communities. By collaborating with stakeholders, industry professionals, and community partners, we continue to expand our reach and impact, ensuring that no young person is left behind in the digital age.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] bg-gradient-to-tr from-purple-100 to-blue-50 p-8 flex items-center justify-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-500/20"></div>
              <Globe className="w-32 h-32 text-purple-600/40 relative z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
