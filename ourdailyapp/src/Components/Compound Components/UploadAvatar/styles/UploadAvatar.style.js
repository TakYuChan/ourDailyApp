import styled from "styled-components";

const S = {};

S.Container = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(1px, 1000px) 1fr;
  justify-content: center;
`;

S.Frame = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.PanelContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;

  max-width: 600px;
  margin-bottom: 1rem;
`;

S.TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

S.Tab = styled.button`
  background: 0;
  outline: 0;
  border: 0;
  color: white;
  //   border: 1px solid red;
  flex-basis: 50%;
  cursor: pointer;
  padding: 0.4rem 0;
`;

S.Group = styled.div`
  display: grid;
  flex-basis: 100%;
`;

S.TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  margin: 0 auto;

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 700px) {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 1400px) {
    margin-top: 4rem;
  }
`;

S.FileInputLabel = styled.label`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: 0;
  font-size: 0.7rem;
  padding: 0.6em 1.2em;
  border: 2px solid white;
  cursor: pointer;

  transition: all 250ms ease-in;

  span {
    margin-right: 0.5rem;
    font-size: 1.8em;
  }

  &:hover {
    background: white;
    color: #303030;
  }
`;

S.FileInput = styled.input`
  display: none;
`;

S.AvatarDisplay = styled.div`
  background: pink;
  --size: 4rem;
  width: var(--size);
  height: var(--size);

  border-radius: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media screen and (min-width: 700px) {
    margin-bottom: 4rem;
    --size: 5rem;
  }
`;

S.Title = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 1.2em;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

S.Text = styled.span`
  font-size: 0.8rem;
  color: white;

  @media screen and (min-width: 1000px) {
    font-size: 1rem;
  }
`;

export default S;
