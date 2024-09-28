const message = "Tu tá sabendo mexer no terminal agora";

function conversar(name) {
  return `olá ${name}, tudo bem vey?`;
}

function sendMessage(message) {
  return `${message}, tá ligado?`;
}

console.log(`${conversar("Sammy")} ,${sendMessage(message)}`);
