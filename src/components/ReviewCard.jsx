import { star } from "../../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
    return(
        <>
        <div className="flex justify-center items-center flex-col">
            <img src={ imgURL } alt="cutomer" className="rounded-full object-cover w-[120px] h-[120px]"/>
            <p className="mt-6 max-w-sm info-text">{ feedback }</p>
            <div className="mt-3 flex flex-1 justify-center items-center gap-2.5">
                <img src={ star } alt="rating" height={24} width={24} className="object-contain m-0"/>
                <p className="text-xl font-montserrat text-slate-gray">({ rating })</p>
            </div>
            <h3 className="mt-2 text-2xl font-bold font-palanquin">{ customerName }</h3>
        </div>
        </>
    )
}

export default ReviewCard ; 