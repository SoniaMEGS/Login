const email = {
  required: "Este campo es requerido.",
  pattern: {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Ingrese una direccion de correo valida.",
  },
};

const password = {
  required: "Este campo es requerido.",
  minLength: {
    value: 8,
    message: "Este campo debe tener al menos 8 caracteres.",
  },
  maxLength: {
    value: 20,
    message: "Este campo no debe tener mas de 20 caracteres.",
  },
};

const name = {
  required: "Este campo es requerido.",
  minLength: {
    value: 3,
    message: "Este campo debe tener al menos 3 caracteres.",
  },
  maxLength: {
    value: 15,
    message: "Este campo no debe tener mas de 15 caracteres.",
  },
};

const lastName = {
  required: "Este campo es requerido.",
  minLength: {
    value: 3,
    message: "Este campo debe tener al menos 3 caracteres.",
  },
  maxLength: {
    value: 15,
    message: "Este campo no debe tener mas de 15 caracteres.",
  },
};

const country = {
  required: "Este campo es requerido.",
  minLength: {
    value: 3,
    message: "Este campo debe tener al menos 3 caracteres.",
  },
  maxLength: {
    value: 15,
    message: "Este campo no debe tener mas de 15 caracteres.",
  },
};

export const RegisterFormValidations = {
  password,
  email,
  name,
  lastName,
  country,
};
