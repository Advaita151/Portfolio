import { motion } from "framer-motion"

//variants

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate:{
        top: "100%",
    },
    exit:{
        top: ["100%","0%"],
    },
}

const reverseIndex = (index) => {
    const totalSteps = 6;//number of steps
    return totalSteps - index-1;
}

const Stairs = () => {
  return (
    <>
      {/* render & motion divs , each representing a stem of the stairs.
      Each din will have the same animation defined by the stairAnimation object,
      */}
        {[...Array(6)].map((_, index) => {
            return (
            <motion.div
                key={index}
                className="w-full h-full bg-white relative"
                // style={{ zIndex: reverseIndex(index) }}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration:0.2,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1,
                }}
            />
            );
        })}
    </>
  )
}

export default Stairs
