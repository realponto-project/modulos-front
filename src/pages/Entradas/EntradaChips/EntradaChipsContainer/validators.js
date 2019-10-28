export const masks = (nome, valor) => {
  switch (nome) {
    case "number":
      return {
        nome,
        valor: valor.replace(/\D/gi, "")
      };
    case "ip":
      return {
        nome,
        valor: valor.replace(/\D/gi, "")
      };
    default:
      return {
        nome,
        valor
      };
  }
};

export const validators = (nome, valor, state, id) => {
  const { fieldFalha, message } = state;

  if (nome === "number") {
    if (valor === "") {
      message[id].number = "Número incompleto.";
      fieldFalha[id].number = true;
    } else {
      fieldFalha[id].number = false;
      message[id].number = "";
    }

    return {
      fieldFalha,
      message
    };
  } else if (nome === "ip") {
    if (valor === "") {
      message[id].ip = "Número incompleto.";
      fieldFalha[id].ip = true;
    } else {
      fieldFalha[id].ip = false;
      message[id].ip = "";
    }
    return {
      fieldFalha,
      message
    };
  } else if (nome === "zipCode") {
    if (valor === "") {
      message.zipCode = "É obrigatório.";
      fieldFalha.zipCode = true;
    } else fieldFalha.zipCode = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "nameContact") {
    if (valor === "") {
      message.nameContact = "É obrigatório.";
      fieldFalha.nameContact = true;
    } else fieldFalha.nameContact = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "email") {
    if (valor === "") {
      message.email = "É obrigatório.";
      fieldFalha.email = true;
    } else fieldFalha.email = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "telphone") {
    if (valor === "") {
      message.telphone = "É obrigatório.";
      fieldFalha.telphone = true;
    } else fieldFalha.telphone = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "state") {
    if (valor === "") {
      message.state = "É obrigatório.";
      fieldFalha.state = true;
    } else fieldFalha.state = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "city") {
    if (valor === "") {
      message.city = "É obrigatório.";
      fieldFalha.city = true;
    } else fieldFalha.city = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "neighborhood") {
    if (valor === "") {
      message.neighborhood = "É obrigatório.";
      fieldFalha.neighborhood = true;
    } else fieldFalha.neighborhood = false;

    return {
      fieldFalha,
      message
    };
  } else if (nome === "street") {
    if (valor === "") {
      message.street = "É obrigatório.";
      fieldFalha.street = true;
    } else fieldFalha.street = false;

    return {
      fieldFalha,
      message
    };
  }
};
