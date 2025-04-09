import { motion } from 'framer-motion'
import StatusPing from "./misc/StatusPing";
import heroImg from '../assets/images/team-meet.jpg'

const Hero = () => {
    const primaryBlue = "var(--color-primary-blue)";
    const secondaryBlue = "var(--color-secondary-blue)";

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative overflow-hidden bg-white py-20 md:py-28">
            {/* Modern abstract background elements */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#5D9C89]/5 to-[#B4D8CC]/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div 
                    className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-opacity-20 blur-3xl"
                    style={{ backgroundColor: secondaryBlue }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                />
                <motion.div 
                    className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-opacity-5 blur-2xl"
                    style={{ backgroundColor: primaryBlue }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                />
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <motion.div 
                        className="flex flex-col items-center text-center lg:items-start lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <StatusPing />
                        </motion.div>

                        <motion.h1 
                            variants={itemVariants}
                            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                        >
                            Launch your <span className="text-primary-blue">International Career</span> in 3 months
                        </motion.h1>

                        <motion.p 
                            variants={itemVariants}
                            className="mb-8 max-w-xl text-lg text-gray-600 md:text-xl"
                        >
                            Join EDGE, Digeto's Global Career Accelerator Program and gain the skills, experience, and network to thrive globally.
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                        >
                            <a target="_blank" href="https://www.jotform.com/form/250922808027052#preview">
                                <motion.button 
                                    className="group relative overflow-hidden rounded-lg px-8 py-4 text-base font-medium text-white transition-all duration-300 md:text-lg"
                                    style={{ backgroundColor: primaryBlue }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10">Apply by April 30, 2025</span>
                                    <span className="absolute inset-0 -translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" style={{ backgroundColor: "#2888A3" }}></span>
                                </motion.button>
                            </a>
                            <a href="#about">
                                <motion.button 
                                    className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-primary-blue hover:border-secondary-blue md:text-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.button>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="relative mx-auto max-w-lg lg:ml-auto"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gray-100 md:h-96">
                            <img
                                src={heroImg}
                                alt="Global professionals collaborating"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        <motion.div 
                            className="absolute -bottom-6 -left-6 h-20 w-20 rounded-lg opacity-80"
                            style={{ backgroundColor: secondaryBlue }}
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 0.8, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        />
                        <motion.div 
                            className="absolute -top-6 -right-6 h-20 w-20 rounded-full border-4 opacity-30"
                            style={{ borderColor: primaryBlue }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.3, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;