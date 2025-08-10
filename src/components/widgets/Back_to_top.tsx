"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowButton(window.scrollY > 200);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!showButton) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-15 right-4 z-100 p-3 mr-6 rounded-full bg-black border-2 border-white-700 text-white hover:bg-blue-700 shadow-lg transition-colors duration-700"
			aria-label="Back to top"
		>
			<ArrowUp className="w-7 h-7" />
		</button>
	);
}