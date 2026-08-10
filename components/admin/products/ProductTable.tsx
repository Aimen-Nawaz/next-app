"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { columns } from "./columns";
import { useGetAllProductsByCategoryQuery } from "@/services/product";

import ProductFilters from "./ProductFilters";
import ProductTableContent from "./ProductTableContent";
import ProductPagination from "./ProductPagination";
import ProductDetailModal from "./ProductDetailModal";
import AddProductDialog from "./dialogs/AddProductDialog";
import DeleteProductDialog from "./dialogs/DeleteProductDialog";
import EditProductDialog from "./dialogs/EditProductDialog";
import { Product } from "@/types/product";

export default function ProductTable() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [editProduct, setEditProduct] = useState<Product | null>(null);
    const [deleteId, setDeleteId] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const router = useRouter();
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const queryArgs = useMemo(() => {
        const limit = pagination.pageSize;
        const skip = pagination.pageIndex * limit;

        if (category !== "all") {
            return {
                query: {
                    category,
                    limit,
                    skip,
                },
            };
        }

        return {
            query: {
                limit,
                skip,
            },
        };
    }, [category, pagination.pageIndex, pagination.pageSize]);

    const { data, isLoading } = useGetAllProductsByCategoryQuery(queryArgs);
    const totalProducts = data?.total ?? 0;
    const pageSize = data?.limit ?? pagination.pageSize;
    const products = data?.data ?? [];

    const pageCount = useMemo(() => {
        if (!totalProducts || !pageSize) return 1;
        return Math.max(1, Math.ceil(totalProducts / pageSize));
    }, [pageSize, totalProducts]);

    const [open, setOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        const searchValue = search.toLowerCase();

        return products.filter((p: any) => {
            const matchesSearch = (p.name ?? "")
                .toLowerCase()
                .includes(searchValue);


            return matchesSearch;
        });
    }, [products, search, category]);

    const table = useReactTable({
        data: filteredProducts,
        columns: useMemo(
            () =>
                columns(
                    (id, category) => {
                        setSelectedId(id);
                        setSelectedCategory(category);
                        setOpen(true);
                    },
                    (product) => {
                        setEditProduct(product);
                        setEditOpen(true);
                    },
                    (id) => {
                        setDeleteId(id);
                        setDeleteOpen(true);
                    }
                ),
            [router]
        ),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
        pageCount,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
    });

    return (
        <div className="space-y-5">
            <ProductFilters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                onAdd={() => setAddOpen(true)}
            />

            <ProductTableContent
                table={table}
                isLoading={isLoading}
            />

            <ProductPagination table={table} />

            <ProductDetailModal
                productId={selectedId}
                category={selectedCategory}
                open={open}
                onOpenChange={setOpen}
            />
            <AddProductDialog
                addopen={addOpen}
                onOpenChange={setAddOpen}
            />
            <EditProductDialog
                open={editOpen}
                onOpenChange={setEditOpen}
                product={editProduct}
            />

            <DeleteProductDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
                onDelete={() => {
                    console.log("Deleting:", deleteId);


                    setDeleteOpen(false);
                }}
            />
        </div>
    );
}