import { motion } from "motion/react";
import { GITHUB_ACCOUNTS } from "../../../constants/github";
import TypingText from "../../../components/animations/TypingText";

function Profile() {
  return (
    <div className="w-full lg:w-1/2">
      <motion.h3
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 0.6,
        }}
      >
        Hi all, I am
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
          mass: 0.8,
          duration: 0.7,
          delay: 0.8,
        }}
        whileHover={{
          scale: 1.03,
          transition: { type: "spring", stiffness: 200, damping: 8 },
        }}
        className="mb-3 font-mono text-6xl font-extrabold text-white md:text-7xl"
      >
        Ahmad Dani
      </motion.h1>
      <TypingText
        texts={[
          "Aspiring Full Stack Web Developer",
          "Information Systems Student",
        ]}
        className="text-xl md:text-2xl text-mint-green lg:text-periwinkle-blue"
      />

      <div className="pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="mb-2 text-sm text-slate-muted"
        >
          // complete the game to continue
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.6 }}
          className="mb-2 text-sm text-slate-muted"
        >
          // you can also see it my Github page
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2 }}
          className="text-sm font-medium"
        >
          <span className="text-periwinkle-blue">const</span>{" "}
          <span className="text-mint-green">githubLink</span> ={" "}
          <a
            href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
            target="_blank"
            className="underline underline-offset-4 text-peach"
          >
            &quot;https://github.com/{GITHUB_ACCOUNTS.username}&quot;
          </a>
        </motion.p>
      </div>
    </div>
  );
}

export default Profile;
