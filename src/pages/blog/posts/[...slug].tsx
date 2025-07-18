// Dinamic route

import { useRouter } from "next/router";

export default function PostPage() { 
    const router = useRouter();
    const segments = router.query.slug as string[];

    return (
        <div>
        <h2 >post: {segments?.join("/")}</h2>
        </div>
    );
}
