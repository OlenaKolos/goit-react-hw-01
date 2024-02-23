//import clsx from "clsx";
import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ item }) => {
  return (
    <>
      <tr className={css.bodyTr}>
        <td className={(css.bodyTd, css.bodyTdType)}>{item.type}</td>
        <td className={css.bodyTd}>{item.amount}</td>
        <td className={css.bodyTd}>{item.currency}</td>
      </tr>
    </>
  );
};

export default TransactionHistoryItem;
