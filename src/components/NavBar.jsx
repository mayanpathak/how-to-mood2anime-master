// export default function NavBar({ onBackClick, selectedMood}) {
//     return (
//         <>
//             <div className="navbar center-container mt-4 bg-slate-100/5 py-2 my-2 rounded-[15px] shadow-xl ">
//             <div className="navbar-start">
//                 <button onClick={onBackClick} className="text-3xl btn btn-ghost btn-circle">
//                 ⛩️ 
//                 </button>
//             </div>
//             <div className="navbar-center">
//                 <a className="btn btn-ghost text-xl">

//                 <h1>{selectedMood ? selectedMood : 'Mood2Anime'}</h1>


//                 </a>
//             </div>
//             <div className="navbar-end">
//                 <button onClick={onBackClick} className="btn btn-ghost btn-circle">
//                     <svg height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path> </g></svg>
//                 </button>
                
//             </div>
//             </div>
//         </>
//     )
// }






import { motion } from "framer-motion";

export default function NavBar({ onBackClick, selectedMood }) {
  return (
    <motion.div 
      className="sticky top-0 z-50 w-full px-4 py-2 backdrop-blur-md bg-black/40 border-b border-slate-700/30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.button 
          onClick={onBackClick} 
          className="flex items-center gap-2 p-2 rounded-full hover:bg-slate-800/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-3xl">⛩️</span>
          <span className="font-bold text-lg hidden md:block">
            {selectedMood ? 'Home' : ''}
          </span>
        </motion.button>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            layoutId="pageTitle"
          >
            {selectedMood ? selectedMood : 'Mood2Anime'}
          </motion.h1>
        </motion.div>
        
        <motion.button 
          onClick={onBackClick} 
          className="p-2 rounded-full hover:bg-slate-800/50 transition-colors"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" 
              className="fill-white hover:fill-purple-300 transition-colors"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}