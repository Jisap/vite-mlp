import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import { MISSION } from "../constants"
import { motion } from "framer-motion"
import { fadeIn } from "../constants/variants"

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center py-10">
        <motion.h2 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="mb-12 text-3xl lg:text-4xl"
        >
          Nuestra misión
        </motion.h2>
        <div className="relative flex items-center justify-center">
          <motion.video 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2 }} 
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline 
            poster={missionImg}
          >
            <source 
              src={mission}
              type="video/mp4"

            />
          </motion.video>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40"></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }} 
            className="absolute max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Mission