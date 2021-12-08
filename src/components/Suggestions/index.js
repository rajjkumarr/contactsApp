import './index.css'

const Suggestions = props => {
  const {suggestions} = props

  const {aphabet} = suggestions
  //   const searchButton = event => {
  //     searchInput: event.target.value
  //   }

  return (
    <li className="list1-containers">
      <button className="para1" type="button">
        {aphabet}
      </button>
      <hr className="line" />
    </li>
  )
}
export default Suggestions
