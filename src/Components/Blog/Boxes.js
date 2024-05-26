import Box from "./Box";

export default function Boxes() {
    return (
        <div className="grid grid-cols-3 gap-x-8">
            <Box img="./images/blog-1.jpg" />
            <Box img="./images/blog-2.jpg" />
            <Box img="./images/blog-3.jpg" />
        </div>
    );
}
