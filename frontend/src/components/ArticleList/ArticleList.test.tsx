import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { ArticleList } from "./index";

describe("<ArticleList/>", () => {
    it("should render the ArticleList component", () => {
        customRender(<ArticleList>Texto para teste</ArticleList>);
    });
});
