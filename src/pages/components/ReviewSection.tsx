type Props = {
  review: string;
};

export default function ReviewSection({ review }: Props) {
  return (
    <div className="review-container">
      <div>Review:</div>
      <p className="review-text">{review}</p>
    </div>
  );
}
