# Arquitectura de una aplicación Web  

Actualmente la web forma parte de una de las cosas mas importantes del internet y para poder diseñar las aplicaciones web con un alto rendimiento y personalización existe la arquitectura de las aplicaciones web. Estas buscan definir como se estructuran los distintos componentes de una aplicación basada en web.  
  
Existen dos enfoques en estas, y son de acuerdo a el como se comunican las partes que componen la app y de acuerdo a como se organiza el código de la app. A continuación veremos las más comunes de estas.

![Aplicaciones web](https://kinsta.com/es/wp-content/uploads/sites/8/2022/10/arquitectura-aplicaciones-web.png)

## De acuerdo a como se comunican las partes que componen la app

### Cliente-Servidor
Es una de las más usadas actualmente y se llama así debido a que en esta participan dos componentes. El cliente que utiliza los servicios y el servidor, que proporciona los servicios. Ya con estos se establece una conexión de red, que casi siempre es de internet.  
  
En esta existen los términos backend y frontend, en los cuales backend es la parte que maneja el servidor y frontend es la parte que ejecuta el cliente

### Punto a punto
En esta generalmente hay dos dispositivos, los cuales se conectan entre si y al establecerse la conexión, ambos actuarán como Cliente-Servidor, pudiendose compartir datos u otras cosas.  

Cada dispositivo es capaz de convertirse en receptor o emisor, son relativamente fáciles de operar, pero cuando se empieza a expandir la red se puede volver a hacer díficil de manejar, esto por la coordinación y la operación de estos.

## De acuerdo a como se organiza el código de la app

### Monolito
Este consiste en crear la aplicación que posea todas sus funciones de forma autosuficiente en una misma unidad. Todo esto sin depender de dependencias externas que le ayuden a cumplir su funcionalidad.

Además, todos los componentes trabajan de manera conjunta, compartiendo sus recursos y memoria. Está era muy usada en los inicios pero a lo largo del tiempo se desarrollaron arquitectuas más eficientes y eficaces.

### Capas
La arquitectura de capas es muy utilizada actualmetne, esto debido a que es la opcíón por defecto cuando no sabemos que tipo de arquitectura usar.  

Esta consta en dividir en capas, como su nombre lo indica, esto con el objetivo de que cada cumpla con cierto rol definido, estas pueden ser por ejemplo la UI, servicios, DAO, etc. Lo que busca esta no es definir cuantas capas debe tener la aplicación, si no el como ir dividiendo la aplicación en distintas capas de acuerdo a su rol.  



### Microservicios
Como su nombre lo indica, esta consiste en que la aplicación esta formada por distintos servicios pequeños, estos se van implementando de forma independiente y van evolucionando paulatinamente.  

Como se dijo antes, cada uno de los servicios es independiente y deben implementar una funcionlidad de negocio individual dentro de un contexto delimitado. Una de las características de esta arquitectura es que puede ser mantenida por un grupo pequeño de desarrolladores.

### Serverless
Básicamente en esta no existe un servidor de por medio, y es muy útil ya que al no requerir de un servidor es posible ejecutar aplicaciones con gran rapidez y un menor costo, ya que no es necesario mantener activo un servidor todo el tiempo.

Es muy útil cuando sabemos que nuestra aplicación no estará haciendo constantemente consultas, ya que las peticiones se mantienen al margen de la actividad, por lo que se pueden ahorrar muchos recursos.


## Referencias  
[Arquitectura de una aplicación web](https://kinsta.com/es/blog/arquitectura-aplicaciones-web/)

[Cliente-Servidor](https://www.arsys.es/blog/todo-sobre-la-arquitectura-cliente-servidor)

[Punto a punto](https://es.wikipedia.org/wiki/Red_punto_a_punto)

[Monolito](https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/monolitico)

[Capas](https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/capas)

[Microservicios](https://learn.microsoft.com/es-es/azure/architecture/guide/architecture-styles/microservices)

[Serverless](https://openwebinars.net/blog/que-es-serverless-ventajas-y-servicios/)