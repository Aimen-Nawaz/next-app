"use client"

import { useMemo } from 'react'
import ItemNotFound from '@/components/common/ItemNotFound'
import ProductCard from '@/components/common/ProductCard'

import ProductCardSkeleton from '@/components/common/ProductCardSkeleton'
import { useGetAllProductsByCategoryQuery } from '@/services/product'


interface Props {
    category: string
    title: string
}

const ProductList = ({ category, title }: Props) => {

    const queryArgs = useMemo(() => ({
        query: {
            category,
            limit: 4,
            skip: 0,
        }
    }), [category])

    const { data: produtsRes, isLoading: loading } = useGetAllProductsByCategoryQuery(
        queryArgs,
        {
            skip: !category
        }
    )

    const products = produtsRes && produtsRes.data

    //loading
    if (loading) {
        return Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
        ))


    }

    //Not Found or product=[]
    if (!products || products.length === 0) (
        <ItemNotFound title={`No ${title} Found`}
            description={`We don't have any ${title.toLowerCase()} available right now. Please check back soon!`}
        />
    )



    return products && products.map((product) => (
        <ProductCard
            key={product.id}
            product={product}
        />
    ))

}

export default ProductList
