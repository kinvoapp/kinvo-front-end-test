import { Due } from "./due";
import { FixedIncome } from "./fixedIncome";
import { Position } from "./position";

type SnapshotByProduct = {
  due: Due;
  fixedIncome: FixedIncome;
  position: Position;
};

export default SnapshotByProduct;
