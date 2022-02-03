import Footer from './Footer'
import Header from './Header'
import CoffeMenu from './CoffeMenu'
import CookieSlider from './CookieSlider'
import TeaSlider from './TeaSlider'
import CocktailSlider from './CocktailSlider'
import Capsules from './Capsules'

const HomePage = ({ coffeState, allState }) => {
  return (
    <div>
      <Header />
      <CoffeMenu coffeState={coffeState} />

      <TeaSlider products={allState} name="ჩაი" />

      <CocktailSlider products={allState} name="მეამას კოქტეილები" />

      <CookieSlider products={allState} name="ორცხობილები" />

      <Capsules />
      <Footer />
    </div>
  )
}

export default HomePage
