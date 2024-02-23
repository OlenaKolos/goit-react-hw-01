//import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.headTh}>Type</th>
          <th className={css.headTh}>Amount</th>
          <th className={css.headTh}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionHistoryItem key={transaction.id} item={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
