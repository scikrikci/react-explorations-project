import { motion } from "framer-motion";
import { useState } from "react";

const MotionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center w-full h-dvh items-center gap-4">
      <motion.div
        className="w-20 h-20 bg-blue-500 rounded"
        animate={{ x: [100, 0], opacity: 1 }}
        initial={{ x: 0, opacity: 0 }} // Başlangıç pozisyonu
        transition={{ duration: 2 }} // Animasyonun süresi
        whileHover={{ scale: 1.2 }} // Üzerine gelince büyüt
        whileTap={{ scale: 0.8 }} // Tıklayınca küçült
      />
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        animate={{
          borderRadius: isOpen ? 20 : 50,
          width: isOpen ? 200 : 100,
          height: isOpen ? 200 : 100,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className={`bg-orange-400 flex justify-center items-center`}
        onClick={() => setIsOpen(!isOpen)}
      ></motion.div>
    </div>
  );
};

export default MotionPage;
// 24px + 56px = 80px
