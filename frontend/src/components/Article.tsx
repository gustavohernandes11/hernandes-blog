import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ArticleProps = {
    category: string;
    title: string;
    excerpt: string;
    readingTime?: string | number;
    date: string | number;
    color: string;
    slug: string;
    imageSrc: string | StaticImageData;
    imageHeight: number;
    imageWidth: number;
    imageAlt: string;
};

export const Article = ({
    category,
    title,
    excerpt,
    date,
    color,
    slug,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
}: ArticleProps) => {
    const props = {
        color: color,
    };
    return (
        <Link href={`/posts/${slug}/`} legacyBehavior passHref={true}>
            <Card
                bgColor="backgroundSecondary"
                border="borderColor"
                transition="transform ease-in-out 0.3s"
                {...props}
                _hover={{
                    cursor: "pointer",
                }}
            >
                <CardHeader p={0}>
                    <Image
                        alt={imageAlt}
                        src={imageSrc}
                        width={imageWidth}
                        height={imageHeight}
                    />
                </CardHeader>
                <CardBody py={0}>
                    <Heading size="md" my="1rem" textColor="textColor">
                        {title}
                    </Heading>
                    <Text size="md" textColor="textColor">
                        {excerpt}
                    </Text>
                </CardBody>
                <CardFooter justify="space-between">
                    <Text fontWeight={700} textColor={color}>
                        {category}
                    </Text>
                    <Text as="time" textColor="textColor">
                        {date}
                    </Text>
                </CardFooter>
            </Card>
        </Link>
    );
};
