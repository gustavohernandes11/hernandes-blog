import { screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { PostTitle } from "./index";

describe("<PostTitle />", () => {
    it("should render the PostTitle component", () => {
        customRender(<PostTitle>PostTitle text</PostTitle>);
        const element = screen.getByRole("heading", {
            name: /posttitle text/i,
        });
        expect(element).toMatchInlineSnapshot(`
            <h2
              class="styles__Element-sc-u7ax8g-0 gkxVbB"
            >
              PostTitle text
            </h2>
        `);
    });
});
