
import { DISHES } from '../constants'
import DishCard from './DishCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/variants'

const Dishes = () => {
  return (
    <section className="container mx-auto py-16 relative" id="dishes">
     
      <div className="absolute w-96 h-96 bg-gradient-to-r from-gray-800/40 via-blue-900/20 to-purple-900/10 rounded-full blur-2xl bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>

      <motion.h2 
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        Our Dishes
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {DISHES.map((project, index) => (
          <DishCard 
            key={index} 
            project={project} 
          />
        ))}
      </div>
    </section>
  )
}

export default Dishes