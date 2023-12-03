import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const Reveal = ({children}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const animation = useAnimation();

  useEffect(() => {
    if(isInView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5
        }
      })
    }
  }, [isInView, animation])
  
  return (
    <>
      <motion.div
      ref={ref}
      initial={{ opacity: 0 , y: 0}}
      animate={animation}
      transition={{ duration: 0.5, delay: 0.5 }} 
      >
        {children}
      </motion.div>
    </>
  )
}

export default Reveal