// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props

  const {name} = suggestionDetails

  return (
    <li className="list-container">
      <p className="para">{name}</p>
      <hr className="line" />
    </li>
  )
}

export default SuggestionItem
