import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function RevealY({children, width='fit-content'}) {
    const ref = useRef(null)

    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView){
            mainControls.start('visible')
        }
    }, [isInView])
    

  return (
    <>
    <div style={{postion: 'relative', overflow:'hidden', width}}>
        <div>
            <motion.div
            variants={{
                hidden: {opacity:0, x:75},
                visible: {opacity:1, x:0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{duration:0.4, delay:.25}}
            ref={ref}
            >
                {children}
            </motion.div>
        </div>
    </div>
    </>
  )
}
