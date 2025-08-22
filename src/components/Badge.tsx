import "@assets/css/common.css";
import { merge } from "@utility/merge";

const badgeWhiteStyle = "bg-blue-500";
const badgeBlackStyle = "dark:bg-[#60a5fa]";
const badgeCommonStyle = "rounded-xl py-1 px-2 inline-block text-white";

export const Badge = (props: IBadgeProps) => {
	return <div className={merge({ badgeBlackStyle, badgeCommonStyle, badgeWhiteStyle })}>{props.text}</div>;
};

export interface IBadgeProps {
	text: string;
}
