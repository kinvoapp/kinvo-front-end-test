import { BodyDashBoard } from "./style";
import { SideMenu } from "../SideMenu";
import { DataArea } from "../DataArea";

const Dashboard =() => {
    return (
        <BodyDashBoard>
            <SideMenu></SideMenu>
            <DataArea></DataArea>
        </BodyDashBoard>
    )
}

export default Dashboard;