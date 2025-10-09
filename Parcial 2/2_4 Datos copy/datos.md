# Tipos de Datos de Javascript

| **Tipo de Dato** | **Categoría**                  | **Descripción**                                          | **Ejemplo**                  |
| ---------------- | ------------------------------ | -------------------------------------------------------- | ---------------------------- |
| **String**       | Primitivo                      | Representa cadenas de texto.                             | `"Hola Mundo"`               |
| **Number**       | Primitivo                      | Representa números enteros o decimales.                  | `42`, `3.14`                 |
| **BigInt**       | Primitivo                      | Permite manejar números enteros muy grandes.             | `12345678901234567890n`      |
| **Boolean**      | Primitivo                      | Representa valores lógicos.                              | `true`, `false`              |
| **Undefined**    | Primitivo                      | Variable declarada sin valor asignado.                   | `let x;` → `undefined`       |
| **Null**         | Primitivo                      | Representa la ausencia intencional de valor.             | `let y = null;`              |
| **Symbol**       | Primitivo                      | Identificador único e inmutable.                         | `Symbol('id')`               |
| **Object**       | No primitivo                   | Colección de pares clave-valor; base de casi todo en JS. | `{nombre: "Gael", edad: 20}` |
| **Array**        | No primitivo (objeto especial) | Lista ordenada de valores.                               | `[1, 2, 3]`                  |
| **Function**     | No primitivo (objeto especial) | Bloque de código reutilizable.                           | `function saludar(){...}`    |
| **Date**         | No primitivo (objeto especial) | Representa fechas y horas.                               | `new Date()`                 |
