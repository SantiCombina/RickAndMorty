export const Home = () => {
  return (
    <>
      <table style={{ width: "500px" }}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hola beets</td>
            <td>Gratis</td>
          </tr>
          <tr>
            <td>chanchito feliz</td>
            <td>$20.00</td>
          </tr>
          <tr>
            <td>chanchito muy feliz</td>
            <td>$29.00</td>
          </tr>
          <tr>
            <td></td>
            <td>Total: $49.00</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
      </ul>

      <ol>
        <li value="50">Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
        <li>
          <ol>
            <li style={{ listStyleType: "lower-roman" }}>sub elemento 1</li>
            <li style={{ listStyleType: "lower-roman" }}>sub elemento 2</li>
            <li style={{ listStyleType: "lower-roman" }}>sub elemento 3</li>
          </ol>
        </li>
      </ol>

      <form action="/formulario" method="post">
        <label htmlFor="nombre">Nombre</label>
        <input
          defaultValue="Chanchito"
          type="text"
          id="nombre"
          name="Nombre"
          placeholder="Chanchito feliz"
        />
        <br />
        <br />
        <label htmlFor="apellido">Apellido </label>
        <input
          defaultValue="Feliz"
          type="text"
          id="apellido"
          name="Apellido"
          placeholder="Chanchito triste"
        />
        <br />
        <br />
        <label htmlFor="comentario">Comentario</label>
        <br />
        <textarea
          defaultValue="este es un valor por defecto"
          cols="50"
          rows="10"
          id="comentario"
          placeholder="Ingrese comentario"
          name="Comentario"
        ></textarea>
        <br />
        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
        <button type="button">Boton</button>
      </form>

      <h1>my firts heading</h1>
      <h2>my second heading</h2>
      <h3>my third heading</h3>
      <h4>my four heading</h4>
      <h5>my fifth heading</h5>
      <h6>my sixth heading</h6>
      <p>chanchito feliz esta muy feliz.</p>
      <p>chanchito triste esta triste.</p>
      <hr />
      <h2>chanchito Felipe</h2>
      <p>
        chanchito es re trolo y{" "}
        <span style={{ color: "blue" }}>este texto</span>
        es para mostrar la etiqueta de span
        <br />
        jaaajaja que locura no
      </p>

      <a target="_blank" href="https://www.google.com">
        Ir a Google
      </a>
      <br />
      <img src="./assets/image.png" height="500" />
    </>
  );
};
