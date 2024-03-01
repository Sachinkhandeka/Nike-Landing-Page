import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

function CustomerReviews() {
    return (
        <>
          <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                what Our
                <span className="text-coral-red"> Customers </span> Say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                Hear from our satisfied customers about their
                exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                { reviews.map((review)=> {
                    return(
                        <ReviewCard key={review.customerName} { ...review } />
                    )
                })}
            </div>
          </section>
        </>
    )
}
export default CustomerReviews ; 