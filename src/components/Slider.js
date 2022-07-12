import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 300px;
  border-radius: 0px;
`;

const variants = {
  invisible: {
    opacity: 0,
    transition: { duration: 2.5 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 2.5 },
  },
};

const Slider = () => {
  const [visible, setVisible] = React.useState(1);

  const src = `https://bo-like-chicken.github.io/wedding-card/images/photos/${
    visible + 1
  }.jpeg`;

  const timer = () => {
    setVisible((prev) => {
      if (prev < 9) {
        return prev + 1;
      }
      return 0;
    });
  };

  React.useEffect(() => {
    const timeout = setInterval(timer, 3000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <Wrapper>
      <AnimatePresence>
        <Image
          key={src}
          variants={variants}
          initial="invisible"
          animate="visible"
          exit="exit"
          src={src}
          alt="결혼사진"
        />
      </AnimatePresence>
    </Wrapper>
  );
};

export default Slider;
