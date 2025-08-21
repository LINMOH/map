import { Card } from "@components/member-card";
import memberInfos from "@config/members.json";

export const Index = () => {
	const memberCards = memberInfos.map((info) => (
		<div className="break-inside-avoid mb-4" key={info.name}>
			<Card {...info} />
		</div>
	));

	return (
		<div className="max-w-[100rem] mx-auto">
			<div className="text-center text-6xl font-bold my-4 relative before:absolute before:-bottom-2 before:left-[40%] before:w-[20%] before:h-1 before:bg-black">
				团队成员
			</div>

			<div className="columns-1 md:columns-2 lg:columns-3 p-4">
				{memberCards}
			</div>
		</div>
	);
};
