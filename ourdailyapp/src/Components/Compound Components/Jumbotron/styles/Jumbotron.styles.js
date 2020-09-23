import styled from "styled-components";

const S = {};

S.Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

S.ImagePane = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

S.TextPane = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

S.Item = styled.div`
  display: flex;
  color: white;

  &:not(:last-of-type) {
    margin-bottom: 100px;
  }
`;

S.Container = styled.section`
  // background: #303030;

  @media (max-width: 1000px) {
    ${S.Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

S.Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

S.SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

S.Image = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  transition: all 250ms ease-in;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.5);
  }
`;

S.EndingSpan = styled.span`
  font-size: 2rem;
  color: white;
  display: block;
  text-align: center;
`;

S.LinkBtn = styled.button`
  outline: 0;
  border: 0;
  padding: 0.4em 1.5em;
  border-radius: 50px;
  border: 2px solid #0059a6;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem;

  background: #0059a6;
  color: white;

  transition: all 250ms ease-in;

  &:hover {
    background: 0;
    color: #0059a6;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default S;
