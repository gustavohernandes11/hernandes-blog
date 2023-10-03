import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { Title } from "components/Title";

const Error = () => {
    return (
        <>
            <Title>Erro 404: não encontrado</Title>
            <p>
                Algo de errado não está certo. Recarregue a página ou tente mais
                tarde.
            </p>
            <Button href="/" icon={<ArrowLeft size={16} />} iconPosition="left">
                Voltar para todos os artigos
            </Button>
        </>
    );
};

export default Error;
