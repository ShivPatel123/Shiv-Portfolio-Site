'use client';

import { useTheme } from '@/context/themecontext';
import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="fixed top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-gray-950 border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
		>
			{theme === 'light' ? <BsSun /> : <BsMoon />}
		</button>
	);
}