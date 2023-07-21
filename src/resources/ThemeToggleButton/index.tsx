import { AnimatePresence, motion } from 'framer-motion';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';

const ThemeToggleButton = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={isDark ? 'dark' : 'light'}
        initial={{ x: -40, y: 30, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 40, y: 30, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <PiSunDuotone
            cursor="pointer"
            size={24}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          />
        ) : (
          <PiMoonDuotone
            cursor="pointer"
            size={24}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
