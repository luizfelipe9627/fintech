import "./SaleItem.css";
import { NavLink } from "react-router-dom";

const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="saleItem box">
      <NavLink to={`/sales/${sale.id}`}>{sale.id}</NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
