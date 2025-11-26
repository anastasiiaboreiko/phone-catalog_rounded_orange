import styles from './AddToCartButton.module.scss';

export const AddToCart = () => {
  return (
    <button className={`button-text ${styles.button}`}>Add to cart</button>
  );
};
