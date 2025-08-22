import "@assets/css/common.css";

export const Card = (props: { children?: React.ReactNode; className?: string }) => {
	return <div className={`component ${props.className} card`}>{props.children}</div>;
};
