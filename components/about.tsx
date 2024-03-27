'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
			id="about"
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="font-medium mb-3">
				Driven by a relentless pursuit of excellence, I am an aspiring software
				engineer eager to make meaningful contributions in the technology
				industry. Whether its projects, school work, or research, I'm fueled by
				the excitement of problem-solving. My proactive approach to learning,
				coupled with a strong foundation in programming languages and tools,
				empowers me to tackle new challenges with confidence. With a keen eye
				for detail and a commitment to continuous growth, I am excited about the
				opportunities to innovate and create impactful solutions in the
				ever-evolving field of technology.
			</p>
			<p className="font-medium mb-3">
				When I am not working, I enjoy watching movies and playing videogames. I
				also enjoy exploring hobbies like 3d printing and playing volleyball. I
				have high goals for myself, and I hope through consistent effort I can
				achieve them.
			</p>
		</motion.section>
	);
}
