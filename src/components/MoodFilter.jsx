// import Button from "./Button";
// import moods from "../assets/mood.js"

// export default function MoodFilter({ selectedGenre , toggleGenre}) {
//     return (
//         <>
//             <h className="my-6 grid mood-center-container lg:text-5xl text-4xl font-bold">
//                 Discover top-rated Anime based on your mood
//             </h>
//             <p>
//                 How are you feeling right now?
//             </p>

//             <div class="grid lg:grid-cols-4 grid-cols-3 my-6 lg:gap-6 gap-4 mood-center-container">
//                 {Object.entries(moods).map(([mood, genre], index) => (
//                     <Button key={index} text={mood} className={"btn-outline"}
//                     onClick={() => toggleGenre(mood, genre)}
//                     />                    
//                 ))}
//             </div>



//         </>
//     )
// }




import { motion } from "framer-motion";
import Button from "./Button";
import moods from "../assets/mood.js";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const moodIcons = {
  "Happy": "😊",
  "Sad": "😢",
  "Excited": "🤩",
  "Relaxed": "😌",
  "Scared": "😨",
  "Nostalgic": "🥹",
  "Curious": "🤔",
  "Romantic": "❤️",
  // Add icons for your other moods
};

export default function MoodFilter({ selectedGenre, toggleGenre }) {
  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover top-rated Anime based on your mood
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        How are you feeling right now? Select your mood to find the perfect anime.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {Object.entries(moods).map(([mood, genre], index) => (
          <motion.div key={index} variants={item}>
            <Button 
              text={mood}
              icon={moodIcons[mood] || "🎬"}
              className={`w-full h-20 ${selectedGenre.includes(genre) ? 
                'bg-gradient-to-br from-purple-600 to-pink-600 text-white' : 
                'bg-slate-800/60 hover:bg-slate-700/60 text-white border border-slate-700 hover:border-purple-500'
              }`}
              onClick={() => toggleGenre(mood, genre)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}