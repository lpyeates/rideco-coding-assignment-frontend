import { useEffect, useState } from "react";
import axios from "axios";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newGroceryItem, setNewGroceryItem] = useState({ name: "", quantity: 0, status: "" });
  const [editGroceryItem, setEditGroceryItem] = useState(null);

  // useEffect to fetch init data
  useEffect(() => {
    fetchData();
  }, []);

  //fnc to get data from BE
  const fetchData = async () => {
    try {
      const response = await axios.get('http://0.0.0.0:8000/groceries/');
      setGroceryItems(response.data);
    } catch (error) {
      console.error('Error getting grocery list', error);
    }
  };

  // Fnc to handle creating a new grocery list item
  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:8000/groceries/', newGroceryItem);
      setGroceryItems([...groceryItems, response.data]);
      setNewGroceryItem({name: '', quantity: 0, status: 'To Buy' });
    } catch (error) {
      console.error('Error adding to grocery list', error);
    }
  };

  //Fnc to handle updating a grocery item
  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/groceries/${editGroceryItem.id}`,
        editGroceryItem
      );
      setGroceryItems(groceryItems.map((item) => (item.id === editGroceryItem.id ? response.data : item)));
      setEditGroceryItem(null);
    } catch (error) {
      console.error('Error editing grocery item', error);
    }
  };

  //Fnc to handle deleting a grocery item
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/groceries/${id}`
      );
      setGroceryItems(groceryItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting grocery item', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Grocery List</h1>

      {/* Create a new grocery item form */}
      <div className="row mb-4">
        <div className="col md-6">
          <div className="card">
            <div className='card-body'>
              <h5 className="card-title">Add Item to List</h5>
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newGroceryItem.name}
                    onChange={(e) => setNewGroceryItem({...newGroceryItem, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newGroceryItem.quantity}
                    onChange={(e) => setNewGroceryItem({...newGroceryItem, quantity: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" onChange={(e) => setNewGroceryItem({...newGroceryItem, status: e.target.value})}>
                  <option value=""></option>
                    <option value="To Buy">To Buy</option>
                    <option value="Purchased">Purchased</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleCreate}>
                  Add to Grocery List
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Grocery List */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Grocery List</h5>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            {groceryItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm mr-2"
                    onClick={() => setEditGroceryItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Edit Grocery Item Form */}
      {editGroceryItem && (
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
            <div className='card-body'>
              <h5 className="card-title">Add Item to List</h5>
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editGroceryItem.name}
                    onChange={(e) => setEditGroceryItem({...editGroceryItem, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editGroceryItem.quantity}
                    onChange={(e) => setEditGroceryItem({...editGroceryItem, quantity: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" onChange={(e) => setEditGroceryItem({...editGroceryItem, status: e.target.value})}>
                    <option value="To Buy">To Buy</option>
                    <option value="Purchased">Purchased</option>
                  </select>
                </div>
                <button type="button" className="btn btn-success" onClick={handleUpdate}>
                  Update Item
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={() => setEditGroceryItem(null)}
                >
                  Cancel
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroceryList;