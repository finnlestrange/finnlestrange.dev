import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledDivElement = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

export default function PageSection({ children, delay = 0, ...props }) {
  return (
    <StyledDivElement
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      mb={6}
      {...props}
    >
      {children}
    </StyledDivElement>
  );
}
