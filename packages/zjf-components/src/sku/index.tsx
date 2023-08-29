export interface SkuProps {
  skus: string[];
}

const Sku: React.FC<SkuProps> = props => {
  const { skus } = props;
  return (
    <div>
      <p>sku - {JSON.stringify(skus)}</p>
    </div>
  );
};
export default Sku;
