import { useData } from "../context/DataContext";
import SaleItem from "../components/SaleItem";
import Loading from "../components/Loading";

const Sales = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!data) return null;
  
  return (
    <ul>
      {data.map((sale, index) => (
        <li key={index}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
