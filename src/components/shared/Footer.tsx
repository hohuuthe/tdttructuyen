import { motion } from "framer-motion";
import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FACEBOOK_URL, GITHUB_URL } from "~/constants";

interface FooterItemProps {
  href: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ children, href }) => (
  <motion.a
    variants={itemVariants}
    href={href}
    rel="noreferrer"
    target="_blank"
    className="hover:text-blue-300 flex items-center space-x-1 font-semibold transition duration-300"
  >
    {children}
  </motion.a>
);

const itemVariants = {
  exit: {
    opacity: 0,
    y: 200,
  },

  enter: {
    y: 0,
    opacity: 1,
  },
};

const Footer = () => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.3 }}
      animate="enter"
      initial="exit"
      exit="exit"
      className="w-full h-16 fixed bottom-0 flex items-center justify-center space-x-4 z-10"
    >
      <FooterItem href={FACEBOOK_URL}>
        <AiFillFacebook className="w-6 h-6" />

        <p>Facebook</p>
      </FooterItem>

      <FooterItem href={GITHUB_URL}>
        <AiFillGithub className="w-6 h-6" />

        <p>Github</p>
      </FooterItem>
    </motion.div>
  );
};

export default Footer;
