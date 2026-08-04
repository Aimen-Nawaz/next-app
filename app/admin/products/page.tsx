import ProductTable from "@/components/admin/products/ProductTable";

export default function ProductsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-muted-foreground">
          Manage all your products here.
        </p>
      </div>

      <ProductTable />
    </div>
  );
}