import styled from 'styled-components';
import bgImg from '../assets/images/noses.jpg';
import noisePattern from '../assets/images/noise-pattern';
import shadowVars from '../styles/shadows';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';

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

const StyledBackground = styled.div<{ bgImg: StaticImageData }>`
  position: fixed;
  background-image: ${(props) => `url(${props.bgImg.src})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const NamesContainer = styled.article`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Names = styled.p`
  font-family: 'Verlag Extra Light';
  font-size: 1.25rem;
`;

const TopDateContainer = styled.article`
  font-size: 5rem;
  line-height: 5rem;
  margin-left: -1.5rem;
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
  text-decoration: none;
  font-family: 'Didot Bold Italic';
  font-size: 2.5rem;
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
  grid-template-columns: 1fr 3fr 1fr;
  top: 80vh;
  width: 100%;
  background-color: hsla(0, 0, 0, 0);
  height: 600px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 5fr 1fr;
  }
`;
const Letter = styled.article`
  ${shadowVars()}
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
  content: 'add to calendar';
  text-transform: uppercase;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
`;
const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1rem;
`;

const Dropdown = styled.div`
  ${shadowVars('104deg 18% 46%')}
  position: absolute;
  padding: 6px 10px;
  margin-left: 20px;
  box-shadow: var(--shadow-elevation-high);
  background-image: url(${noisePattern});
  background-color: hsla(191, 65%, 70%, 1);
  border: 1px dotted hsla(191, 55%, 80%, 1);
  display: flex;
  flex-direction: column;
  & a {
    text-decoration: none;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: black;
  }
  & a:hover {
    text-decoration: underline;
  }
  &a:after {
    content: '_';
  }
`;

const FunctionalButton = ({ children }) => (
  <AddDateLink>{children}</AddDateLink>
);
const FunctionalDropdown = ({ children }) => <Dropdown>{children}</Dropdown>;

const AddToCalendar = AddToCalendarHOC(AddDateLink, FunctionalDropdown);
const Spacer = () => <div></div>;

const StyledCity = styled.p`
  font-family: 'Verlag Extra Light';
  margin-top: 0;
`;

const MoreDetails = styled.article`
  font-family: 'Verlag Extra Light';
`;

const SiteLink = styled.p``;
const FormalInvitation = styled.p`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export function Index() {
  return (
    <>
      <StyledBackground bgImg={bgImg}>
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
      </StyledBackground>
      <LetterContainer>
        <Spacer />
        <Letter>
          <MoreInfo>
            <SaveText>SAVE THE DATE</SaveText>
            <LetterDateContainer>
              <WeddingDate>June 11th, 2022</WeddingDate>
              <AddContainer>
                <AddToCalendar event={WEDDING_EVENT} />
              </AddContainer>
            </LetterDateContainer>
            <Venue>
              <Link href="https://www.skylaranna.com/">Skylaranna Resort</Link>
            </Venue>
            <StyledCity>Hendersonville, NC</StyledCity>
          </MoreInfo>
          <MoreDetails>
            <SiteLink>
              Wedding details can be found at{' '}
              <Link href={`${WEDDING_SITE_PREFIX}${WEDDING_SITE}`}>
                {WEDDING_SITE}
              </Link>
            </SiteLink>
            <FormalInvitation>Formal invitation to follow.</FormalInvitation>
          </MoreDetails>
        </Letter>
        <Spacer />
      </LetterContainer>
    </>
  );
}

export default Index;
