import { Container, Content, HeaderMenu, HomeButton } from "./styles";
import { ReactComponent as Bag }   from "../../assets/bag.svg"
import { ReactComponent as Menu }   from "../../assets/menu.svg"
import { ReactComponent as ArrowDownWallet }   from "../../assets/arrowDownWallet.svg"
import { ReactComponent as ArrowUp }   from "../../assets/arrowUp.svg"
import { ReactComponent as RisingArrow }   from "../../assets/risingArrow.svg"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { HeaderMenuInfo } from "./HeaderMenuInfo";

export function Header() {
    return(
       <Container>
           <Content>
               <HomeButton>
                    <Logo />
               </HomeButton>
               <HeaderMenu>
                    <HeaderMenuInfo 
                    name="saldo bruto" 
                    value="130.521.230,02" 
                    Icon={Bag}/>
                    <HeaderMenuInfo 
                    name="valor aplicado" 
                    value="521.230,02" 
                    Icon={ArrowUp}/>
                    <HeaderMenuInfo 
                    name="rentabilidade" 
                    value="2.34%" 
                    Icon={RisingArrow}/>
                    <HeaderMenuInfo 
                    name="carteira" 
                    value="minha carteira" 
                    Icon={ArrowDownWallet}/>
                    <Menu />
                    
               </HeaderMenu>
           </Content>
       </Container>
    )
}