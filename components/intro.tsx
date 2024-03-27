'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
	return (
		<section
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
			id="home"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'tween', duration: 0.2 }}
					>
						<Image
							src="/IMG_7043.JPG"
							alt="portrait"
							width="192"
							height="192"
							quality="95"
							priority={true}
							className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white"
						/>
					</motion.div>
					<motion.span
						className="absolute bottom-0 left-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							striffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hey, I'm Shiv.</span> I'm a computer
				engineering student at Iowa State University. I am an{' '}
				<span className="font-bold">aspiring software engineer</span> on a
				journey to turn my{' '}
				<span className="underline">aspirations into reality.</span>
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2  rounded-full outline-none focus:scale-101 hover:scale-110 hover:bg-gray-950 active:scale-95 transition-all"
				>
					Contact me here{' '}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					className="group dark:bg-white/10 bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-101 border border-black/10 hover:scale-110 active:scale-95 transition-all cursor-pointer"
					href="/Shivansh_Patel_Resume.pdf"
					download
				>
					Download Resume{' '}
					<HiDownload className="opacity-60 group-hover:translate-y-1 group-hover:scale-110 transition" />
				</a>
				<a
					href="https://www.linkedin.com/in/shivpatel123/"
					target="_blank"
					className="bg-white p-4 dark:bg-white/10 dark:text-white/60 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.10] border border-black/10 hover:scale-[1.15] hover:text-gray-950 active:scale-95 transition-all cursor-pointer"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/ShivPatel123"
					target="_blank"
					className="bg-white p-4 dark:bg-white/10 dark:text-white/60 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.10] outline-none focus:scale-101 hover:text-gray-950 border hover:scale-[1.15] border-black/10 active:scale-95 transition-all cursor-pointer"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
