import ProductStore from './productStore';
import OrderStore from './orderStore';

class RootStore {
  productStore = new ProductStore(this);
  orderStore = new OrderStore(this);
}

export default new RootStore();
