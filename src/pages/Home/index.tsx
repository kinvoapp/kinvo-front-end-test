import { useContext } from "react"
import { CardInfoSmall } from "../../components/CardInfoSmall";
import { Header } from "../../components/Header";
import { IncomeContext } from "../../contexts/income"

export function Home() {
  const { loadingData, requestError } = useContext(IncomeContext);

  if(loadingData) return <h1>Loading</h1>
  if(requestError) return <h1>Error in request</h1>

  return (
    <>
      <Header />

      <CardInfoSmall  title="TEST"  description={200} type="currency"/>
    </>
  )
}
