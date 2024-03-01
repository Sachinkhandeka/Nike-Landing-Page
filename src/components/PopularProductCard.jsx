import { star } from "../../assets/icons";

function PopularProductCard({ imgURL, name, price}) {
    return(
        <>
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt="product img" className="object-contain w-[280px] h-[280px]"/>
            <div className="mt-8 flex justify-start items-center gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-lg leading-normal text-slate-gray font-semibold">(4.5)</p>
            </div>
            <h3 className="mt-4 font-palanquin font-semibold text-2xl leadiing-normal">{ name }</h3>
            <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">{ price }</p>
        </div>
        </>
    )
}

export default PopularProductCard ; 