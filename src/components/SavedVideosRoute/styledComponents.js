import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#0f0f0f' : '#f9f9f9'};
`
export const SavedContainer = styled.div`
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
export const SavedLogoContainer = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  background-color: #ebebeb;
  min-height: 120px;
  width: 98%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1240px;
  }
`
export const SavedIconContainer = styled.div`
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
export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #181818;
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
export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;
`

export const EmptyViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #777;
  padding: 16px;
`
export const EmptyViewImage = styled.img`
  width: 90%;
  max-width: 550px;
  height: auto;
  margin-bottom: 16px;
`
export const EmptyTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
`

export const EmptyDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const SavedVideoListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`
