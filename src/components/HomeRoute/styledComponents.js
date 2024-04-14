import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#181818' : '#f9f9f9'};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#0f0f0f' : '#f9f9f9'};
`
export const ResponsiveContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 100vw;
    flex-direction: row;
    align-items: flex-start;
  }
`

export const CustomSpan = styled.span`
  font-size: 18px;
  color: #1e293b;
  font-family: 'Roboto';
  margin-left: 24px;
  &:hover {
    font-weight: 600;
  }
`

export const CustomButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`

export const BannerAndVideosListContainer = styled.div`
  width: 98%;
  padding: 12px;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex: 1;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 300px;
  padding: 16px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`

export const LogoImage = styled.img`
  width: 120px;
  height: 40px;
`
export const CrossButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 24px;
`
export const BannerText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 32px;
`
export const BannerButton = styled.button`
  padding: 12px 20px 12px 20px;
  border: 2px solid #efacd1;
  color: #1e293b;
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
`
export const VideoListContainer = styled.div`
  min-height: 400px;
  padding: 16px;
`

export const VideosSearchContainer = styled.form`
  display: flex;
  border: 2px solid #e2e8f0;
  width: 80%;
  max-width: 400px;
  margin-bottom: 32px;
`
export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  font-size: 16px;
  min-width: 120px;
  flex-grow: 1;
  color: ${({isInDarkMode}) => (isInDarkMode ? '#fff' : '#000')};
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  width: 30px;
  padding-top: 5px;
`
export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;
`

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureViewContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureViewImage = styled.img`
  width: 90%;
  max-width: 550px;
  margin-bottom: 16px;
`
export const FailureViewContentContainer = styled.div`
  text-align: center;
`

export const FailureHeding = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #1e293b;
`

export const FailureText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1e293b;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
  border0=-radius: 12px;
  padding: 12px 20px 12px 20px;
`

export const NoSearchResultContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSearchResultImage = styled.img`
  width: 90%;
  max-width: 550px;
  margin-bottom: 16px;
`
export const NoSearchResultContentContainer = styled.div`
  text-align: center;
`

export const NoSearchResultHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #1e293b;
`

export const NoSearchResultText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1e293b;
`
