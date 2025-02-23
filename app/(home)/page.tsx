import { Card, Cards } from "fumadocs-ui/components/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold font-modista">ZoAO.tech</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>

      <div className="container mx-auto mt-16 flex items-center justify-center gap-8">
        <Card href="/docs" title="ZoAO.tech Overview" className="py-8">
          Learn about the ZoAO.tech protocol and its goals
        </Card>
        <Card
          href="/docs/znft/overview"
          title="zNFT Token Standard"
          className="py-8"
        >
          Learn about the zNFT Token Standard
        </Card>
        <Card
          href="/docs/zoo-keepers/overview"
          title="Zoo Keepers Genesis"
          className="py-8"
        >
          Explore details of Zoo Keepers Genesis NFTs
        </Card>
        <Card
          href="/docs/zoao-market/overview"
          title="ZoAO Market"
          className="py-8"
        >
          Discover the ZoAO Market
        </Card>
      </div>
    </main>
  );
}
