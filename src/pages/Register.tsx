import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-50 py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 border border-blue-200">
            Tutor Programme
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Become a Tutor</h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Share your expertise and help empower the next generation of digital leaders. Register your interest below.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Area of Expertise</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-white">
                <option value="">Select a field...</option>
                <option value="web">Web Development</option>
                <option value="design">Graphic Design</option>
                <option value="marketing">Digital Marketing</option>
                <option value="ai">AI & Automation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Why do you want to tutor with us?</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-500/25">
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
