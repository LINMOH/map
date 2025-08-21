import { Card } from "@components/member-card";
import { ProjectCard } from "@components/project-card";
import memberInfos from "@config/members.json";
import projectInfos from "@config/projects.json";

const Title = (props: { text: string }) => {
	return (
		<div className="text-center text-6xl font-bold mb-6 relative before:absolute before:-bottom-2 before:left-[40%] before:w-[20%] before:h-1 before:bg-black">
			{props.text}
		</div>
	);
};

export const Index = () => {
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
		<div className="max-w-[100rem] mx-auto flex flex-col gap-32 p-4">
			{/* Logo */}
			<div>
				<div className="text-center text-8xl">TATEN</div>
				<div className="text-center text-2xl">计算机科学交流团队</div>
			</div>

			{/* About us */}
			<div>
				<Title text="关于我们" />
				<div className="mx-auto w-256 text-xl">
					TATEN
					是一个充满活力的计算机科学交流团队，汇聚了来自不同背景的技术爱好者，成员年龄从小学六年级到高中三年级。
					我们致力于探索计算机科学的前沿领域，分享知识与经验，共同成长。
					在这里，每个人都能找到属于自己的技术道路，从系统编程到前端开发，从算法竞赛到创新项目，我们用代码连接世界，用技术改变未来。
				</div>
			</div>

			{/* Team members */}
			<div>
				<Title text="团队成员" />
				<div className="columns-1 md:columns-2 lg:columns-3">{memberCards}</div>
			</div>

			{/* Projects */}
			<div>
				<Title text="项目" />
				<div className="columns-1 md:columns-2 lg:columns-3">
					{projectCards}
				</div>
			</div>

			{/* Contact */}
			<div>
				<Title text="联系我们" />
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
	);
};
