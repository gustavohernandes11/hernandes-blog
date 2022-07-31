import { screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { PostDescription } from "./index";

describe("<PostDescription />", () => {
    it("should render the PostDescription component", () => {
        customRender(<PostDescription>PostDescription text</PostDescription>);
        const element = screen.getByText(/postdescription text/i);
        expect(element).toMatchInlineSnapshot(`
            <p
              class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph css-z2eky3-MuiTypography-root"
            >
              PostDescription text
            </p>
        `);
    });
});
