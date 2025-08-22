export const ProjectCard = (props: IProjectCardProps) => {
	return (
		<div className="w-full dark:bg-gray-600 bg-zinc-300 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
			<a href={props.targetUrl}>
				<img
					src={props.imageUrl}
					alt={props.title}
					className="mb-2 rounded-2xl"
				/>

				<div className="text-center text-xl">{props.title}</div>
				<div className="text-center">{props.description}</div>
			</a>
		</div>
	);
};

interface IProjectCardProps {
	imageUrl: string;
	title: string;
	description: string;
	targetUrl: string;
}
