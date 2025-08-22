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
			className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-200 transition-colors"
		>
			{pureBlogWebsite}
		</a>
	) : (
		<span className="text-gray-500">No blog website</span>
	);

	return (
		<div className="w-full p-4 rounded-2xl shadow-md dark:bg-gray-700 hover:shadow-xl transition-shadow bg-zinc-200">
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
						<div className="text-2xl text-gray-500 dark:text-gray-200">
							{name}
						</div>
						<div>{blogWebsiteLink}</div>
					</div>
				</div>
			</div>

			{/* Skills */}
			<div className="dark:border-l-blue-200 border-l-4 my-4 px-2 dark:bg-gray-600 rounded-r-md border-l-blue-400">
				<div className="font-bold mb-1 text-gray-500 dark:text-gray-200">
					专长
				</div>
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
