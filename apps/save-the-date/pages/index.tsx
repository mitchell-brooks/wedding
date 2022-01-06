import styled from 'styled-components';
import bgImg from '../assets/images/noses.jpg';
import noisePattern from '../assets/images/noise-pattern';
import shadowVars from '../styles/shadows';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import { useEffect, useRef, useState } from 'react';

const WEDDING_SITE = 'emilyandmitchell.com';
const WEDDING_SITE_PREFIX = 'http://www.';
const WEDDING_EVENT = {
  title: "Emily and Mitchell's Wedding",
  description:
    'Join us for our ceremony and celebration! Wedding details can be found at emilyandmitchell.com',
  location: 'Skylaranna Hotel & Resort, Hendersonville, NC',
  startDatetime: '20220611T163000',
  endDatetime: '20220611T220000',
  timezone: 'America/New_York',
  duration: 5.5,
};

const Background = styled.div<{ bgImg: StaticImageData }>`
  position: fixed;
  background-image: ${(props) => `url(${props.bgImg.src})`};
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vh;
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
`;

const NamesContainer = styled.article`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Names = styled.p`
  --font-size: 1rem;
  @media (min-width: 768px) {
    --font-size: 1.25rem;
  }
  font-family: 'Verlag Extra Light';
  font-size: var(--font-size);
`;

const TopDateContainer = styled.article`
  --font-size: 3rem;
  --margin-left: -1rem;
  --margin-top: -0.25rem;
  @media (min-width: 768px) {
    --font-size: 5rem;
    --margin-left: -1.5rem;
    --margin-top: 0;
  }
  font-size: var(--font-size);
  line-height: var(--font-size);
  margin-left: var(--margin-left);
  margin-top: var(--margin-top);
`;
const WeddingDate = styled.p`
  font-family: 'Didot Bold Italic';
`;

const MoreInfo = styled.article`
  display: flex;
  flex-direction: column;
  height: 50px;
  align-items: center;
`;

const SaveText = styled.p`
  font-family: 'Verlag Extra Light';
`;

const LetterDateContainer = styled.article`
  font-size: 2rem;
  line-height: 2rem;
`;
const Venue = styled.p`
  --font-size: 1.5rem;
  @media (min-width: 768px) {
    --font-size: 2.5rem;
  }
  text-decoration: none;
  font-family: 'Didot Bold Italic';
  font-size: var(--font-size);
  margin-top: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const LetterContainer = styled.section`
  position: absolute;
  display: grid;
  grid-template-columns: var(--grid-columns);
  top: 80vh;
  width: 100%;
  background-color: hsla(0, 0, 0, 0);
  height: 600px;
`;

const Letter = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url(${noisePattern});
  background-color: hsla(102, 54%, 82%, 1);
  height: 400px;
  box-shadow: var(--shadow-elevation-high);
`;

const AddDateLink = styled(Link)`
  font-family: 'Verlag Extra Light';
  font-size: 0.7rem;
  text-transform: uppercase;
  content: 'add to calendar';
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
  cursor: pointer;
`;
const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1rem;
`;

const Dropdown = styled.div`
  --shadow-color: 104deg 18% 46%;
  position: absolute;
  margin-left: 20px;
  box-shadow: var(--shadow-elevation-high);
  background-image: url(${noisePattern});
  background-color: hsla(191, 65%, 65%);
  display: flex;
  flex-direction: column;
  & a {
    text-decoration: none;
    font-family: 'Josefin Sans Medium';
    font-size: 0.75rem;
    text-transform: uppercase;
    color: black;
    padding-left: 10px;
    padding-right: 10px;
  }
  a:first-child {
    padding-top: 3px;
  }
  a: last-child {
    padding-bottom: 3px;
  }
  a:nth-child(odd) {
    background-color: hsla(191, 65%, 68%, 1);
    background-image: url(${noisePattern});
    transform: skew(3deg, 0);
  }
  a:nth-child(even) {
    background-color: hsla(191, 65%, 71%, 1);
    background-image: url(${noisePattern});
    transform: skew(-3deg, 0);
  }
  & a:hover {
    text-decoration: underline;
  }
  &a:after {
    content: '_';
  }
`;

const Spacer = () => <div></div>;

const City = styled.p`
  --font-size: 0.75rem;
  @media (min-width: 768px) {
    --font-size: 1rem;
  }
  font-family: 'Verlag Extra Light';
  font-size: var(--font-size);
  margin-top: -10px;
`;

const MoreDetails = styled.article`
  font-family: 'Verlag Extra Light';
  display: grid;
  grid-template-columns: var(--grid-columns);
`;

const SiteLink = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const FormalInvitation = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export function Index() {
  const [showDropdown, setShowDropdown] = useState(true);
  const dropdownRef = useRef(null);
  const linkRef = useRef(null);
  const handleClick = (event: Event): void => {
    console.log(showDropdown);
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      return;
    }
    if (linkRef.current && linkRef.current.contains(event.target)) {
      setShowDropdown(true);
      return;
    }
    setShowDropdown(false);
    return setShowDropdown(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });

  const FunctionalDropdown = ({ children }) => {
    return showDropdown ? (
      <Dropdown ref={dropdownRef}>{children}</Dropdown>
    ) : null;
  };

  const AddToCalendar = AddToCalendarHOC(AddDateLink, FunctionalDropdown);

  return (
    <>
      <Background bgImg={bgImg}>
        <Grid>
          <Spacer />
          <div>
            <NamesContainer>
              <Names>Emily & Mitchell</Names>
            </NamesContainer>
            <TopDateContainer>
              <WeddingDate>June 11, 2022</WeddingDate>
            </TopDateContainer>
          </div>
        </Grid>
      </Background>
      <LetterContainer>
        <Spacer />
        <Letter>
          <MoreInfo>
            <SaveText>SAVE THE DATE</SaveText>
            <LetterDateContainer>
              <WeddingDate>June 11th, 2022</WeddingDate>
              <AddContainer ref={linkRef}>
                <AddToCalendar event={WEDDING_EVENT} />
              </AddContainer>
            </LetterDateContainer>
            <Venue>
              <Link href="https://www.skylaranna.com/">Skylaranna Resort</Link>
            </Venue>
            <City>Hendersonville, NC</City>
          </MoreInfo>
          <MoreDetails>
            <Spacer />
            <SiteLink>
              Wedding details can be found at <br />
              <Link href={`${WEDDING_SITE_PREFIX}${WEDDING_SITE}`}>
                {WEDDING_SITE}
              </Link>
            </SiteLink>
            <Spacer />
            <Spacer />
            <FormalInvitation>Formal invitation to follow.</FormalInvitation>
          </MoreDetails>
        </Letter>
        <Spacer />
      </LetterContainer>
    </>
  );
}

export default Index;
