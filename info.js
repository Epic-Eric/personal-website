import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 1300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-[#111111] text-white">
                <Routes>
                    <Route path="/" element={<MainContent />} />
                </Routes>
            </div>
        </Router>
    );
}

function IntroAnimation() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
                <svg
                    className="w-[600px] h-[300px]"
                    viewBox="0 0 600 300"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* E path - adjusted translation */}
                    <path
                        d="M 50,40 
               L 160,40 
               L 160,70 
               L 70,70 
               L 70,84 
               L 140,84 
               L 140,114 
               L 70,114 
               L 70,130 
               L 160,130 
               L 160,160 
               L 50,160 
               L 50,40"
                        className="traced-letter-e"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="none"
                        transform="scale(1.5) translate(0, 0)"
                    />

                    {/* X path - adjusted translation */}
                    <path
                        d="M 235,70
               L 270,40
               L 300,40
               L 255,100
               L 300,160
               L 270,160
               L 235,130
               L 200,160
               L 170,160
               L 215,100
               L 170,40
               L 200,40
               L 236,70"
                        className="traced-letter-x"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="none"
                        transform="scale(1.5) translate(10, 0)"
                    />

                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="50%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

function MainContent() {
    return (
        <div className="relative z-10">
            {/* Navbar - removed top margin completely */}
            <nav className="flex items-center justify-between p-6 rounded-3xl bg-black/30 backdrop-blur-sm border border-white/5">
                <div className="nav-container flex justify-between w-full">
                    <div className="text-xl font-mono text-white">eric</div>
                    <div className="space-x-6 py-2">
                        <a href="#home" className="text-white hover:text-yellow-300 transition-colors py-1">Home</a>
                        <a href="#education" className="text-white hover:text-yellow-300 transition-colors py-1">Education</a>
                        <a href="#publications" className="text-white hover:text-yellow-300 transition-colors py-1">Publications</a>
                        <a href="#projects" className="text-white hover:text-yellow-300 transition-colors py-1">Projects</a>
                        <a href="#contact" className="text-white hover:text-yellow-300 transition-colors py-1">Contact</a>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        backgroundColor: '#111111',
                        padding: '15px 25px',
                        borderRadius: '8px',
                        border: '1px solid #444'
                    }}>
                        <a href='https://webring.ayana li.net/#https://epiceric.tech?nav=prev' style={{ color: '#e0e0e0', textDecoration: 'none', fontSize: '1.5rem' }}>←</a>
                        <a href='https://webring.ayanali.net/#https://epiceric.tech' target='_blank'>
                            <img src='https://webring.ayanali.net/img/icon-dark.svg' alt='The Unnamed Webring' style={{ width: '32px', height: '32px' }} />
                        </a>
                        <a href='https://webring.ayanali.net/#https://epiceric.tech?nav=next' style={{ color: '#e0e0e0', textDecoration: 'none', fontSize: '1.5rem' }}>→</a>
                    </div>
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="py-20">
                <div className="container flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-7/12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-6"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Hello,',
                                    400,
                                    "Hello, I'm Eric!",
                                ]}
                                speed={50}
                                className="text-8xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                                cursor={true}
                                style={{
                                    display: 'inline-block',
                                    fontSize: '5em',
                                    lineHeight: '1.2',
                                }}
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="text-xl text-white/80 mb-6"
                        >
                            I'm a 1st year <a href="https://engsci.utoronto.ca/program/what-is-engsci/" className="gradient-text underline-animation"> Engineering Science </a> student at the University of Toronto.
                            <i> I'm passionate about Robotics, RL, and Software Engineering.</i>
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                            className="flex space-x-4"
                        >
                            <a
                                href={process.env.PUBLIC_URL + '/resume.pdf'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-2 rounded-full bg-black/30 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all group"
                            >
                                <span>View Resume</span>
                                <svg
                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 }}
                        className="md:w-5/12"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-2xl opacity-20"></div>
                            <img
                                src={process.env.PUBLIC_URL + '/selfie.png' || "/placeholder.svg"}
                                alt="Eric Xie"
                                className="relative rounded-2xl w-full object-cover aspect-[3/4]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Team cards on the left */}
                        <div className="md:w-7/12">
                            <div className="course-cards">
                                {/* UTFR Card */}
                                <motion.div
                                    className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-4 border border-white/5 relative group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative z-10">
                                        <h4 className="text-xl text-white mb-2">UofT Formula Racing</h4>
                                        <h5 className="text-yellow-400/70">Braking Team - Brake Piston Design</h5>
                                        <p className="text-white/60 mt-2">
                                            Designing brake piston components using Solidworks for the 2024 FSAE competition vehicle.
                                        </p>
                                    </div>
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                        <img
                                            src={process.env.PUBLIC_URL + '/2.Piston_Spring_Cap.jpg' || "/placeholder.svg"}
                                            alt="Brake Piston Design"
                                            className="w-64 h-64 object-cover rounded-xl shadow-2xl hover-image"
                                        />
                                    </div>
                                </motion.div>

                                {/* UTAT Card */}
                                <motion.div
                                    className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-4 border border-white/5 relative group overflow-visible"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative z-10">
                                        <h4 className="text-xl text-white mb-2">UofT Aerospace Team</h4>
                                        <h5 className="text-yellow-400/70">Software Team - Camera Simulation</h5>
                                        <p className="text-white/60 mt-2">
                                            Developing camera simulation and localization systems in Gazebo for autonomous drone navigation.
                                        </p>
                                    </div>
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-64 h-64 object-cover rounded-xl shadow-2xl hover-image"
                                        >
                                            <source src={process.env.PUBLIC_URL + '/plane-takeoff.mp4'} type="video/mp4" />
                                        </video>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Education text on the right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:w-5/12"
                        >
                            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                Education
                            </h2>
                            <p className="text-xl mb-4 text-white/80">
                                I love the breadth and depth of different engineering disciplines that EngSci offers. Passionate about combining theoretical knowledge with practical hands-on experience.
                            </p>
                            <p className="text-xl text-white/80">
                                Hover to check out the university design teams I'm a part of!

                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="py-20">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                    >
                        Publications
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl mb-8"
                    >
                        My research interests lie in robotics and reinforcement learning.
                    </motion.p>
                    <div className="publications-grid">
                        {/* Add your publications here */}
                        <p className="text-yellow-400/70">Coming soon summer 2025 ...</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="container">
                    {/* Projects Header */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                    >
                        Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl mb-8"
                    >
                        I'm always looking to build cool things!
                    </motion.p>

                    {/* SimulEval Project */}
                    <motion.div
                        className="project-block bg-black/30 backdrop-blur-sm rounded-xl p-8 relative group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Project Description */}
                            <div className="md:w-6/12 order-md-1">
                                <h2 className="text-2xl font-bold mb-4 gradient-text">SimulEval @ FAIR 2024</h2>
                                <p className="text-lg text-white/60">
                                    Developed features for SimulEval - FAIR's open source simultaneous translation evaluation toolkit - using Python.
                                    Features include visualization, remote and live translation. Aid researchers in interpretting output from the wait-k algorithm.
                                    Check out the demo!
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="https://www.youtube.com/watch?v=9g8gRykOpJk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href="https://github.com/facebookresearch/SimulEval"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>

                            {/* Project Image */}
                            <div className="md:w-6/12 order-md-2">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={process.env.PUBLIC_URL + '/test.png' || "/placeholder.svg"}
                                        alt="SimulEval Demo"
                                        className="w-full object-cover aspect-[18.5/13.7] object-[50%_15%] transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Viral Insight Project */}
                    <motion.div
                        className="project-block bg-black/30 backdrop-blur-sm rounded-xl p-8 relative group mt-12"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Project Image - Left */}
                            <div className="md:w-6/12">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={process.env.PUBLIC_URL + '/viral-insight.png' || "/placeholder.svg"}
                                        alt="Viral Insight Demo"
                                        className="w-full object-cover rounded-xl transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Project Description - Right */}
                            <div className="md:w-6/12">
                                <h2 className="text-2xl font-bold mb-4 gradient-text">Viral Insight @ Buildspace 2024</h2>
                                <p className="text-lg text-white/60">
                                    My friend Jinay Patel and I built a tool for YouTubers to brainstorm catchy titles.
                                    We trained an AI regression model from scraped data from YouTube. This way, content creators
                                    could compare between potential title names, maximize video performance and attract a wider audience.
                                    We got 120+ upvotes on ProductHunt, 500+ page views on Vercel, and our first paying
                                    customer ($45 USD!!) when we officially launched in 2024 Summer.
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                        <span>Launch Video</span>
                                    </a>
                                    <a
                                        href="https://www.producthunt.com/posts/viral-insight"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
                                        </svg>
                                        <span>Product Hunt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vita Project - Image Right */}
                    <motion.div
                        className="project-block bg-black/30 backdrop-blur-sm rounded-xl p-8 relative group mt-12"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Project Description - Left */}
                            <div className="md:w-6/12">
                                <h2 className="text-2xl font-bold mb-4 gradient-text">Vita @ UBC Geering Up 2023</h2>
                                <p className="text-lg text-white/60">
                                    Many Indigenous communities in British Colombia have limited access to clean water
                                    due to colonially polluted lakes and rivers. This is why I led my team to develop
                                    a low-cost, zero-electricity, and sustainable water-filtration bottle. It's 3D printed
                                    with food-grae PETG with a commercial filter. We successful showcased @ UBC Gala
                                    with 500+ attendees.
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="https://vitacanada.wixsite.com/2023"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                        </svg>
                                        <span>Website</span>
                                    </a>
                                </div>
                            </div>

                            {/* Project Image - Right */}
                            <div className="md:w-6/12">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={process.env.PUBLIC_URL + '/vita.jpg' || "/placeholder.svg"}
                                        alt="Vita Water Filtration Bottle"
                                        className="w-full h-auto object-cover rounded-xl transition-all duration-300"
                                        style={{ maxHeight: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Nail Braille Project - Image Left */}
                    <motion.div
                        className="project-block bg-black/30 backdrop-blur-sm rounded-xl p-8 relative group mt-12"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Project Image - Left */}
                            <div className="md:w-6/12">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={process.env.PUBLIC_URL + '/nail-braille.jpg' || "/placeholder.svg"}
                                        alt="Nail Braille Prototype"
                                        className="w-full h-auto object-cover rounded-xl transition-all duration-300"
                                        style={{ maxHeight: '350px' }}
                                    />
                                </div>
                            </div>

                            {/* Project Description - Right */}
                            <div className="md:w-6/12">
                                <h2 className="text-2xl font-bold mb-4 gradient-text">Nail Braille @ Shad Western 2022</h2>
                                <p className="text-lg text-white/60">
                                    1 million+ Canadians are visually impaired, but don't know braille, which tremendously
                                    hinders their navigation and communication. Knowing this pain first hand from a friend
                                    of mine, I led my team to develop a speech to braille learning device for visually
                                    impaired individuals. It translates verbal speech with Mozilla DeepSpeech and displays
                                    tactile pins on an Arduino board. This braille learning technique is more affordable
                                    than tutoring, and more interactive than traditional books and pegs, winning us the
                                    Best Prototype award.
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="https://www.youtube.com/watch?v=VYJkUYOZFRU"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                        <span>Demo Video</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* VEX & FIRST Robotics Project - Image Right */}
                    <motion.div
                        className="project-block bg-black/30 backdrop-blur-sm rounded-xl p-8 relative group mt-12"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Project Description - Left */}
                            <div className="md:w-6/12">
                                <h2 className="text-2xl font-bold mb-4 gradient-text">VEX & FIRST Robotics @ Ten Ton Robotics 2021 - 2024</h2>
                                <p className="text-lg text-white/60">
                                    Through 3 years of robotics competition, I have designed both hardware mechanisms
                                    like chassis, four-bar lift, ratchet etc, and implemented software algorithm like
                                    PID, odometry, and pure pursuit controller. I gained mechanical, electrical, and
                                    programming experiences, leading my team to 3 World Championships.
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="https://www.youtube.com/watch?v=eyDEXsmhFes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                        <span>Odometry Demo</span>
                                    </a>
                                </div>
                            </div>

                            {/* Project Image - Right */}
                            <div className="md:w-6/12">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={process.env.PUBLIC_URL + '/1010n.png' || "/placeholder.svg"}
                                        alt="Ten Ton Robotics"
                                        className="w-full h-auto object-cover rounded-xl transition-all duration-300"
                                        style={{ maxHeight: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-6xl font-bold mb-6 flex items-center gap-4">
                            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                I'd love to chat!
                            </span>
                            <img
                                src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                                alt="Waving hand"
                                className="w-16 h-16"
                            />
                        </h2>
                        <p className="text-xl mb-8 text-white/80">
                            Feel free to email me at erictao6666 [at] gmail [dot] com or connect with me here!
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/epic-eric/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white/80 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Epic-Eric"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white/80 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-8 text-sm font-mono">
                built by eric in react, © 2025
            </footer>
        </div>
    );
}

export default App;

<style jsx>{`
  .overlay {
    transition: opacity 0.3s ease;
  }
  .content {
    transition: opacity 0.3s ease;
  }
  .group:hover ~ .content {
    opacity: 0.2;
  }
  .group:hover .overlay {
    opacity: 1;
  }
`}</style>