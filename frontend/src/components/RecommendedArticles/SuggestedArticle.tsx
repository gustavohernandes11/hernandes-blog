import {
    Flex,
    IconButton,
    Icon,
    Heading,
    HStack,
    Text,
    Link as ChakraLink,
    Card,
} from "@chakra-ui/react";
import { ChevronRight, ChevronLeft } from "@styled-icons/feather";
import Link from "next/link";
import { ArticleProps } from ".";

export const SuggestedArticle = ({
    direction = "right",
    category,
    title,
    excerpt,
    publishedAt,
    slug,
}: ArticleProps) => {
    const articleUrl = `/posts/${slug}/`;
    return (
        <Card
            href={articleUrl}
            as={ChakraLink}
            _hover={{
                cursor: "pointer",
                textDecoration: "none",
                opacity: 0.9,
            }}
            flexDirection={direction === "right" ? "row-reverse" : "row"}
            bgColor="backgroundTertiary"
            border="1px solid"
            borderColor="borderColor"
            borderRadius="6px"
            gap="1rem"
            alignItems="center"
            w="100%"
            p={["1rem", null, null, "2rem"]}
        >
            <IconButton
                aria-label="prev-article"
                variant="unstyled"
                borderRadius="full"
                textColor="textColor"
            >
                <Icon
                    strokeWidth={2}
                    as={direction === "right" ? ChevronRight : ChevronLeft}
                />
            </IconButton>
            <Flex flexDirection="column" w="100%" textColor="textColor">
                <Heading size={["md", null, null, "lg"]}>{title}</Heading>
                <Text size={["sm", null, null, "md"]} mt="0.5rem" mb="1.5rem">
                    {excerpt}
                </Text>
                <HStack as="footer" w="100%" fontSize="0.8rem">
                    <Text fontWeight={700} textColor={category?.color}>
                        {category?.name}
                    </Text>
                    <Text mx="1rem" size={"sx"}>
                        •
                    </Text>

                    <Text as="time" textColor="textColorSecondary">
                        {publishedAt}
                    </Text>
                </HStack>
            </Flex>
        </Card>
    );
};
