import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What Our 
        <span className="text-stone-500"> Cutomers </span>
      Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Customers speak volumes with their satisfaction.
        Hear their prais on our products and services as a testament to the unparalleled quality and commitment we bring to every interaction.</p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews