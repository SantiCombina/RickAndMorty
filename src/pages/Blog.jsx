import { posts } from "../mockups/mockupBlog";

export const Blog = () => {
  return (
    <>
      <header className="bg-slate-900 text-white font-bold h-20 flex justify-center items-center">
        <h1 id="titulo">BLOG DE SANTIAGO</h1>
      </header>
      <section className="flex flex-col">
        {posts.map(({ id, title, description, img, text }) => (
          <article key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={img} width="400px" />
            <p>{text}</p>
          </article>
        ))}
      </section>
      <footer>
        <a href="#titulo">Ir al comienzo</a>
        <a href="mailto:santicombina@gmail.com">Contactáctame acá</a>
        <p>Copyright 2023</p>
      </footer>
    </>
  );
};
