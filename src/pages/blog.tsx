import { Header } from "@/components/header";
import { GetStaticProps } from 'next';

interface BlogProps {
  posts: Array<{
    id: number;
    title: string;
    content: string;
  }>;
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

// Usando SSG (Static Site Generation)
export const getStaticProps: GetStaticProps = async () => {
  // Simulando dados estáticos - em um projeto real, você buscaria de uma API ou CMS
  const posts = [
    { id: 1, title: "Primeiro Post", content: "Este é o conteúdo do primeiro post..." },
    { id: 2, title: "Segundo Post", content: "Este é o conteúdo do segundo post..." },
    { id: 3, title: "Terceiro Post", content: "Este é o conteúdo do terceiro post..." },
  ];

  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalida a página a cada 60 segundos (ISR - Incremental Static Regeneration)
  };
};
