import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/slices/flipsSlice'
import { hashRandom } from 'react-hash-string'

const AddItem = () => {
  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState("")
  const [minsToUpdate, setMinsToUpdate] = useState("")
  const [buyOrSell, setBuyOrSell] = useState("Buy")
  const dispatch = useDispatch()
  const itemNameInputRef = useRef()

  useEffect(() => {
    itemNameInputRef.current.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(add({
      itemName,
      itemPrice,
      buyOrSell,
      minsToUpdate,
      id: hashRandom()
    }))
    resetForm()
  }

  const resetForm = () => {
    setItemName("")
    setItemPrice("")
    setMinsToUpdate("")
  }

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        <label>Item name <span>*</span></label>
        <input
          type="text"
          required
          ref={itemNameInputRef}
          placeholder="Noxious scythe"
          pattern="[a-zA-Z ]+"
          title="Alphabetical characters and spaces only"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <label>Item price (in millions) <span>*</span></label>
        <input
          type="number"
          required
          placeholder="1200"
          value={itemPrice}
          onChange={(event) => setItemPrice(event.target.value)}
        />
        <label>Minutes to update <span>*</span></label>
        <input
          type="number"
          required
          placeholder="60"
          min={5}
          max={480}
          title="A value from 5 to 480"
          value={minsToUpdate}
          onChange={(event) => setMinsToUpdate(event.target.value)}
        />
        <label>Buy/Sell</label>
        <select
          value={buyOrSell}
          onChange={(event) => setBuyOrSell(event.target.value)}
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
 
export default AddItem