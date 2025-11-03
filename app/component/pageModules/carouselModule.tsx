import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Reviews = [
    {
        id: 1,
        name: "Kovács János",
        review: "A szőnyegeim soha nem néztek ki jobban! A csapat profi, barátságos volt, és csodálatos munkát végzett. Nagyon ajánlom!",
    },
    {
        id: 2,
        name: "Nagy Éva",
        review: "Az autókozmetikai szolgáltatás kivételes volt. Az autóm úgy néz ki és olyan illatú, mint egy új. Annyira le vagyok nyűgözve a részletekre való odafigyeléstől."
    },
    {
        id: 3,
        name: "Szabó Péter",
        review: "Gyors, hatékony és megfizethető szolgáltatás. A csapat nagyon figyelmes volt, és a végeredmény lenyűgöző lett. Mindenkinek ajánlom!"
    }
]


const Carousel: React.FC<{ title: string }> = ({ title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-10 gap-5">
            <h2 className="text-3xl font-bold">{title}</h2>
            <AnimatePresence mode="wait">
                <motion.div
                    key={Reviews[currentIndex].id}
                    initial={{ opacity: 0, x: Reviews[currentIndex].id < currentIndex ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: Reviews[currentIndex].id < currentIndex ? 100 : -100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="bg-[#161b22] outline-1 outline-[#364050] w-85 h-40 p-3.5 rounded-md">
                        <p className="italic mb-2 font-medium">
                            {Reviews[currentIndex].review}
                        </p>
                        <p className="text-gray-400 font-semibold">- {Reviews[currentIndex].name}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="space-x-2">
                {Reviews.map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={faCircle}
                        className={`text-xs ${index === currentIndex ? "text-white" : "text-gray-400"}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel;