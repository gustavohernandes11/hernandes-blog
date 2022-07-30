import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Footer } from "./index";

describe("<Footer />", () => {
    it("should render the Footer component", () => {
        customRender(<Footer />);
        const footer = screen.getByRole("contentinfo", { name: /footer/i });
        expect(footer).toMatchInlineSnapshot(`
            <footer
              aria-label="footer"
              class="styles__Container-sc-19pgex6-0 iFxcHP"
              id="footer"
            >
              <span
                class="MuiTypography-root MuiTypography-overline MuiTypography-alignCenter css-1l6d39d-MuiTypography-root"
              >
                Criado com Next.js
              </span>
            </footer>
        `);
    });
});
