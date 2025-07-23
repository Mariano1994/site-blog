import Image from "next/image";
import logo from "../assets/logo.svg";

const Logo = () => {
	return <Image src={logo} width={130} alt="logo site iamge" />;
};

export default Logo;
