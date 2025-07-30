interface AvatarContainerProps {
	children: React.ReactNode;
}
const AvatarContent = ({ children }: AvatarContainerProps) => {
	return <div className="flex flex-col">{children}</div>;
};

export default AvatarContent;
