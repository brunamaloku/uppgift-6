export default function GetStars(rating) {
    let stars = [];
    for (let i = 0; i < rating.rating; i++) {
      stars.push(<img src={"images/star.png"} alt="Star" key={i}></img>);
    }
    return (stars)
  }