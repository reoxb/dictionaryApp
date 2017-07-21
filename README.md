# Diccionario

Diccionario de expresiones idiomaticas en todos los idiomas(extensible a todos los idiomas).
Una herramienta para el aprendizaje de idiomas de modo inmersivo.

¿Que es una expresion idiomatica?

Oraciones y frases cuya traduccion literal esta fuera del contexto de las palabras.
Las expresiones idiomáticas son pertinentes a cada lengua, dialecto o estilo de habla característico de una persona. El significado que se entiende de una expresión completa no concuerda con la definición de las palabras individuales. Por ejemplo, la expresión "kick the bucket" (patear el bote) significa morir, no realmente pegarle una patada a una cubeta.

¿Porque es necesario?

Las palabras individuales, dentro de las frases, no se correlacionan con su significado. Cada idioma tiene frases idiomáticas especiales, haciendo que las traducciones sean difíciles para los que no son nativos. Los idiomas pueden cambiar dentro de una misma lengua, entre países o en regiones dentro del mismo país. Aprender expresiones idiomáticas de otro idioma puede ser una guía para comprender el humor y el carácter de esa cultura.

Todos los lenguajes cuentan con expresiones idiomaticas.

## Requerimientos

Crear una aplicacion completa en Node, con express, logeo y base de datos.
(Practicamente crear un API, para expresiones idiomaticas primero en ingles pero extensible a todos lo idiomas)

Pensar en extender la misma aplicion para react y reac-native.
-> Entonces planificar la estructura del backend.

### View

Los usuarios entran al sistema y agregan una expresion idiomatica(EI) que hayan aprendidio.
Cada usuario cuenta con un perfil propio donde puede agregar EI.
Dicha EI se guarda en una base de datos(NoSQL) en el perfil de usuario.

El usuario debe ver sus expresiones idiomaticas en linea y offline.
Dependiendo el contexto(tema) de la EI sugerir nuevas EI's de otros usuarios.

Se debe agregar, modificar o eliminar una EI actualizando la BD.

Cada expression idiomatica se puede rankear por nivel de utilidad y se debe indicar el significado en el lenguaje que fue definida y si es posible en diferentes lenguajes(apartir del ingles);

Los logeos a la cuenta deben ser por redes sociales(facebook, twitter, google)
Logeo por redes sociales, posibilidad de compartir.

Model:

Guardar en formato JSON

```javascript
{
  expression: '',
  meanings: {
    es: '',
    en: '',
    fr: '',
    ru: ''
  }
}
```

Mostrar las expresiones idiomaticas guardadas por usuario y mostrar nuevas expresiones de otros usuarios para agregarlas a la lista de propias.











