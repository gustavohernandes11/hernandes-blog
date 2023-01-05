import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { customRender } from "../../utils/test-utils";
import { CodeContainer } from "./index";

describe("<CodeContainer />", () => {
    it("should render the component <CodeContainer />", () => {
        const { container } = customRender(
            <CodeContainer>Texto para teste</CodeContainer>
        );

        expect(container).toMatchSnapshot();
    });
    it("should render the content in the screen", () => {
        customRender(<CodeContainer>Texto para teste</CodeContainer>);

        const text = screen.getByText(/texto para teste/i);
        expect(text).toBeInTheDocument();
    });
    describe('<IconButton aria-label="copy-button" />', () => {
        let codeContainer = null;
        beforeAll(() => {
            customRender(<CodeContainer>Texto para teste</CodeContainer>);
            codeContainer = screen.getByText(/texto para teste/i);
        });
        it("should render the copy-button on mouseover event", () => {
            fireEvent.mouseOver(codeContainer);
            const copyButton = screen.getByLabelText("copy-code-button");
            expect(copyButton).toBeInTheDocument();
        });
        it("should not render the copy-button on mouseleave event", () => {
            fireEvent.mouseOver(codeContainer);
            const copyButton = screen.queryByAltText("copy-code-button");
            fireEvent.mouseLeave(codeContainer);
            expect(copyButton).not.toBeInTheDocument();
        });
    });
});
