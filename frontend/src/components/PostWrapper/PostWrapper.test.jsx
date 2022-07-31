import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { PostWrapper } from "./index";

describe("<PostWrapper />", () => {
    it("should render the PostWrapperList component", () => {
        customRender(<PostWrapper />);
        const postWrapper = screen.getByLabelText("post-wrapper");
        expect(postWrapper).toBeInTheDocument();
    });

        
    });
    
    
});
