import { Container, IconContainer, Divider, Option, OptionsContainer } from "./styles";
import { ReactComponent as ArrowRight2 } from "../../../assets/arrowRight2.svg"
import { useState } from "react";

export function SideBarComponent({ name, Icon, options, actualPage}) {

    const [active, setActive] = useState(false)

    function handleActive() {
        setActive(!active);
    }

    if (active || actualPage) {
        return (
            <>
                <Container onClick={handleActive} className={active ? "active" : ""}>
                    <IconContainer style={{backgroundColor: "#4C309B"}}>
                        <Icon 
                        style={{ width: "40px",}}
                        />
                    </IconContainer> 
        
                    
                    <p>{name}</p>
                    <ArrowRight2 style={{
                        marginLeft: "auto",
                    }}/>
                </Container>
                <Divider></Divider>
                {
                    active
                    &&
                    <OptionsContainer>

                    <ul>
                        {options.map((option) => {
                            return (
                                <>
                                    <a href={option.link}>
                                        <Option>
                                                <li>{option.value}</li>
                                            <ArrowRight2 style={{
                                                marginLeft: "auto",
                                            }}/>
                                        </Option>
                                        
                                    </a>
                                    <Divider></Divider>
                                </>

                                
                                )
                            })}
                    </ul>
                </OptionsContainer>
                }
            </>
            
    
        )
    }

    return (
        <>
        <Container onClick={handleActive}>
            <IconContainer>
                <Icon 
                style={{ width: "40px",}}
                />
            </IconContainer> 

            
            <p>{name}</p>
            <ArrowRight2 style={{
                marginLeft: "auto",
            }}/>
        </Container>
        <Divider></Divider>
        </>
        

    )
}