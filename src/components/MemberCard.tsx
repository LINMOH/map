import { Badge } from "./Badge";
import { Card } from "./Card";

export const MemberCard = (props: ICardProps) => {
	const { avatarUrl, name, blogWebsite, introduction } = props;

	const badges = props.skills.map((text) => Badge({ text }));

	const pureBlogWebsiteString = blogWebsite?.replace(/^https?:\/\//, "").replace(/\/$/, "");

	// Blog website link
	const blogWebsiteLink = pureBlogWebsiteString ? (
		<a
			href={blogWebsite}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-200 transition-colors"
		>
			{pureBlogWebsiteString}
		</a>
	) : (
		<span className="text-gray-500">No blog website</span>
	);

	return (
		<Card>
			{/* 上方概述 */}
			<div className="flex mb-2">
				{/* 头像 */}
				<img src={avatarUrl} alt={`${name}'s avatar`} className="rounded-full size-32 mr-2" />
				{/* 名称和博客 */}
				<div className="flex items-center">
					<div>
						<div className="text-2xl">{name}</div>
						<div>{blogWebsiteLink}</div>
					</div>
				</div>
			</div>
			{/* 描述 */}
			<div className="w-full p-2 rounded-2xl">
				{/* 特长 */}
				<div className="mb-2">
					<div className="font-bold font-xl mb-2">特长</div>
					<div className="flex gap-2 flex-wrap">{badges}</div>
				</div>
			</div>
			{/* Introduction */}
			<div className="leading-7 text-[#64748b] dark:text-[#94a3b8]">{introduction}</div>
		</Card>
	);
};

export interface ICardProps {
	avatarUrl: string;
	name: string;
	blogWebsite?: string;
	introduction: string;
	skills: string[];
}
