import { Product } from '../../types/Product';
import { ProductCard } from '../productCard';
import styles from './ProductsList.module.scss';

type Props = {
  phones: Product[];
};

export const ProductsList: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles.wrapper}>
      {phones.map(phone => (
        <ProductCard product={phone} showFullPrice key={phone.id} />
      ))}
    </div>
  );
};
