import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="page page--get-started">
      <p className="text-white text-[19px] md:text-2xl font-light mb-6">
        You can obtain bonPION in two ways: either create a new one
        independently or claim it as a reward if you're part of the Muon
        pioneers
      </p>
      <p className="text-white text-lg md:text-xl font-semibold md:font-light mb-4 mr-auto">
        You're a pioneer if you:
      </p>
      <span className="flex w-full gap-3 justify-stretch mb-12">
        <span className="get-started__pioneer-option">
          Joined the Muon Presale
        </span>
        <span className="get-started__pioneer-option">
          Joined the Deus Presale
        </span>
        <span className="get-started__pioneer-option">
          Operated an Alice Node
        </span>
      </span>
      <span className="get-started__actions">
        <NewBonPionAction />
        <MuanPioneerAction />
      </span>
    </div>
  );
};

const NewBonPionAction = () => {
  const newBonPionFloatingIconVariants = {
    initial: {
      left: -4 * 4,
      bottom: -9 * 4,
      transform: 'rotate(0deg)',
    },
    animate: {
      left: -10 * 4,
      bottom: 13 * 4,
      transform: 'rotate(30deg)',
    },
  };
  return (
    <motion.span
      whileHover="animate"
      className="get-started__actions__action-container relative"
    >
      <motion.img
        variants={newBonPionFloatingIconVariants}
        className="get-started__actions__action__floating-object hidden h-[186px] w-auto md:absolute -left-4 -bottom-9"
        src="/assets/images/get-started/new-bon-pion-floating-icon.svg"
        alt=""
      />
      <div className="get-started__actions__action">
        <img
          className="h-8 mr-3 md:mr-0 md:mb-12 md:h-16 w-auto"
          src="/assets/images/get-started/new-bon-pion-icon.svg"
          alt=""
        />
        <div className="font-semibold md:text-2xl md:font-light text-white md:text-center mx-auto">
          Get Started with a New bonPION
        </div>
      </div>
    </motion.span>
  );
};

const MuanPioneerAction = () => {
  const muanFloatingIconVariants = {
    initial: {
      top: -7 * 4,
      right: -20 * 4,
      transform: 'rotate(0deg)',
    },
    animate: {
      top: 22 * 4,
      right: -10 * 4,
      transform: 'rotate(45deg)',
    },
  };
  return (
    <Link
      className="get-started__actions__action-container relative"
      to="/claim"
    >
      <motion.span whileHover="animate">
        <motion.img
          variants={muanFloatingIconVariants}
          className="hidden md:absolut get-started__actions__action__floating-object h-[203px] w-auto -top-7 -right-20"
          src="/assets/images/get-started/muan-pioneer-floating-icon.svg"
          alt=""
        />
        <div className="get-started__actions__action">
          <img
            className="h-8 mr-3 md:mr-0 md:mb-12 md:h-16 w-auto"
            src="/assets/images/get-started/muan-pioneer-icon.svg"
            alt=""
          />
          <div className="font-semibold md:text-2xl md:font-light text-white md:text-center mx-auto">
            Claim as a Muon Pioneer
          </div>
        </div>
      </motion.span>
    </Link>
  );
};

export default GetStarted;
