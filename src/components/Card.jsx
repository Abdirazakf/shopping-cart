import styled from 'styled-components';

const Card = ({id, title, price, image}) => {
  return (
    <StyledWrapper>
      <div className="card" key={id}>
        <div className="card-details">
          <img src={image} alt={title} />
          <p className="text-title">{title}</p>
          <p className="text-body">${price}</p>
        </div>
        <button className="card-button">Add to Cart</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.5rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: hidden;
  }

  .card-details {
    height: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  img {
    max-width: 110px;
    max-height: 110px;
    object-fit: contain;
    margin-bottom: 0.3rem;
  }

  .text-title {
    font-size: 0.95em;
    font-weight: bold;
    text-align: center;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3;
    max-width: 100%;
  }

  .text-body {
    color: rgb(134, 134, 134);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  .card-button {
    transform: translate(-50%, 125%);
    border-radius: 1rem;
    border: none;
    width: 60%;
    height: 40px;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    opacity: 0;
    transition: 0.3s ease-out;
    cursor: pointer;
  }

  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 30%);
    opacity: 1;
  }
`;

export default Card;