import Image from "next/image";
import { cookies } from "@/lib/data/cookies";
import CartButton from "@/components/common/CartButton";

export default async function CookieDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const cookie = cookies.find(
        (item) => item.id === Number(id)
    );

    if (!cookie) {
        return (
            <h1 className="text-center text-3xl font-bold">
                Cookie Not Found
            </h1>
        );
    }

    return (
        <main className="min-h-screen bg-[#FFF9F6] py-20">

            <div className="mx-auto max-w-6xl px-6">

                {/* Image + Details */}
                <div className="grid gap-12 md:grid-cols-2">

                    {/* Image */}
                    <div className="relative h-[500px] overflow-hidden rounded-3xl">
                        <Image
                            src={cookie.image}
                            alt={cookie.name}
                            fill
                            className="object-cover"
                        />
                    </div>


                    {/* Details */}
                    <div>

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#A65A2E]">
                            {cookie.category}
                        </p>

                        <h1 className="mt-3 text-5xl font-bold text-[#2D221C]">
                            {cookie.name}
                        </h1>

                        <p className="mt-5 text-gray-600">
                            {cookie.description}
                        </p>


                        <h3 className="text-xl font-semibold">
                            Flavours
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-3">
                            {cookie.flavours.map((flavour) => (
                                <span
                                    key={flavour}
                                    className="rounded-full bg-[#FCE8DE] px-4 py-2"
                                >
                                    {flavour}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold">
                            Sizes
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-3">
                            {cookie.sizes.map((size) => (
                                <span
                                    key={size}
                                    className="rounded-lg border px-4 py-2"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                        <p className="mt-4 text-3xl font-bold">
                            Rs. {cookie.price}
                        </p>
                        
                        <h3 className="text-xl font-semibold">
                            Rating
                        </h3>

                        <p className="mt-1 text-lg">
                            ⭐ {cookie.rating}/5
                        </p>


                        <div className="flex items-center">
                            <CartButton
                                product={{
                                    id: cookie.id,
                                    name: cookie.name,
                                    price: cookie.price,
                                    image: cookie.image,
                                }}
                            />
                        </div>



                    </div>

                </div>




            </div>



        </main>
    );
}