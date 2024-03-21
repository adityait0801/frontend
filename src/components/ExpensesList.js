import React, { useEffect, useState } from "react";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:7200/expense/list", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await data.json();
      setExpenses(json.expenses);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDelete = async (expenseId) => {
    try {
      await fetch(`http://localhost:7200/expense/delete/${expenseId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // After successful deletion, fetch updated expenses list
      fetchData();
    } catch (error) {
      console.log("Error deleting expense:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedData = {
        title: updatedTitle,
        amount: updatedAmount,
        description: updatedDescription,
      };

      await fetch(
        `http://localhost:7200/expense/update/${selectedExpense}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      // After successful update, reset state and fetch updated expenses list
      setSelectedExpense(null);
      setUpdatedTitle("");
      setUpdatedAmount("");
      setUpdatedDescription("");
      fetchData();
    } catch (error) {
      console.log("Error updating expense:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Expenses List</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {expenses.map((expense) => (
          <li key={expense._id} className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{expense.title}</h3>
            <p className="text-gray-600 mb-4">Amount: {expense.amount}</p>
            <p className="text-gray-600">{expense.description}</p>
            <div className="mx-20 my-2">
              <button
                onClick={() => handleDelete(expense._id)}
                className="mx-4 bg-red-500 text-white p-2 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedExpense(expense._id)}
                className="mx-4 bg-green-500 text-white p-2 rounded-lg"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Update form */}
      {selectedExpense && (
        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Update Expense</h2>
          <input
            type="text"
            placeholder="Title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="block w-full border border-gray-300 p-2 mb-2 rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(e.target.value)}
            className="block w-full border border-gray-300 p-2 mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="block w-full border border-gray-300 p-2 mb-2 rounded"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
