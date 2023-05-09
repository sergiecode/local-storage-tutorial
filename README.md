![Tutorial de como usar localStorage con Javascript imagen 1](https://raw.githubusercontent.com/sergiecode/local-storage-tutorial/master/local-storage-tutorial%20%281%29.jpg)
![Tutorial de como usar localStorage con Javascript imagen 2](https://raw.githubusercontent.com/sergiecode/local-storage-tutorial/master/local-storage-tutorial%20%282%29.jpg)
![Tutorial de como usar localStorage con Javascript imagen 3](https://raw.githubusercontent.com/sergiecode/local-storage-tutorial/master/local-storage-tutorial%20%283%29.jpg)
![Tutorial de como usar localStorage con Javascript imagen 4](https://raw.githubusercontent.com/sergiecode/local-storage-tutorial/master/local-storage-tutorial%20%284%29.jpg)
![Tutorial de como usar localStorage con Javascript imagen 5](https://raw.githubusercontent.com/sergiecode/local-storage-tutorial/master/local-storage-tutorial%20%285%29.jpg)
![Tutorial de como usar localStorage con Javascript imagen 6](https://raw.githubusercontent.com/sergiecode/local-storage-tutorial/master/local-storage-tutorial%20%286%29.jpg)


# Tutorial: Manipulación del LocalStorage con JavaScript

Este tutorial explicará cómo agregar, modificar, eliminar y editar información en el LocalStorage utilizando JavaScript.

## ¿Qué es LocalStorage?

LocalStorage es una característica de los navegadores web modernos que permite a los desarrolladores almacenar datos en el navegador del usuario de forma persistente. Los datos almacenados en LocalStorage se mantienen incluso después de que el usuario cierre el navegador o apague su dispositivo.

## ¿Cómo utilizar LocalStorage en JavaScript?

### Agregar información al LocalStorage

Para agregar información al LocalStorage, se utiliza la función `setItem(key, value)`, donde `key` es la clave que se utilizará para identificar los datos y `value` es el valor que se desea almacenar. Por ejemplo:

    `localStorage.setItem('nombre', 'Juan');` 

### Obtener información del LocalStorage

Para obtener información del LocalStorage, se utiliza la función `getItem(key)`, donde `key` es la clave que se utilizó para almacenar los datos. Por ejemplo:

    `const nombre = localStorage.getItem('nombre');
    console.log(nombre); // "Juan"`

 

### Modificar información en el LocalStorage

Para modificar información en el LocalStorage, se utiliza la función `setItem(key, value)` con la misma clave utilizada para agregar los datos previamente. Por ejemplo:

    `localStorage.setItem('nombre', 'María');` 

### Eliminar información del LocalStorage

Para eliminar información del LocalStorage, se utiliza la función `removeItem(key)`, donde `key` es la clave que se utilizó para almacenar los datos. Por ejemplo:

    `localStorage.removeItem('nombre');` 

## Conclusión

Con este tutorial, ahora sabes cómo agregar, modificar, eliminar y editar información en el LocalStorage utilizando JavaScript. Espero que esta información te sea útil en tus proyectos. ¡Buena suerte!
