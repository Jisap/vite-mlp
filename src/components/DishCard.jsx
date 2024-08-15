import { motion } from 'framer-motion'
import { fadeIn } from '../constants/variants'

const DishCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="rounded.3xl p-2" 
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export default DishCard