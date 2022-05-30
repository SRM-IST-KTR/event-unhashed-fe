const Input = (props) => {
  switch (props.type) {
    case "text":
    case "email":
    case "date":
    case "number":
    case "password":
    case "textarea": {
      return (
        <div className={props.classNames?.wrapper ?? ""}>
          {props.label && (
            <label htmlFor={props.id} className={props.classNames?.label ?? ""}>
              {props.label}
              {props.required && <span> *</span>}
            </label>
          )}
          {props.type === "textarea" ? (
            <input
              {...props}
              component="textarea"
              className={props.classNames?.input ?? ""}
            />
          ) : (
            <input {...props} className={props.classNames?.input ?? ""} />
          )}

          {props.description && (
            <p className={props.classNames?.description ?? ""}>
              {props.description}
            </p>
          )}
        </div>
      );
    }

    case "select": {
      return (
        <div className={props.classNames?.wrapper}>
          {props.label && (
            <label htmlFor={props.id} className={props.classNames.label ?? ""}>
              {props.label}
              {props.required && <span> *</span>}
            </label>
          )}
          <input
            {...props}
            as="select"
            className={props.classNames?.input ?? ""}
          >
            <option className={props.classNames?.option ?? ""} value="">
              {props.placeholder ?? "Select"}
            </option>
            {props.choices?.map((choice) => (
              <option
                key={choice.value.trim()}
                className={props.classNames?.option ?? ""}
                value={choice.value}
              >
                {choice.text}
              </option>
            ))}
          </input>

          {props.description && (
            <p className={props.classNames?.description ?? ""}>
              {props.description}
            </p>
          )}
        </div>
      );
    }

    case "radio":
    case "checkbox": {
      return (
        <div className={props.classNames?.wrapper ?? ""} role="group">
          {props.choices.map((choice) => (
            <label
              htmlFor={`${props.name}.${choice.value}`}
              className={props.classNames?.label ?? ""}
            >
              <input
                {...props}
                id={`${props.name}.${choice.value}`}
                placeholder={props.placeholder ?? ""}
                value={choice.value}
                className={props.classNames?.option ?? ""}
              />
              <div className="inline-block">{choice.text} </div>
            </label>
          ))}

          {props.description && (
            <p className={props.classNames?.description ?? ""}>
              {props.description}
            </p>
          )}
        </div>
      );
    }

    default: {
      return <></>;
    }
  }
};

export default Input;
