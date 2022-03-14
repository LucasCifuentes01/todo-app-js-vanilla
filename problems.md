# Problemas encontrados

## Checkbox y addEventListener

Al checkbox no se le estaba agregando el addEventListener y el motivo era como estaba añadinendo este nodo dentro del ' li '. Estaba usando:
li.appendCilh(checkbox)
li.innerHTML += text
li.appendChild(Button)

y solo se le estaba agregando al boton.
