import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { AuthorProfile } from "./index";

describe("<AuthorProfile/>", () => {
    it("should render the AuthorProfile component", () => {
        customRender(<AuthorProfile>Texto para teste</AuthorProfile>);
    });
});
