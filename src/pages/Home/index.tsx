import { useContext } from "react"
import { Error } from "../../components/Error";

import { FixedIncomeSection } from "../../components/FixedIncomeSection";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Sidebar } from "../../components/Sidebar";
import { SmallInfoSection } from "../../components/SmallInfoSection";
import { IncomeContext } from "../../contexts/income";

import { Container } from "./styles";

export function Home() {
  const { loadingData, requestError } = useContext(IncomeContext);

  if (loadingData) return <Loading />
  if (requestError) return <Error />

  return (
    <Container>
      <Header />

      <div className="content">
        <Sidebar />
        <main>
          <h3 className="title">Renda Fixa</h3>
          <SmallInfoSection />
          <FixedIncomeSection />
        </main>
      </div>
    </Container>
  )
}
