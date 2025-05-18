// import Button from "./Button";

// export default function ContentList({animeList, loading, error, page,  handleHideClick, hiddenAnime, handleNextPage , handlePrevPage}) {
//     const filteredAnimeList = animeList.filter((anime) => !hiddenAnime.has(anime.mal_id));
    
//     const handleCopyTitle = (title) => {
//         navigator.clipboard.writeText(title)
//           .then(() => {
//             alert(`${title} copied to clipboard!`);
//           })
//           .catch((err) => {
//             console.error("Failed to copy title: ", err);
//           });
//       };
    

//     return (
//         <>
//     <div className="card bg-slate-100/5 mt-3 center-container card-compact bg-base-100 w-96 shadow-xl">

//     {filteredAnimeList.length === 0 ? (
//         <div className="p-5">
//             <p>This Anime is Hidden</p>
//             <div className="flex justify-between">
//                 <Button onClick={handlePrevPage} text={"⬅️ Back"}/>
//                 <Button  onClick={handleNextPage} text={"Next ➡️"}/>
//             </div>
//         </div>

//     ): (
//         filteredAnimeList.map((anime) => (

//         <>
//             <div key={anime.mal_id}>
//             <figure className=" aspect-[16/9]">
//                 {anime.trailer?.embed_url ? (
//                     <iframe className="w-full h-full" width="1044" height="587" 
//                     src={anime.trailer.embed_url} 
//                     title={`${anime.title} Trailer`}
//                     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>  
//                     </iframe>
//                 ): (
//                     <p>Trailer does not exist</p>
//                 )}
                
                
//             </figure>
//             <div className="card-body text-left">
//                 <h2 className="card-title font-bold cursor-pointer">{anime.title}</h2>
//                 <p className="text-lg font-thin">
//                     {anime.aired?.from ?  new Date(anime.aired.from).getFullYear() : 'N/A'}
//                     &nbsp; · &nbsp;  {anime.episodes ?? 'N/A'} ep   
//                     &nbsp; · ⭐{anime.score} 
//                     &nbsp;· 🏆top {anime.popularity}
//                 </p>
//                 <div className="flex space-x-2">
//                     {anime.genres?.map((genre, index) => (
//                         <div key={index} className="badge badge-secondary badge-outline">
//                             {genre.name}
//                         </div>
//                     )) || <div className="badge badge-secondary badge-outline">N/A</div>}

//                 </div>
//                 <p className="mt-3 font-thin">{anime.synopsis.split('.')[0] + '.'}</p>
                
//                 <div className="flex justify-between mt-3">
//                     <Button onClick={handlePrevPage} text={"⬅️ Back"}/>
//                     <Button onClick={() => handleHideClick(anime.mal_id)} text={"🙈 Hide"}/>
//                     <Button onClick={handleNextPage} text={"Next ➡️"}/>
//                 </div>
//             </div>
//             </div>


//         </>
//     )
// ))}


        
//         </div>

//         </>
//     )
// }





import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function ContentList({
  animeList,
  loading,
  error,
  page,
  handleHideClick,
  hiddenAnime,
  handleNextPage,
  handlePrevPage
}) {
  const filteredAnimeList = animeList.filter((anime) => !hiddenAnime.has(anime.mal_id));

  const handleCopyTitle = (title) => {
    navigator.clipboard.writeText(title)
      .then(() => {
        // Show toast notification instead of alert
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-3 rounded-lg shadow-lg z-50';
        toast.textContent = `"${title}" copied to clipboard!`;
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
          setTimeout(() => document.body.removeChild(toast), 500);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy title: ", err);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            className="flex justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        ) : error ? (
          <motion.div 
            key="error"
            className="bg-red-500/20 border border-red-500 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p className="text-xl font-bold text-red-400">Error loading content</p>
            <p className="text-slate-300 mt-2">{error}</p>
            <Button 
              onClick={handlePrevPage} 
              text="Try Again" 
              className="mt-4 bg-red-600 hover:bg-red-700 text-white"
            />
          </motion.div>
        ) : filteredAnimeList.length === 0 ? (
          <motion.div 
            key="empty"
            className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p className="text-xl font-medium text-slate-300 mb-6">This Anime is Hidden</p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={handlePrevPage} 
                text="Previous" 
                icon="⬅️"
                className="bg-slate-700 hover:bg-slate-600 text-white"
              />
              <Button 
                onClick={handleNextPage} 
                text="Next" 
                icon="➡️"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              />
            </div>
          </motion.div>
        ) : (
          filteredAnimeList.map((anime) => (
            <motion.div
              key={anime.mal_id}
              className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden mb-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              layoutId={`anime-${anime.mal_id}`}
            >
              <div className="relative">
                {anime.trailer?.embed_url ? (
                  <div className="h-64 md:h-72 lg:h-80 w-full">
                    <iframe 
                      className="w-full h-full" 
                      src={anime.trailer.embed_url}
                      title={`${anime.title} Trailer`}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="h-64 md:h-72 lg:h-80 w-full bg-slate-900 flex items-center justify-center">
                    <p className="text-slate-400 text-lg">Trailer not available</p>
                  </div>
                )}
                
                <div className="absolute top-2 right-2 flex gap-2">
                  <motion.button 
                    className="bg-black/50 hover:bg-black/70 backdrop-blur-sm p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopyTitle(anime.title)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>
              
              <div className="p-4 lg:p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="md:w-2/3">
                    <motion.h2 
                      className="text-xl md:text-2xl font-bold cursor-pointer hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                      onClick={() => handleCopyTitle(anime.title)}
                    >
                      {anime.title}
                    </motion.h2>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-slate-300">
                      <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-full text-sm">
                        <span>📅</span>
                        <span>{anime.aired?.from ? new Date(anime.aired.from).getFullYear() : 'N/A'}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-full text-sm">
                        <span>🎬</span>
                        <span>{anime.episodes ?? 'N/A'} ep</span>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-full text-sm">
                        <span>⭐</span>
                        <span>{anime.score ?? 'N/A'}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-full text-sm">
                        <span>🏆</span>
                        <span>top {anime.popularity}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {anime.genres?.slice(0, 3).map((genre, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-purple-900/40 text-purple-300 px-2 py-0.5 rounded-full border border-purple-800 text-xs"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {genre.name}
                        </motion.div>
                      )) || (
                        <div className="bg-slate-700/40 text-slate-300 px-2 py-0.5 rounded-full border border-slate-600 text-xs">
                          N/A
                        </div>
                      )}
                    </div>
                    
                    <motion.p 
                      className="mt-2 text-slate-300 text-sm leading-relaxed max-h-12 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {anime.synopsis?.split('.')[0] + '.' || 'No synopsis available.'}
                    </motion.p>
                  </div>
                  
                  <div className="flex mt-3 md:mt-0 justify-between md:flex-col md:gap-2">
                    <Button 
                      onClick={handlePrevPage} 
                      text="Prev" 
                      icon="⬅️"
                      className="bg-slate-700 hover:bg-slate-600 text-white text-sm px-2"
                    />
                    
                    <Button 
                      onClick={() => handleHideClick(anime.mal_id)} 
                      text="Hide" 
                      icon="🙈"
                      className="bg-red-600/80 hover:bg-red-700 text-white text-sm px-2"
                    />
                    
                    <Button 
                      onClick={handleNextPage} 
                      text="Next" 
                      icon="➡️"
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-2"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
}