import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Content } from "./index";

describe("<Content />", () => {
    it("should render the Content children components", () => {
        customRender(
            <Content>
                <div>Children</div>
            </Content>
        );
        const children = screen.getByText(/children/i);
        expect(children).toMatchInlineSnapshot(`
            <div>
              Children
            </div>
        `);
    });
});
