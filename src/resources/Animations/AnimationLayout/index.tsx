import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimationLayout({
  id,
  children,
  type,
}: {
  id?: string;
  children?: React.ReactNode;
  type: 'down' | 'up' | 'inView' | 'appear';
}) {
  if (type === 'inView') {
    const ref = useRef(null);
    const control = useAnimation();
    const isInView = useInView(ref);

    const boxVariant = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 40,
          damping: 20,
          delay: 0.5,
        },
      },
      hidden: { opacity: 0, y: 60 },
    };

    useEffect(() => {
      if (isInView) {
        control.start('visible');
      }
    }, [control, isInView]);

    return (
      <motion.div
        id={id}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'appear') {
    return (
      <motion.div
        id={id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
        style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ y: type === 'down' ? -150 : 250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: type === 'down' ? -150 : 250, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 35,
      }}
      style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}
    >
      {children}
    </motion.div>
  );
}
