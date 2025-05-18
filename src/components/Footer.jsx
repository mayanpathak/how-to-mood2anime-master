// export default function Footer() {
//     return (
//         <>
//             <footer className="footer footer-center bg-base-100 text-base-content p-4">
//             <aside>
//                 <p>Made by &nbsp;
//                     <a target="_blank" href="" className="text-primary underline">Mayan Pathak</a>
//                 </p>
//             </aside>
//             </footer>
//         </>
//     )
// }



import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="mt-12 py-6 border-t border-slate-800 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⛩️</span>
          <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Mood2Anime
          </p>
        </div>
        
        <p className="text-slate-400 text-sm md:text-base">
          Made with 💜 by&nbsp;
          <motion.a 
            href="#" 
            target="_blank" 
            className="font-medium text-purple-400 hover:text-pink-400 transition-colors border-b border-purple-400/30 hover:border-pink-400"
            whileHover={{ y: -2 }}
          >
            Mayan Pathak
          </motion.a>
        </p>
        
        <div className="flex gap-3">
          {["GitHub", "Twitter", "Discord"].map(platform => (
            <motion.a 
              key={platform}
              href="#" 
              className="text-sm text-slate-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}