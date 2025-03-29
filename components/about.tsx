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
				industry. Whether its projects, school work, or research, I&apos;m
				fueled by the excitement of problem-solving. My proactive approach to
				learning, coupled with a strong foundation in programming languages and
				tools, empowers me to tackle new challenges with confidence. With a keen
				eye for detail and a commitment to continuous growth, I am excited about
				the opportunities to innovate and create impactful solutions in the
				ever-evolving field of technology.
			</p>
			<p className="font-medium mb-3">
				When I am not working, I enjoy watching movies and playing videogames. I
				also enjoy exploring hobbies like 3d printing and playing volleyball. I
				have high goals for myself, and I hope through consistent effort I can
				achieve them.
			</p>
			<p className="font-medium mb-3">
				As a part of my engineering curriculum at Iowa State University, I have
				also made the following reflections on my coursework and schedule there:
			</p>
			<div className="flex flex-col space-y-2">
				<a
					href="https://docs.google.com/document/d/1NV-6BtatIkw6iBxyjf0TDDhXWUI1ONwObAzv_74x-oY/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600 transition"
				>
					General Education Reflection
				</a>
				<a
					href="https://docs.google.com/document/d/1DdaxwFYQtzYeahOlNQIxs-aEgGg-skdwuDnG8kN820o/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600 transition"
				>
					Cumulative Course Reflection
				</a>
			</div>
		</motion.section>
	);
}
