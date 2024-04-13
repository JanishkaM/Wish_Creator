import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function SendMessage() {
  const [rating, setRating] = useState(3); // Default rating is set to 3
  const [review, setReview] = useState("");

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the review data, like sending it to a backend server or storing it locally.
    console.log("Rating:", rating);
    console.log("Review:", review);
    // Reset form fields after submission if needed
    setRating(3);
    setReview("");
  };
  return (
    <main className="flex flex-col min-h-screen mx-auto w-auto justify-between">
      <Nav />
      <div className="container p-5 grid grid-cols-1 md:grid-cols-2 mx-auto mt-8">
        <div className="div">
          <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4" >
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating:
              </label>
              <input
                type="range"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={rating}
                onChange={handleRatingChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700"
              >
                Review:
              </label>
              <textarea
                id="review"
                name="review"
                rows="3"
                value={review}
                onChange={handleReviewChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="div"></div>
      </div>
      <Footer />
    </main>
  );
}
