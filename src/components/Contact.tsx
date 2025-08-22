import "@assets/css/contact.css";
import { Card } from "./Card";

export const Contact = () => {
	return (
		<div className="contact component">
			<div className="contact-title">联系我们</div>
			<Card>
				<div className="contact-subtitle">欢迎志同道合的朋友加入我们的技术社区</div>
				<div className="justify-center flex gap-8 flex-wrap p-8">
					<a href="https://qm.qq.com/q/NeWTRiJRaG" className="contact-item">
						QQ：2113836986
					</a>
					<a href="https://github.com/TATENcn" className="contact-item">
						GitHub：TATEN
					</a>
				</div>
			</Card>
		</div>
	);
};
