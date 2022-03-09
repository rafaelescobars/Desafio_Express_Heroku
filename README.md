1. Prerequsitos:

    1.1. Tener cuenta Heroku.
    1.2. Tener instalado Git Bash.
    1.3. Tener instalado DBeaver.
    1.4. Tener instalado Heroku CLI.

2. Ingresar a cuenta de Heroku.

3. Crear Nueva App:

    3.1. Dar click en Create new app.

4. Elegir un nombre para la app.

    4.1. Se recomienda: desafio-express-heroku .

5. Crear Base de Datos en Heroku.

  5.1. Dar click en lo nueve puntos con dorma de cuadrado en la esquina superior derecha de la página Heroku.
  5.2. Seleccionar Data
  5.3. En la tarjeta Heroku Postgres clickear: Create one.

  !Advertencia! Si ya se cuenta con una base de datos creada no podra realizar este paso 5. ya que las cuentas gratis de Heroku permiten manter sólo una base de datos. Por lo anterior, se recomienda destruir la base de datos existente (Para esto seguir el paso 5.3.1)

    5.3.1. Seguir los siguientes pasos solo si ya se tiene una base de datos creada.
          Seleccione la base de datos.
    5.3.2. Seleccione Settings.
    5.3.3. Seleccione Destroy Database.
    5.3.4. Volver al paso 5.3 .
  
  6. Clickear: Install Heroku Postgres.

  7. En el input App to provision to, escribir el nombre escogido en el paso 4. (Nombre de la App).

  8. Clickear: Submit Order Form.

  9. Clickear: Heroku Postgres.

  10. Clickear: Settings.

  11. Clickear: View Credentials.
      
      11.1. Mantener abierta esta página.

  12. Abrir el prograba DBeaver.

  13. Seleccionar Base de Datos.

  14. Seleccionar Nueva conexión.

  15. Seleccionar PosgreSQL

  16. Ingresar las credenciales mostradas en la pagina del paso 11.

      16.1. Copiar Host.
      16.2. Copiar Database.
      16.3. Copiar Contraseña.
  
  17. Seleccionar Probar conexión...

      17.1. Seleccionar Ok.

  18. Seleccionar Finalizar.

  19. Click derecho sobre la base datos creada.

  20. Seleccionar Editor SQL.

  21. Seleccionar Nuevo script SQL.

  23. Abrir archivo queries.sql dentro de la raiz del proyecto y copiar su contenido.

  24. Pegar el contenido del arshivo queries.sql dentro del Nuevo script SQL en el programa DBeaver.

  25. Abrir la terminal en el proyecto.

  26. Ejecutar el comando: heroku login.

      ¡Adevertencia! Si recién se instalo Heroku en el PC (Windows) es probable que la terminal no reconozca heroku como un comando, por lo que es necesario que se reinicie el PC (windows) y revisite este paso.
  
  27. Iniciar sesión en Heroku.

  28. Ejecutar el siguiente comando: heroku git:remote -a desafio-express-heroku , siendo desafio-express-heroku el nombre de la aplicación escogido en el paso 4.

      ¡Advertencia! Este paso requiere que el proyecto se encuentre commiteado en GitHub. por lo que si no es de esta manera se recomienda lo siguiente.

      28.1 Si el proyecto aun no se inicia en Git: Abrir la terminal en el proyecto y ejecutar el comando: git init.
      28.2 En Visual Studio Code, seleccionar la pestaña Source Control, que se encuentra en el lado izquiero de la aplicaccón.
      28.3 Seleccionar el simbolo + que representa la pestaña Stage All Changes.
      28.3 Escribir first commit en el imput Message.
      28.4 Seleccionar el símbolo de Ticket que representa la pestaña Commit.
      28.5 Volver a ecutar el comando del paso 28.

  29. Ingresar a la url que indica la terminal, epecificamente la que comienza con el nombre de la aplicación. En este caso de ejemplo sería http://desafio-express-heroku.herokuapp.com