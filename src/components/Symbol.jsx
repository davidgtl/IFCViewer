/**
  Symbol
*/
import "./symbol.css"

const Symbol = ({ symbolId }) => {
  return (
    <svg className="symbol"><use href={symbolId} /></svg>
  )
}

export default Symbol
