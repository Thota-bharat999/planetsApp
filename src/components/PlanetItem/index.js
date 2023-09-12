import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {imageUrl, name, description} = planetItemDetails

  return (
    <div className="plant-container">
      <img src={imageUrl} alt={`Planet ${name}`} className="image-planet" />
      <h1 className="plants-title">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
