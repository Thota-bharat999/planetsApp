import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlantsSlider = props => {
  const {planetsList} = props
  return (
    <div className="plants-container" data-testid="planets">
      <h1 className="plants-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem planetItemDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlantsSlider
