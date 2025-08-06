import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

export const Header = () => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const isBlogPage = router.pathname === '/blog'

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" >LOGO</Link>

                    <nav className="flex items-center gap-6">
                        <Link href="/" className={cn('text-sm font-medium transition-colors hover:text-blue-400', isHomePage? 'text-blue-500':'text-muted-foreground' )}>INÍCIO</Link>
                        <Link href="/blog" className={cn( isBlogPage ? 'text-blue-500 text-sm font-medium transition-colors hover:text-blue-400' : 'text-muted-foreground')}>BLOG</Link>
                        <Button variant="secondary">Começar</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
