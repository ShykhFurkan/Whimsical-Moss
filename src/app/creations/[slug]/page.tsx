import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CREATION_ITEMS, getCreationBySlugOrId } from "@/data/site-content";
import { ProductDetailView } from "./product-detail-view";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  CREATION_ITEMS.forEach((item) => {
    slugs.push({ slug: item.slug });
    slugs.push({ slug: item.id });
  });
  return slugs;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getCreationBySlugOrId(slug);

  if (!product) {
    return {
      title: "Product Not Found | Whimsical Moss",
    };
  }

  return {
    title: `${product.title} | Whimsical Moss`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Whimsical Moss`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getCreationBySlugOrId(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      <SiteHeader />
      <main className="flex-1">
        <ProductDetailView product={product} />
      </main>
      <SiteFooter />
    </div>
  );
}
