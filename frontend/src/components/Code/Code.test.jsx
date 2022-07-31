import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { customRender } from "../../utils/test-utils";
import { Code } from "./index";

describe("<Code />", () => {
    it("should render the component <Code />", () => {
        const { container } = customRender(<Code>Texto para teste</Code>);

        expect(container).toMatchSnapshot();
    });
    it("should render the content in the screen", () => {
        customRender(<Code>Texto para teste</Code>);

        const text = screen.getByText(/texto para teste/i);
        expect(text).toBeInTheDocument();
    });
    describe('<IconButton aria-label="copy-button" />', () => {
        let codeContainer = null;
        beforeAll(() => {
            customRender(<Code>Texto para teste</Code>);
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
        it('should copy the correct content of the code container', () => {
            // to do
        });
        
    });
});
