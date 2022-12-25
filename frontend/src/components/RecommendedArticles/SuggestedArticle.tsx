import {
    Flex,
    IconButton,
    Icon,
    Heading,
    HStack,
    Text,
} from "@chakra-ui/react";
import { ChevronRight, ChevronLeft } from "@styled-icons/feather";
import Link from "next/link";
import { ArticleProps } from ".";

export const SuggestedArticle = ({
    direction = "right",
    category,
    title,
    excerpt,
    date,
    slug,
}: ArticleProps) => {
    return (
        <Link href={`/posts/${slug}/`} legacyBehavior passHref={true}>
            <Flex
                _hover={{
                    bgColor: "backgroundSecondary",
                    cursor: "pointer",
                }}
                flexDirection={direction === "right" ? "row-reverse" : "row"}
                bgColor="backgroundTertiary"
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
                    <Heading size={["sm", null, "md"]}>{title}</Heading>
                    <Text size={["sm", null, "md"]} mt="0.5rem" mb="1rem">
                        {excerpt}
                    </Text>
                    <HStack as="footer" w="100%" fontSize="0.8rem">
                        <Text fontWeight={700} textColor={category.color}>
                            {category.name}
                        </Text>
                        <Text mx="1rem" size={"sx"}>
                            •
                        </Text>

                        <Text as="time" textColor="textColorSecondary">
                            {date}
                        </Text>
                    </HStack>
                </Flex>
            </Flex>
        </Link>
    );
};
