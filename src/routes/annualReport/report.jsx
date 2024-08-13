import logo from "../../assets/img/logo.png";
import _2021 from "../../assets/pdf/2021.pdf"
import _2022 from "../../assets/pdf/2022.pdf"
import _2023 from "../../assets/pdf/2023.pdf"

import {useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnnualReport() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			<div className="bg-black/50 p-4 lg:p-24 text-white w-full">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					transition={{ duration: 1 }}
					className="flex items-center">
					<p className="text-md font-semibold">REPORT</p>
					<span className="ml-4 text-yellow-200 text-xs">──────────────</span>
				</motion.div>
				<motion.p
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					transition={{ duration: 1 }}
					className="text-4xl font-bold mt-2">
					ANNUAL REPORT
				</motion.p>

				<div className="flex flex-row justify-evenly flex-wrap mt-14">
                    {/* 2021 */}
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold"></span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">Annual Report 2021</span>
								<a href={_2021} target="_blank" className="text-green-500 text-sm font-semibold ml-2">PDF</a>
							</div>
						</div>
					</motion.div>

                    {/* 2022 */}
                    <motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold"></span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">Annual Report 2022</span>
								<a href={_2022} target="_blank" className="text-green-500 text-sm font-semibold ml-2">PDF</a>
							</div>
						</div>
					</motion.div>

                    {/* 2023 */}
                    <motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold"></span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">Annual Report 2023</span>
								<a href={_2023} target="_blank" className="text-green-500 text-sm font-semibold ml-2">PDF</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default AnnualReport;