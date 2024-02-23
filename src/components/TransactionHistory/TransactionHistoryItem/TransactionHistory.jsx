import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={clsx(css.table)}>
      <thead className={clsx(css.tableHead)}>
        <tr>
          <th className={clsx(css.headTh)}>Type</th>
          <th className={clsx(css.headTh)}>Amount</th>
          <th className={clsx(css.headTh)}>Currency</th>
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
