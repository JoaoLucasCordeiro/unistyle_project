import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import state from "../store";
import { CustomButton } from "../components";


const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
  
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-white">
                Uni <br className="xl:block hidden text-white" /> Style
              </h1>
              <h3 className="text-2xl mt-4 text-white">Faça a sua turma ser única!</h3>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
                Cansados dos mesmos modelos de camisetas clichês de sempre? Crie
                para a sua turma da faculdade camisetas únicas com o UniStyle.
              </p>

              <CustomButton
              type="filled"
              title="Crie seu modelo"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
