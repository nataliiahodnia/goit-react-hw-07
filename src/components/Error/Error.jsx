import { TbFaceIdError } from "react-icons/tb";
import css from "../Error/Error.module.css";
export default function Error({ children }) {
  return (
    <div className={css.errorCont}>
      <TbFaceIdError size={220} color={"#ff2e89"} />
      <p className={css.error}>{children}</p>
    </div>
  );
}
