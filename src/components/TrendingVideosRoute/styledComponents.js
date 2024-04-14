import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#0f0f0f' : '#f9f9f9'};
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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

export const TrendingLogoContainer = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  background-color: #ebebeb;
  min-height: 120px;
  width: 98%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const TrendingIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d7dfe9;
  color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #777;
  font-weight: 700;
`

export const VideoListContainer = styled.div`
  width: 98%;
  padding: 16px;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex: 1;
  }
`

export const VideosSearchContainer = styled.div`
  display: flex;
  border: 2px solid #e2e8f0;
  width: 80%;
  max-width: 400px;
  margin-bottom: 32px;
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
  justify-content: center;
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
