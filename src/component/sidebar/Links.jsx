import { motion } from "framer-motion"
import { Link } from "react-router-dom";


const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({setOpen}) => {
    const items = ["Homepage","Contact","About","Skills"]

   
  return (
    <motion.div className="links" variants={variants}>
        {items.map((item)=>(
        <motion.a href={`#${item}`}
         key={item}
         variants={itemVariants}
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.95}}
         onClick={()=>setOpen(false)}
         >
            {item}
        </motion.a>
        ))}
        <Link to="https://blog-run-dev.vercel.app/"  onClick={()=>setOpen(false)}>
        Blog
        </Link>
    </motion.div>
  )
}

export default Links
