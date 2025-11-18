import Logo from "../../img/SOLIS_INVESTIMENTOS_BRANDMARK_VERTICAL-1.png";
import {
    HeaderContainer,
    Image,
    SubTitleContainer
} from "./Style";

function Header() {
    return (
        <>
            <HeaderContainer>
                <Image src={Logo} alt="Logo"/>
            </HeaderContainer>
        </>
    );
}

export default Header;
