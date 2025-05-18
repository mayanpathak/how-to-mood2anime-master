// export default function Button({ onClick ,disabled, className, text}) {
//     return (
//         <>
//             <button type="button" onClick={onClick} disabled={disabled} className={`${className}  btn btn-primary`} >
//                 <p className="text-white lg:text-base md:text-md text-sm font-bold uppercase">
//                     {text}
//                 </p>
//             </button>
//         </>
//     )
// }




import { motion } from "framer-motion";

export default function Button({ onClick, disabled, className, text, icon }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${className} transition-all duration-300 flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg font-medium shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="text-sm">{icon}</span>}
      <span className="lg:text-sm md:text-xs text-xs font-bold uppercase tracking-wide">
        {text}
      </span>
    </motion.button>
  );
}