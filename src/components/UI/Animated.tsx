import { AnimatedComponent } from '@/types/Layout'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { FadeInOut } from '@/constants/Animations'
export const MotionDiv: FC<AnimatedComponent> = ({ variants = FadeInOut, children, props }) => {
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