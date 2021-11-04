import { BlogPost} from "./tarea/Tarea1.js";
// import { MatchNombre } from "./tarea/Tarea2.js";
// import { PasswordInput } from './tarea/Tarea2.js'
// import {ValidationInput} from './tarea/Tarea2.js';

ReactDOM.render(
  <BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.\n
    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\n
    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
    nombre: "Diego",
    titulo: "Ingeniero",
    imagen: "https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg"
    }}
  />,
  document.getElementById('react-app')
);

// ReactDOM.render(
//   <MatchNombre
//   minLength={2}
//   type='password'
//   />,
//   document.getElementById('react-app')
// )

// ReactDOM.render(
//   <PasswordInput
//   minLength={4}
//   type='password'
//   />,
//   document.getElementById('react-app')
// )

// ReactDOM.render(
//   <ValidationInput
//   validation={ (value) => !value.match(" ") }
//   />,
//   document.getElementById('react-app')
// )