import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { Section } from "components/Section";

const Article = () => {
    return (
        <>
            <Section>
                <p>12 de março de 2032</p>
                <h1>
                    [Heading 1]: Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Quo voluptatibus nemo, dolore, fuga dolor
                </h1>
                <p>Frontend</p>
            </Section>
            <h2>Heading 2</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatibus nemo, dolore, fuga dolor, harum repellendus
                mollitia magnam eum hic atque illum molestias libero sed.
                Explicabo omnis autem soluta labore?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatibus nemo, dolore, fuga dolor, harum repellendus
                mollitia magnam eum hic atque illum molestias libero sed.
                Explicabo omnis autem soluta labore?
            </p>
            <h2>Heading 2</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatibus nemo, dolore, fuga dolor, harum repellendus
                mollitia magnam eum hic atque illum molestias libero sed.
                Explicabo omnis autem soluta labore?
            </p>
            <h2>Heading 3</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatibus nemo, dolore, fuga dolor, harum repellendus
                mollitia magnam eum hic atque illum molestias libero sed.
                Explicabo omnis autem soluta labore?
            </p>
            <Button icon={<ArrowLeft size={16} />} iconPosition="left">
                Voltar para todos os artigos
            </Button>
        </>
    );
};

export default Article;
