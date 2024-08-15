import { CUSINES } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/variants'

// const ContainerVariants = {
//   hidden: {opacity: 0},
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 1
//     }
//   }
// }

// const ItemVariants ={
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition : {
//     duration: 1.2
//   }}

// }

const Expertise = () => {
  return (
    <section id="expertise">
      <motion.h2 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className='my-8 text-center text-3xl tracking-tighter lg:text-4xl'
      >
        Nuestras especialidades
      </motion.h2>
      <motion.div 
        // initial="hidden"
        // whileInView="show"
        // variants={ContainerVariants}
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        {CUSINES.map((cusine, index) => (
          <motion.div 
            key={index}
            // variants={ItemVariants}
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex items-center border-b-4 border-dotted border-neutral-700 py-2"
          >
            <div className='flex-shrink-0 pr-8 text-2xl'>
              {cusine.number}
            </div>
            <div className="w-1/3 flex-shrink-0">
              <img 
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Expertise