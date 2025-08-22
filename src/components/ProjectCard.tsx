import { Card } from "./Card";

export const ProjectCard = (props: IProjectCardProps) => {
	return (
		<Card className="w-full h-full">
			<a href={props.targetUrl}>
				<img src={props.imageUrl} alt={props.title} className="mb-2 rounded-2xl" />

				<div className="text-center text-xl">{props.title}</div>
				<div className="text-center">{props.description}</div>
			</a>
		</Card>
	);
};

interface IProjectCardProps {
	imageUrl: string;
	title: string;
	description: string;
	targetUrl: string;
}
