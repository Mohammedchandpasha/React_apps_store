// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabId} = props
  const {tabId, displayText} = tabDetails

  const changeTabId = () => {
    onChangeTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button onClick={changeTabId} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
