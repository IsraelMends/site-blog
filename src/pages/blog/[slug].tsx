import { Header } from "@/components/header";
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface PostProps {
  post: Post;
}

export default function BlogPost({ post }: PostProps) {
  const router = useRouter();

  // Se a página ainda está sendo gerada, mostra um loading
  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-6">
            Por {post.author} • {post.date}
          </div>
          <div className="prose prose-lg">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </>
  );
}

// Definindo quais caminhos devem ser pré-renderizados
export const getStaticPaths: GetStaticPaths = async () => {
  // Em um projeto real, você buscaria os IDs dos posts de uma API
  const paths = [
    { params: { slug: '1' } },
    { params: { slug: '2' } },
    { params: { slug: '3' } },
  ];

  return {
    paths,
    fallback: 'blocking', // ou false se você quiser 404 para paths não definidos
  };
};

// Gerando dados estáticos para cada página
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  // Simulando busca de dados - em um projeto real, você buscaria de uma API
  const posts: Record<string, Post> = {
    '1': {
      id: '1',
      title: 'Introdução ao Next.js',
      content: 'Next.js é um framework React que permite renderização do lado do servidor e geração de sites estáticos...',
      author: 'João Silva',
      date: '6 de agosto de 2025'
    },
    '2': {
      id: '2',
      title: 'SSG vs SSR no Next.js',
      content: 'Entenda as diferenças entre Static Site Generation (SSG) e Server-Side Rendering (SSR)...',
      author: 'Maria Santos',
      date: '5 de agosto de 2025'
    },
    '3': {
      id: '3',
      title: 'Otimização de Performance',
      content: 'Dicas para otimizar a performance do seu site Next.js usando técnicas de SSG...',
      author: 'Pedro Costa',
      date: '4 de agosto de 2025'
    }
  };

  const post = posts[slug];

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 3600, // Revalida a cada hora
  };
};
