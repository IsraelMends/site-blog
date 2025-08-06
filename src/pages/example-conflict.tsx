import { Header } from "@/components/header";
import { GetStaticProps, GetServerSideProps } from 'next';

interface ExampleProps {
  message: string;
}

export default function ExampleConflict({ message }: ExampleProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold mb-8">Exemplo de Conflito</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

// ❌ ERRO: Não pode usar getStaticProps e getServerSideProps juntos!
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      message: "Dados estáticos gerados no build",
    },
  };
};

// ❌ CONFLITO: Isso causará o erro mencionado
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      message: "Dados renderizados no servidor",
    },
  };
};
