import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface props {
    icon?: string;
    title: string;
    description: string;
    keyword: string;
}

export default function FeatureCard({ icon, title, description, keyword }: props) {
    return (
        <Card>
            {icon && <CardContent className="flex justify-center items-center">
                <Image className="w-20" fill={false} src={icon} alt={`${title} icon`} />
            </CardContent>}
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardDescription><i>Keyword: {keyword}</i></CardDescription>
            </CardHeader>
            <CardDescription>
            </CardDescription>
        </Card>
    )
}