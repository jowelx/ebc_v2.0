import { AnimatedComponent } from '@/types/Layout'
import { motion } from 'framer-motion'
import { FC } from 'react'
export const MotionDiv: FC<AnimatedComponent> = ({ variants, children, props }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            {...props}>
            {children}
        </motion.div>
    )
}