import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { BlockQuote } from "./index";

describe("<BlockQuote />", () => {
    it("should render the BlockQuote component", () => {
        customRender(<BlockQuote>Texto para teste</BlockQuote>);
        const blockquote = screen.getByText(/Texto para teste/i);
        expect(blockquote).toBeInTheDocument();
    });
});
