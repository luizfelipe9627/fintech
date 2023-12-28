import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const Sale = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch<ISaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <div>
      <div>
        <div className="box mb">ID: {data.id}</div>
        <div className="box mb">Nome: {data.nome}</div>
        <div className="box mb">
          Preço:{" "}
          {data.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <div className="box mb">Status: {data.status}</div>
        <div className="box mb">Pagamento: {data.pagamento}</div>
      </div>
    </div>
  );
};

export default Sale;
