import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/stockapp.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import realsense from '@/public/realsense.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'High School Diploma',
		location: 'Aurora, IL',
		description:
			'I graduated high school with a 4.24 GPA, excelling clubs like robotics and math team.',
		icon: React.createElement(LuGraduationCap),
		date: '2022',
	},
	{
		title: 'Undergraduate Degree',
		location: 'Ames, IA',
		description:
			'I am currently studying computer engineering at Iowa State University, working with high levels of programming and software organizations along with lower levels of processors and computing.',
		icon: React.createElement(LuGraduationCap),
		date: '2022 - 2026',
	},
	{
		title: 'Bioinformatics Research Assistant, USDA-ARS',
		location: 'Ames, IA',
		description:
			'I got the chance to work with the barley crop genome and utilize the R language to analyze protein interaction data.',
		icon: React.createElement(CgWorkAlt),
		date: '2022 - 2024',
	},
	{
		title: 'Software Developer Intern, Innergy',
		location: 'Remote',
		description:
			'Over the summer I got to work with Innergy as a junior software developer on our web based 3D modeling CAD software. This was my first experience with industry standard practices and software development tools!',
		icon: React.createElement(CgWorkAlt),
		date: '2024 - 2024',
	},
	{
		title: 'Research Fellow, Boeing',
		location: 'Ames, IA',
		description:
			'Currently working on a driving data collection project, utilizing Swift and mobile development tools to create a system for collecting and analyzing driving data.',
		icon: React.createElement(CgWorkAlt),
		date: '2024 - 2025',
	},
] as const;

export const projectsData = [
	{
		title: 'Senior Design Project',
		description:
			'Working to develop a machine learning hand tracking system with Intel RealSense technology to swipe through posters and images on a tv display without physically touching the screen. This project is a collaboration with the Iowa State University College of Design and the Department of Electrical and Computer Engineering. https://sddec25-02.sd.ece.iastate.edu/',
		tags: ['Python, Ubuntu, CAD'],
		imageUrl: realsense,
	},
	{
		title: 'Paper Trading Investment App',
		description:
			'I worked as a backend developer on this android application project for 1 semester. Users can buy and sell stocks, building their simulated portfolios.',
		tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'Home Server',
		description:
			'Configured docker containers to run various applications for easy deployment, scalability, and simplified maintenance.',
		tags: ['Ubuntu', 'Docker', 'Next.js', 'Tailscale'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Twitter Giveaway Search',
		description:
			'Designed a system which pulls giveaway tweets related to a search query through the Tweepy API, automating the process of finding and participating in giveaways',
		tags: ['Python', 'API Calls', 'RegEx'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'Git',
	'Python',
	'Java',
	'R',
	'C',
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Tailwind',
	'MySQL',
	'SpringBoot',
	'Docker Engine',
] as const;
