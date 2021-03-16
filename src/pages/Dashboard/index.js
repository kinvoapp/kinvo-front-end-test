import * as S from "./styles";

import BoxValues from "../../components/BoxValues";
import MyFixedIncome from "../../components/MyFixedIncome";

const Dashboard = () => {
  return (
    <S.Container>
      <BoxValues />
      <MyFixedIncome />
    </S.Container>
  );
};

export default Dashboard;
