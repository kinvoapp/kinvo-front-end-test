import React, { useEffect, useState } from 'react'
import Header from '../Header'
import List from '../List'
import styles from '../Income/styles.module.scss'
export interface IIncome {
  fixedIncome: {
    bondType: string
    name: string
    portfolioProductId: number
  }
}

export function Income() {
  const [incomes, setIncome] = useState<IIncome[]>([])

  useEffect(() => {
    tryAcess()
  }, [incomes])

  async function tryAcess() {
    // setLoading(true)
    try {
      fetch(
        `https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData`
      )
        .then((response) => response.json())
        .then(({ data }) => setIncome(data.snapshotByProduct))
    } catch (error) {}
  }

  return (
    <>
      <Header />
      <List />
      <div className={styles.container}></div>
      {/* <section className='list-income'>
        Minhas Rendas Fixas
        <ul>
          {incomes.map((item) => (
            <li key={item.fixedIncome.portfolioProductId}>
              {item.fixedIncome.name}
            </li>
          ))}
        </ul>
      </section> */}
    </>
  )
}
