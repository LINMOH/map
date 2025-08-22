import { Card } from "@components/Card";
import { Contact } from "@components/Contact";
import { MemberCard } from "@components/MemberCard";
import { ProjectCard } from "@components/ProjectCard";
import { members } from "@config/members";
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

	const memberCards = members.map(MemberCard);
	const projectCards = projectInfos.map(ProjectCard);

	return (
		<div className="bg-linear-to-br from-blue-500 to-violet-500 text-[#333] dark:text-[#e2e8f0] font-[思源宋体]">
			<div
				style={{
					backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 3px, transparent 3px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 3px, transparent 3px)
          `,
					backgroundSize: "80px 80px",
				}}
			>
				{/* Logo */}
				<div className="h-[96vh] flex items-center">
					<div
						className="w-full text-white"
						style={{
							transform: `translateY(${scrollY * 0.4}px)`, // 根据滚动位置动态调整 translateY
						}}
					>
						<div className="text-center text-8xl mb-4 tracking-wider">TATEN</div>
						<div className="text-center text-4xl">计算机科学交流团队</div>
					</div>
				</div>

				<div className="component">
					{/* About us */}
					<div className="py-8 pt-16 rounded-t-2xl">
						<div className="text-center text-4xl font-bold mb-8 ">关于我们</div>
						<Card className="leading-8 m-8 md:m-16 lg:md-32 font-xl">
							TATEN
							是一个充满活力的计算机科学交流团队，汇聚了来自不同背景的技术爱好者，成员年龄从小学六年级到高中三年级。
							我们致力于探索计算机科学的前沿领域，分享知识与经验，共同成长。
							在这里，每个人都能找到属于自己的技术道路，从系统编程到前端开发，从算法竞赛到创新项目，我们用代码连接世界，用技术改变未来。
						</Card>
					</div>

					{/* Team members */}
					<div className="py-8">
						<div className="text-center text-4xl font-bold mb-6">团队成员</div>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">{memberCards}</div>
					</div>

					{/* Projects */}
					<div className="py-8">
						<div className="text-center text-4xl font-bold mb-6">团队项目</div>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">{projectCards}</div>
					</div>

					{/* Contact */}
					<Contact />
				</div>
			</div>
		</div>
	);
};
