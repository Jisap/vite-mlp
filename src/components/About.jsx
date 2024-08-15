import about from '../assets/about.jpeg'
import { ABOUT } from '../constants'
import { motion } from "framer-motion"
import { fadeIn } from '../constants/variants'


const About = () => {
  return (
    <section className='container mx-auto py-10' id='about'>
      <motion.h2 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="mb-12 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        About Us
      </motion.h2>
      <div className="flex flex-wrap">
        <div className='w-full p-4 lg:w-1/2'>
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }} 
            src={about}
            className='rounded-3xl lg:-rotate-3'
          />
        </div>
        <div className='w-full px-2 lg:w-1/2'>
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }} 
            className='text-4xl tracking-tighter lg:text-6xl'
          >
            { ABOUT.header }
          </motion.h2>
          <div className="lg:-rotate-3">
            <motion.div  
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className='mb-8 mt-1 h-2 w-36 bg-rose-300'></motion.div>
          </div>
          <motion.p 
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false }}
            // transition={{ duration: 0.6, delay: 0.4 }} 
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default About