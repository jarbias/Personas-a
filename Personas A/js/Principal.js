/*Sea el nombre y el sexo de varias personas (F-M). 
Se necesita un programa que lea estos datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo;
 la salida requerida presenta el siguiente formato*/

 import Persona from './Persona.js';
 import Datos from './Datos.js';

 let persona = new Persona();
 let datos = new Datos('Luisa', 'F');
 let datos2 = new Datos('Ana', 'F');
 let datos3 = new Datos('Jose', 'M');
 let datos4 = new Datos('Carmen', 'F');
 let datos5 = new Datos('Rosa', 'F');
 let datos6 = new Datos('Jose', 'M');
 let datos7 = new Datos('Maria', 'F');
 let datos8 = new Datos('Luz', 'F');
 let datos9 = new Datos('Rafael', 'M');
 let datos10 = new Datos('Liz', 'F');
 let datos11 = new Datos('Marcos', 'M');
 let datos12 = new Datos('Leo', 'M');

 persona.procesarDatos(datos);
 persona.procesarDatos(datos2);
 persona.procesarDatos(datos3);
 persona.procesarDatos(datos4);
 persona.procesarDatos(datos5);
 persona.procesarDatos(datos6);
 persona.procesarDatos(datos7);
 persona.procesarDatos(datos8);
 persona.procesarDatos(datos9);
 persona.procesarDatos(datos10);
 persona.procesarDatos(datos11);
 persona.procesarDatos(datos12);

 let salida = document.getElementById('salida');
 salida.innerHTML += "datos obtenidos:" + "<br>";
 salida.innerHTML += "El porcentaje de mujeres procesadas es: " + persona.porcM() + "%" + "<br>";
 salida.innerHTML += "La cantidad de hombres es: " + persona.sexoMayorAsis() + "<br>";

