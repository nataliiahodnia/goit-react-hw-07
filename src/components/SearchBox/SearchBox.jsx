import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectName);

  return (
    <div className={css.container}>
      <div className={css.animatedText}>
        <p className={css.label}>
          <span>F</span>
          <span>i</span>
          <span>n</span>
          <span>d</span>
          <span>&nbsp;</span>
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
          <span>&nbsp;</span>
          <span>b</span>
          <span>y</span>
          <span>&nbsp;</span>
          <span>n</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
        </p>
      </div>
      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
      />
    </div>
  );
}
