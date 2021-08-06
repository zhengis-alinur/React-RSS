import React from 'react'
import { Card } from './Card'
import { Search } from './Search'
import '../styles/App.scss'

export const App = () => {
  const cards = [
    <Card
      title="Pizza"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg"
      key="pizza"
    />,
    <Card
      title="Pasta"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://lifehacker.ru/wp-content/uploads/2018/04/Pasta_1523360590.jpg"
      key="Pasta"
    />,
    <Card
      title="Borsch"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg"
      key="Borsch"
    />,
    <Card
      title="Manty"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://vkusno-vsem.com/wp-content/uploads/2015/06/%D0%BA%D0%B0%D0%BA-%D0%BF%D1%80%D0%B8%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D0%BC%D0%B0%D0%BD%D1%82%D1%8B.jpg"
      key="Manty"
    />,
    <Card
      title="Lagman"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://chudo-povar.com/images/kazaxskij-lagman.jpg"
      key="Lagman"
    />,
    <Card
      title="Ramen"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://the-challenger.ru/wp-content/uploads/2018/05/shutterstock_379968754.jpg"
      key="Ramen"
    />,
    <Card
      title="Shashlyk"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://aif-s3.aif.ru/images/020/410/1663400190c63b1e96cb76f7afa72973.jpg"
      key="Shashlyk"
    />,
    <Card
      title="Plov"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://www.gastronom.ru/binfiles/images/20170418/b87bb973.jpg"
      key="Plov"
    />,
    <Card
      title="Samsa"
      desc="Это просто божественно"
      recipeTag="main dish"
      imgUrl="https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg"
      key="Samsa"
    />,
  ]

  return (
    <>
      <div className="header">
        <Search />
      </div>
      <div className="cards">
        {cards.map((elem) => {
          return elem
        })}
      </div>
    </>
  )
}
