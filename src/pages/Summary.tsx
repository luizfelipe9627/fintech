import "./Summary.css";
import { useData } from "../context/DataContext";
import Loading from "../components/Loading";
import SalesChart from "../components/SalesChart";

const Summary = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>

        <div className="box">
          <h2>Recebidos</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>
      </div>

      <div className="box mb">
        <SalesChart data={data} />
      </div>
    </section>
  );
};

export default Summary;
