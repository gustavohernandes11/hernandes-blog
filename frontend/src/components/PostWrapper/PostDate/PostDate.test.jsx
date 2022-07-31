import { screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { PostDate } from "./index";

describe("<PostDate />", () => {
    it("should render the PostDate component", () => {
        customRender(<PostDate>PostDate text</PostDate>);

        const element = screen.getByText(/postdate text/i);
        expect(element).toMatchInlineSnapshot(`
            <div
              class="styles__Container-sc-oyvtd5-0 cCcIjS"
            >
              PostDate text
            </div>
        `);
    });
});
