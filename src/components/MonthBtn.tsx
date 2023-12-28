import "./MonthBtn.css";
import { useData } from "../context/DataContext";

function nameMonth(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

const MonthBtn = ({ n }: { n: number }) => {
  const { setStartDate, setEndDate } = useData();

  function setMonth({ n }: { n: number }) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStartDate(formatDate(firstDay));
    setEndDate(formatDate(lastDay));
  }

  return <button onClick={() => setMonth({ n })}>{nameMonth(n)}</button>;
};

export default MonthBtn;
