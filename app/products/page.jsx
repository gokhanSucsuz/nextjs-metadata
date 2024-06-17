import Link from "next/link"


export const metadata = {
    title: "Products"
}

const Products = async () => {
    return (
        <>
            <div className="flex gap-2 m-3">
                <Link href="/products/1"><div className="bg-green-800 text-white p-3 rounded-lg w-32">Products 1</div></Link>
                <Link href="/products/2"><div className="bg-green-800 text-white p-3 rounded-lg w-32">Products 2</div></Link>
                <Link href="/products/3"><div className="bg-green-800 text-white p-3 rounded-lg w-32">Products 3</div></Link>
                <Link href="/products/4"><div className="bg-green-800 text-white p-3 rounded-lg w-32">Products 4</div></Link>
            </div>


        </>
    )
}

export default Products