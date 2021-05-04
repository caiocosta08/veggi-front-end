export function formatarCampo(campoTexto: string) {
  if (campoTexto.length <= 11) {
      campoTexto = mascaraCpf(campoTexto);
  } else {
      campoTexto = mascaraCnpj(campoTexto);
  }
  return campoTexto
}

export function retirarFormatacao(campoTexto: string) {
  campoTexto = campoTexto.replace(/(\.|\/|\-)/g,"");
}

function mascaraCpf(valor: string) {
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

function mascaraCnpj(valor: string) {
  return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}