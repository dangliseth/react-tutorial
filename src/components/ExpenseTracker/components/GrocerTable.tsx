interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function GrocerTable({ expenses, onDelete }: Props) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.description}</td>
              <td>{e.amount}</td>
              <td>{e.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(e.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              PHP{" "}
              {expenses.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default GrocerTable;
