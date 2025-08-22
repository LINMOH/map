import { Card } from "@components/member-card";
import { ProjectCard } from "@components/project-card";
import memberInfos from "@config/members.json";
import projectInfos from "@config/projects.json";
import { useEffect, useState } from "react";

export const Index = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const memberCards = memberInfos.map((info) => (
		<div className="break-inside-avoid mb-4" key={info.name}>
			<Card {...info} />
		</div>
	));

	const projectCards = projectInfos.map((info) => (
		<div className="break-inside-avoid mb-4" key={info.title}>
			<ProjectCard {...info} />
		</div>
	));

	return (
		<div className="bg-linear-to-br from-blue-500 to-violet-500 text-[#4a5568] dark:text-gray-100 font-[思源黑体]">
			<div
				style={{
					backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 3px, transparent 3px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 3px, transparent 3px)
          `,
					backgroundSize: "80px 80px",
				}}
			>
				<div className="max-w-[100rem] mx-auto flex flex-col">
					{/* Logo */}
					<div className="h-[96vh] flex items-center">
						<div
							className="w-full text-white"
							style={{
								transform: `translateY(${scrollY * 0.4}px)`, // 根据滚动位置动态调整 translateY
							}}
						>
							<div className="text-center text-8xl mb-4 tracking-wider">
								TATEN
							</div>
							<div className="text-center text-4xl">计算机科学交流团队</div>
						</div>
					</div>

					{/* About us */}
					<div className="py-32 dark:bg-gray-700 rounded-t-2xl bg-zinc-200">
						<div className="text-center text-6xl font-bold mb-8 before:-bottom-4 before:left-[42.5%] before:w-[15%] before:h-1 relative before:absolute before:dark:bg-gray-100 before:bg-blue-300 text-[#2d3748]">
							关于我们
						</div>
						<div className="px-8 text-xl lg:px-64 md:px-32 sm:px-16 leading-8">
							TATEN
							是一个充满活力的计算机科学交流团队，汇聚了来自不同背景的技术爱好者，成员年龄从小学六年级到高中三年级。
							我们致力于探索计算机科学的前沿领域，分享知识与经验，共同成长。
							在这里，每个人都能找到属于自己的技术道路，从系统编程到前端开发，从算法竞赛到创新项目，我们用代码连接世界，用技术改变未来。
						</div>
					</div>

					{/* Team members */}
					<div className="py-23 dark:bg-slate-800 bg-zinc-300">
						<div className="text-center text-6xl font-bold mb-6 before:-bottom-4 before:left-[42%] before:w-[16%] before:h-1 relative before:absolute before:dark:bg-gray-100 before:bg-blue-300 text-[#2d3748]">
							团队成员
						</div>
						<div className="columns-1 md:columns-2 lg:columns-3 p-4">
							{memberCards}
						</div>
					</div>

					{/* Projects */}
					<div className="py-32 dark:bg-gray-700 bg-zinc-200">
						<div className="text-center text-6xl font-bold mb-6 before:-bottom-3 before:left-[40%] before:w-[20%] before:h-1 relative before:absolute before:dark:bg-gray-100 before:bg-blue-300 text-[#2d3748]">
							我们的项目
						</div>
						<div className="columns-1 md:columns-2 lg:columns-3 p-4">
							{projectCards}
						</div>
					</div>

					{/* Contact */}
					<div className="py-16 dark:bg-black bg-white">
						<div className="text-center text-4xl font-bold mb-6 before:-bottom-2 before:left-[45%] before:w-[10%] before:h-1 relative before:absolute before:dark:bg-gray-100 before:bg-blue-300 text-[#2d3748]">
							联系我们
						</div>
						<div>
							<div className="text-center text-2xl">
								<span>群主（LINMOH）QQ：</span>
								<a
									href="https://qm.qq.com/q/NeWTRiJRaG"
									className="text-blue-500 hover:text-violet-500 transition-colors"
								>
									2113836986
								</a>
							</div>
							<div className="text-center text-2xl">
								<span>GitHub组织：</span>
								<a
									href="https://github.com/TATENcn"
									className="text-blue-500 hover:text-violet-500 transition-colors"
								>
									TATEN
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
