import { config } from "../config";
import "graphql-request";
export const loadPosts = async () => {
    const payload = {
        query: `
        query GET_POSTS {
            posts {
              data {
                id
                attributes {
                  Title
                  Slug
                  Cape {
                    data {
                      attributes {
                        width
                        height
                        url
                      }
                    }
                  }
                  Content
                  Reference
                  Excerpt
                  Category
                  Meta {
                    Title
                    Description
                    Keywords
                  }
                }
              }
            }
          }
          
        `,
    };

    const url = `${config.hostname}/graphql`;
    let response: object[] = [];

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
        .then((r) => r)
        .then((r) => r.json())
        .then(({ data }) => {
            console.log(data.posts.data);
            response = data.posts.data;
        })
        .catch((e) => console.log("Houve um erro: " + e));

    return response;
};
