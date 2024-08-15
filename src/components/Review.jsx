import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion"
import { fadeIn } from "../constants/variants"


// const ContainerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       staggerChildren: 0.8,
//     }
//   }
// }

// const ItemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8} }
// }

const Review = () => {
  return (
    <section className="container mx-auto relative" id="review">

      <div className="absolute w-96 h-96 bg-gradient-to-r from-gray-800/40 via-blue-900/20 to-purple-900/10 rounded-full blur-2xl top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="flex flex-col items-center justify-center mb-8 mt-20">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 text-3xl lg:text-4xl justify-center"
        >
          Reseña
        </motion.h2>
        <motion.p 
          // variants={ItemVariants}
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-10 text-3xl font-light leading-snug tracking-wide lg:mx-40 lg:mt-15 lg:text-[3.5rem]">
          {REVIEW.content}
        </motion.p>
        <motion.div 
          //variants={ItemVariants} 
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          <img 
            src={xaviour} 
            width={80} 
            height={80} 
            alt={REVIEW.name} 
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6 className=""> 
              {REVIEW.name}
            </h6>
            <p className="text-sm text-neutral-500">
              {REVIEW.profession}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        // initial="hidden"
        // whileInView="show"
        // variants={ItemVariants}
        // viewport={{ once: false }}
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index)=> (
          <motion.img
            // variants={ItemVariants} 
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Review