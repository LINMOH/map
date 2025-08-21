export const Card = (props: ICardProps) => {
	const { avatarUrl, name, skill, blogWebsite, introduction } = props;

	const pureBlogWebsite = blogWebsite
		?.replace(/^https?:\/\//, "")
		.replace(/\/$/, "");

	const blogWebsiteLink = pureBlogWebsite ? (
		<a
			href={blogWebsite}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-500 hover:text-violet-500"
		>
			{pureBlogWebsite}
		</a>
	) : (
		<span className="text-gray-500">No blog website</span>
	);

	return (
		<div className="w-full bg-white p-2 rounded-2xl shadow-md">
			<div className="flex">
				{/* Avatar */}
				<img
					src={avatarUrl}
					alt={`${name}'s avatar`}
					className="rounded-2xl size-32 mr-2"
				/>
				{/* Name and blog website */}
				<div className="flex items-center">
					<div>
						<div className="text-2xl text-gray-500">{name}</div>
						<div>{blogWebsiteLink}</div>
					</div>
				</div>
			</div>

			{/* Skills */}
			<div className="p-1 pl-2 my-2 relative before:absolute before:left-0 before:h-full before:w-1 before:bg-gray-500">
				<div className="font-bold mb-1 text-gray-500">专长</div>
				<div className="text-gray-60">{skill}</div>
			</div>

			{/* Introduction */}
			<div>{introduction}</div>
		</div>
	);
};

export interface ICardProps {
	avatarUrl: string;
	name: string;
	skill: string;
	blogWebsite?: string;
	introduction: string;
}
