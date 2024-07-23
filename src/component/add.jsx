export default function Add() {
return (
    <>
    <form>
        <div className="form-group">
          <label> Content of the amount of money you want to spend:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the expense name"
            required
          />
        </div>
        <div className="form-group">
          <label>Enter the expense:</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter the amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Day:</label>
          <input
            type="date"
            name="date"
            required
          />
        </div>
        <button type="submit">More spending</button>
      </form>
    
    </>
)
}