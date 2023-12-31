import styles from "./styles.module.scss";

const Input = ({
  formId,
  id,
  type,
  label,
  required,
  value,
  name,
  setValue,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label form={formId} htmlFor={id}>
        {label}
      </label>
      <input
        form={formId}
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
