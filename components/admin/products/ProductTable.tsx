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
import AddProductDialog from "./AddProductDialog";
import DeleteProductDialog from "./DeleteProductDialog";
import EditProductDialog from "./EditProductDialog";

export default function ProductTable() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [editId, setEditId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const router = useRouter();

    const queryArgs = useMemo(
        () => {
            if (category !== "all") {
                return {
                    query: {
                        category,
                        limit: 50,
                        skip: 0,
                    },
                }
            }
            else {
                return {
                    query: {
                        limit: 50,
                        skip: 0,
                    },
                }
            }
        },
        [category]
    );

    const { data, isLoading } = useGetAllProductsByCategoryQuery(queryArgs);

    const products = data?.data || [];
    console.log("products", products);


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
                    (id) => {
                        setEditId(id);
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
        initialState: {
            pagination: {
                pageSize: products.length || 10,
            },
        },
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
                productId={editId}
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